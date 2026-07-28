import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarDays, ExternalLink, MapPin, Ticket } from "lucide-react";
import { ErrorMessage } from "@/components/ErrorMessage";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  generateAffiliateLink,
  getEventDetails,
  StubHubApiError,
} from "@/lib/stubhub";
import { formatEventDate, formatPrice } from "@/lib/utils";

interface EventDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: EventDetailPageProps) {
  const { id } = await params;

  try {
    const event = await getEventDetails(id);
    return {
      title: event.name,
      description: `Find tickets for ${event.name} at ${event.venue.name} on StubHub.`,
    };
  } catch {
    return { title: "Event Details" };
  }
}

export default async function EventDetailPage({ params }: EventDetailPageProps) {
  const { id } = await params;

  let event;
  try {
    event = await getEventDetails(id);
  } catch (error) {
    if (error instanceof StubHubApiError && error.statusCode === 404) {
      notFound();
    }

    return (
      <div className="container mx-auto px-4 py-12 max-w-2xl">
        <ErrorMessage
          message={
            error instanceof StubHubApiError
              ? error.message
              : "Unable to load event details."
          }
        />
        <Button variant="outline" className="mt-6" asChild>
          <Link href="/events">Back to search</Link>
        </Button>
      </div>
    );
  }

  const affiliateUrl = generateAffiliateLink(event.url);
  const locationParts = [
    event.venue.city,
    event.venue.state ?? event.venue.country,
  ].filter(Boolean);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/events">← Back to search</Link>
        </Button>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-muted">
          <Image
            src={
              event.imageUrl ??
              "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1200&q=80"
            }
            alt={event.name}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        <div className="space-y-6">
          <div>
            <div className="mb-3 flex flex-wrap gap-2">
              {event.category && (
                <Badge variant="secondary">{event.category}</Badge>
              )}
              {event.subCategory && (
                <Badge variant="outline">{event.subCategory}</Badge>
              )}
            </div>
            <h1 className="text-3xl font-bold md:text-4xl">{event.name}</h1>
            {event.description && (
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {event.description}
              </p>
            )}
          </div>

          <div className="space-y-3 text-muted-foreground">
            {event.date && (
              <p className="flex items-center gap-2">
                <CalendarDays className="h-5 w-5 shrink-0" aria-hidden="true" />
                <time dateTime={event.date}>{formatEventDate(event.date)}</time>
              </p>
            )}
            <p className="flex items-center gap-2">
              <MapPin className="h-5 w-5 shrink-0" aria-hidden="true" />
              <span>
                {event.venue.name}
                {locationParts.length > 0 && ` · ${locationParts.join(", ")}`}
              </span>
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Ticket className="h-5 w-5" aria-hidden="true" />
                Ticket Availability
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-2xl font-bold">
                From {formatPrice(event.minPrice, event.currency)}
              </p>
              {event.ticketCount != null && (
                <p className="text-sm text-muted-foreground">
                  {event.ticketCount} listing{event.ticketCount !== 1 ? "s" : ""}{" "}
                  available
                </p>
              )}
              {event.status && (
                <Badge variant="outline">{event.status}</Badge>
              )}
            </CardContent>
          </Card>

          <Button size="lg" className="w-full sm:w-auto" asChild>
            <a
              href={affiliateUrl}
              target="_blank"
              rel="noopener noreferrer sponsored"
            >
              Find Tickets on StubHub
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </Button>

          <p className="text-xs text-muted-foreground">
            You will be redirected to StubHub to complete your purchase. We may
            earn a commission at no extra cost to you.
          </p>
        </div>
      </div>

      <section className="mt-12">
        <h2 className="text-xl font-semibold mb-4">Venue Map</h2>
        <div className="flex aspect-[21/9] items-center justify-center rounded-xl border bg-muted/50 text-muted-foreground">
          <p>Interactive venue map placeholder</p>
        </div>
      </section>
    </div>
  );
}
