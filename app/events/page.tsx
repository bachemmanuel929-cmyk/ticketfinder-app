import { Suspense } from "react";
import { EventCard } from "@/components/EventCard";
import { EventFilters } from "@/components/EventFilters";
import { EventGridSkeleton } from "@/components/EventGridSkeleton";
import { ErrorMessage } from "@/components/ErrorMessage";
import { searchEvents, StubHubApiError } from "@/lib/stubhub";

interface EventsPageProps {
  searchParams: Promise<{
    q?: string;
    location?: string;
    category?: string;
    date?: string;
  }>;
}

async function EventResults({
  query,
  location,
  category,
}: {
  query: string;
  location?: string;
  category?: string;
}) {
  const searchQuery = [query, category].filter(Boolean).join(" ").trim();

  if (!searchQuery) {
    return (
      <p className="text-muted-foreground py-12 text-center">
        Enter a search term or pick a category to find events.
      </p>
    );
  }

  try {
    const { events, total } = await searchEvents(searchQuery, location);

    if (events.length === 0) {
      return (
        <p className="text-muted-foreground py-12 text-center">
          No events found for &ldquo;{searchQuery}&rdquo;.
          {location && ` near ${location}`}
        </p>
      );
    }

    return (
      <>
        <p className="text-sm text-muted-foreground mb-6">
          {total} event{total !== 1 ? "s" : ""} found
        </p>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </>
    );
  } catch (error) {
    const message =
      error instanceof StubHubApiError
        ? error.message
        : "Unable to search events. Please try again later.";

    return <ErrorMessage message={message} />;
  }
}

export default async function EventsPage({ searchParams }: EventsPageProps) {
  const params = await searchParams;
  const query = params.q ?? "";
  const location = params.location;
  const category = params.category;

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Search Events</h1>
        <p className="mt-2 text-muted-foreground">
          Browse live events and find tickets on StubHub.
        </p>
      </header>

      <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
        <aside>
          <Suspense fallback={<div className="h-64 animate-pulse rounded-lg bg-muted" />}>
            <EventFilters />
          </Suspense>
        </aside>

        <div>
          <Suspense fallback={<EventGridSkeleton count={9} />}>
            <EventResults query={query} location={location} category={category} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
