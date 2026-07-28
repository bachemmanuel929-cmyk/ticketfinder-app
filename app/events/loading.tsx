import { EventGridSkeleton } from "@/components/EventGridSkeleton";

export default function EventsLoading() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 space-y-2">
        <div className="h-8 w-48 animate-pulse rounded bg-muted" />
        <div className="h-4 w-72 animate-pulse rounded bg-muted" />
      </div>
      <EventGridSkeleton count={9} />
    </div>
  );
}
