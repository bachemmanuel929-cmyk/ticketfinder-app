/**
 * StubHub data client — simulated mock layer for development.
 * Swap back to live API calls when STUBHUB_CONSUMER_KEY credentials are available.
 */

import { mockEvents, type MockEvent } from "@/data/mockEvents";

const SIMULATED_LATENCY_MS = 400;
const AFFILIATE_SUB_ID = "test_affiliate_id";

export interface StubHubEvent {
  id: string;
  name: string;
  date: string;
  venue: {
    name: string;
    city?: string;
    state?: string;
    country?: string;
  };
  category?: string;
  subCategory?: string;
  imageUrl?: string;
  minPrice?: number;
  currency?: string;
  url: string;
  ticketCount?: number;
  status?: string;
  description?: string;
}

export interface SearchEventsResult {
  events: StubHubEvent[];
  total: number;
}

export class StubHubApiError extends Error {
  constructor(
    message: string,
    public statusCode?: number
  ) {
    super(message);
    this.name = "StubHubApiError";
  }
}

function simulateNetworkDelay(): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, SIMULATED_LATENCY_MS));
}

function mockToStubHubEvent(event: MockEvent): StubHubEvent {
  const ticketCounts: Record<string, number> = {
    "evt-001": 842,
    "evt-002": 1204,
    "evt-003": 156,
    "evt-004": 3200,
    "evt-005": 890,
    "evt-006": 2100,
    "evt-007": 98,
    "evt-008": 4500,
    "evt-009": 680,
    "evt-010": 1750,
    "evt-011": 112,
    "evt-012": 2400,
    "evt-013": 980,
    "evt-014": 74,
  };

  return {
    id: event.id,
    name: event.title,
    date: event.date,
    venue: {
      name: event.venue.name,
      city: event.venue.city,
      state: event.venue.state,
    },
    category: event.category,
    subCategory: event.subCategory,
    imageUrl: event.imageUrl,
    minPrice: event.minPrice,
    currency: "USD",
    url: event.stubhubOriginalUrl,
    description: event.description,
    ticketCount: ticketCounts[event.id] ?? 200,
    status: "Available",
  };
}

function matchesQuery(event: MockEvent, query: string): boolean {
  const normalized = query.toLowerCase().trim();
  if (!normalized) return true;

  const haystack = [
    event.title,
    event.category,
    event.subCategory,
    event.description,
    event.venue.name,
    event.venue.city,
    event.venue.state,
  ]
    .join(" ")
    .toLowerCase();

  const tokens = normalized.split(/\s+/).filter(Boolean);
  return tokens.every((token) => haystack.includes(token));
}

function matchesLocation(event: MockEvent, location: string): boolean {
  const normalized = location.toLowerCase().trim();
  if (!normalized) return true;

  const locationHaystack = [
    event.venue.city,
    event.venue.state,
    event.venue.name,
  ]
    .join(" ")
    .toLowerCase();

  return locationHaystack.includes(normalized);
}

function matchesCategory(event: MockEvent, query: string): boolean {
  const normalized = query.toLowerCase().trim();
  const categoryKeywords: Record<MockEvent["category"], string[]> = {
    sports: ["sport", "sports", "nba", "nfl", "mlb", "ufc", "formula", "f1"],
    concerts: ["concert", "concerts", "music", "festival", "pop", "hip-hop"],
    theater: ["theater", "theatre", "broadway", "musical", "show"],
  };

  for (const [category, keywords] of Object.entries(categoryKeywords)) {
    if (keywords.some((kw) => normalized.includes(kw))) {
      return event.category === category;
    }
  }

  return true;
}

function isPopularQuery(query: string): boolean {
  return /\bpopular\b|\btrending\b|\ball\b|\bevents\b/i.test(query);
}

/**
 * Search events from the mock dataset with simulated network latency.
 */
export async function searchEvents(
  query: string,
  location?: string
): Promise<SearchEventsResult> {
  await simulateNetworkDelay();

  const trimmedQuery = query.trim();

  if (!trimmedQuery) {
    return { events: [], total: 0 };
  }

  let filtered = mockEvents;

  if (!isPopularQuery(trimmedQuery)) {
    filtered = filtered.filter(
      (event) =>
        matchesQuery(event, trimmedQuery) && matchesCategory(event, trimmedQuery)
    );
  }

  if (location?.trim()) {
    filtered = filtered.filter((event) => matchesLocation(event, location));
  }

  filtered = [...filtered].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  const events = filtered.map(mockToStubHubEvent);

  return { events, total: events.length };
}

/**
 * Fetch a single event by ID from the mock dataset.
 */
export async function getEventDetails(eventId: string): Promise<StubHubEvent> {
  await simulateNetworkDelay();

  const event = mockEvents.find((e) => e.id === eventId);

  if (!event) {
    throw new StubHubApiError(`Event not found: ${eventId}`, 404);
  }

  return mockToStubHubEvent(event);
}

const IMPACT_TRACKING_DOMAIN = "stubhub.pxf.io";

/**
 * Build an Impact Radius deep link when publisher and campaign IDs are configured.
 * Falls back to appending subId on the direct StubHub URL for local development.
 */
export function generateAffiliateLink(
  stubhubUrl: string,
  subId?: string
): string {
  const publisherId = process.env.STUBHUB_PUBLISHER_ID;
  const campaignId = process.env.STUBHUB_CAMPAIGN_ID;
  const trackingSubId = subId ?? publisherId ?? AFFILIATE_SUB_ID;

  if (publisherId && campaignId) {
    const impactUrl = new URL(
      `https://${IMPACT_TRACKING_DOMAIN}/c/${publisherId}/0/${campaignId}`
    );
    impactUrl.searchParams.set("u", stubhubUrl);
    impactUrl.searchParams.set("subId1", trackingSubId);
    return impactUrl.toString();
  }

  try {
    const url = new URL(stubhubUrl);
    url.searchParams.set("subId", trackingSubId);
    return url.toString();
  } catch {
    const separator = stubhubUrl.includes("?") ? "&" : "?";
    return `${stubhubUrl}${separator}subId=${encodeURIComponent(trackingSubId)}`;
  }
}
