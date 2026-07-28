"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CATEGORIES = [
  { label: "All", value: "" },
  { label: "Sports", value: "sports" },
  { label: "Concerts", value: "concerts" },
  { label: "Theater", value: "theater" },
];

export function EventFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const q = searchParams.get("q") ?? "";
  const location = searchParams.get("location") ?? "";
  const category = searchParams.get("category") ?? "";
  const date = searchParams.get("date") ?? "";

  function applyFilters(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const params = new URLSearchParams();
    const nextQ = String(formData.get("q") ?? "");
    const nextLocation = String(formData.get("location") ?? "");
    const nextCategory = String(formData.get("category") ?? "");
    const nextDate = String(formData.get("date") ?? "");

    if (nextQ) params.set("q", nextQ);
    if (nextLocation) params.set("location", nextLocation);
    if (nextCategory) params.set("category", nextCategory);
    if (nextDate) params.set("date", nextDate);

    router.push(`/events?${params.toString()}`);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Filters</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={applyFilters} className="space-y-4">
          <div>
            <label htmlFor="filter-q" className="text-sm font-medium">
              Keyword
            </label>
            <Input
              id="filter-q"
              name="q"
              defaultValue={q}
              placeholder="Artist, team, event..."
              className="mt-1"
            />
          </div>

          <div>
            <label htmlFor="filter-location" className="text-sm font-medium">
              Location
            </label>
            <Input
              id="filter-location"
              name="location"
              defaultValue={location}
              placeholder="City or ZIP"
              className="mt-1"
            />
          </div>

          <div>
            <label htmlFor="filter-category" className="text-sm font-medium">
              Category
            </label>
            <select
              id="filter-category"
              name="category"
              defaultValue={category}
              className="mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            >
              {CATEGORIES.map((cat) => (
                <option key={cat.value} value={cat.value}>
                  {cat.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="filter-date" className="text-sm font-medium">
              Date
            </label>
            <Input
              id="filter-date"
              name="date"
              type="date"
              defaultValue={date}
              className="mt-1"
            />
          </div>

          <Button type="submit" className="w-full">
            Apply Filters
          </Button>

          {(q || location || category || date) && (
            <Button variant="outline" className="w-full" asChild>
              <Link href="/events">Clear all</Link>
            </Button>
          )}
        </form>
      </CardContent>
    </Card>
  );
}
