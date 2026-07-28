"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { debounce } from "@/lib/utils";

interface SearchBarProps {
  defaultQuery?: string;
  compact?: boolean;
  autoNavigate?: boolean;
}

export function SearchBar({
  defaultQuery = "",
  compact = false,
  autoNavigate = false,
}: SearchBarProps) {
  const router = useRouter();
  const [query, setQuery] = useState(defaultQuery);
  const [location, setLocation] = useState("");

  useEffect(() => {
    setQuery(defaultQuery);
  }, [defaultQuery]);

  const navigate = useCallback(
    (searchQuery: string, searchLocation?: string) => {
      const params = new URLSearchParams();
      if (searchQuery.trim()) params.set("q", searchQuery.trim());
      if (searchLocation?.trim()) params.set("location", searchLocation.trim());
      router.push(`/events?${params.toString()}`);
    },
    [router]
  );

  const debouncedNavigate = useCallback(
    debounce((value: string) => {
      if (autoNavigate && value.trim().length >= 2) {
        navigate(value, location);
      }
    }, 400),
    [autoNavigate, location, navigate]
  );

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    navigate(query, location);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={compact ? "flex w-full gap-2" : "flex w-full flex-col gap-3 sm:flex-row"}
      role="search"
      aria-label="Search events"
    >
      <div className="relative flex-1">
        <Search
          className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
          aria-hidden="true"
        />
        <Input
          type="search"
          placeholder="Search artists, teams, or events..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            debouncedNavigate(e.target.value);
          }}
          className="pl-10"
          aria-label="Event search query"
        />
      </div>

      {!compact && (
        <Input
          type="text"
          placeholder="City or ZIP (optional)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="sm:max-w-[200px]"
          aria-label="Location filter"
        />
      )}

      <Button type="submit" size={compact ? "default" : "lg"}>
        Search
      </Button>
    </form>
  );
}
