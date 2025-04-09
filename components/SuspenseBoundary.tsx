import { Suspense } from "react";
import SearchResults from "@/app/searchResults/page";

export default function SuspenseBoundary() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchResults />
    </Suspense>
  );
}