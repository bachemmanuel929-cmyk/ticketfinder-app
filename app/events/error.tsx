"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ErrorMessage } from "@/components/ErrorMessage";

export default function EventsError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="container mx-auto px-4 py-16 max-w-lg text-center">
      <ErrorMessage
        title="Failed to load events"
        message={error.message || "An unexpected error occurred."}
      />
      <div className="mt-6 flex justify-center gap-3">
        <Button onClick={reset}>Try again</Button>
        <Button variant="outline" asChild>
          <Link href="/">Go home</Link>
        </Button>
      </div>
    </div>
  );
}
