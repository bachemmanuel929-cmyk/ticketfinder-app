import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function EventNotFound() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-2xl font-bold">Event not found</h1>
      <p className="mt-2 text-muted-foreground">
        The event you are looking for may have been removed or is no longer
        available.
      </p>
      <Button className="mt-6" asChild>
        <Link href="/events">Browse events</Link>
      </Button>
    </div>
  );
}
