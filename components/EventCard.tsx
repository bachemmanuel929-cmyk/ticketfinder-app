import Image from "next/image";
import Link from "next/link";
import { CalendarDays, MapPin } from "lucide-react";
import { StubHubEvent } from "@/lib/stubhub";
import { formatEventDate, formatPrice } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface EventCardProps {
  event: StubHubEvent;
}

export function EventCard({ event }: EventCardProps) {
  const locationParts = [
    event.venue.city,
    event.venue.state ?? event.venue.country,
  ].filter(Boolean);

  return (
    <Card className="overflow-hidden flex flex-col h-full transition-shadow hover:shadow-md">
      <div className="relative aspect-[16/9] bg-muted">
        <Image
          src={
            event.imageUrl ??
            "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80"
          }
          alt={event.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {event.category && (
          <Badge className="absolute left-3 top-3" variant="secondary">
            {event.category}
          </Badge>
        )}
      </div>

      <CardHeader className="pb-2">
        <CardTitle className="line-clamp-2 text-lg">{event.name}</CardTitle>
      </CardHeader>

      <CardContent className="flex-1 space-y-2 text-sm text-muted-foreground">
        {event.date && (
          <p className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4 shrink-0" aria-hidden="true" />
            <time dateTime={event.date}>{formatEventDate(event.date)}</time>
          </p>
        )}
        <p className="flex items-center gap-2">
          <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span className="line-clamp-1">
            {event.venue.name}
            {locationParts.length > 0 && ` · ${locationParts.join(", ")}`}
          </span>
        </p>
        <p className="font-medium text-foreground">
          From {formatPrice(event.minPrice, event.currency)}
        </p>
      </CardContent>

      <CardFooter>
        <Button asChild className="w-full">
          <Link href={`/events/${event.id}`}>View Tickets</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
