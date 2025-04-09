"use client";

import { Suspense } from "react";
import SearchResults from "@/components/Search/SearchResults";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading search results...</div>}>
      <SearchResults />
    </Suspense>
  );
}
