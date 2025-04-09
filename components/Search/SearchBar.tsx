"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar({
  closeSearch,
}: {
  closeSearch?: () => void;
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/searchResults?query=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
      closeSearch?.();
    }
  };

  return (
    <div className="bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="flex items-center space-x-4"
        role="search"
        aria-label="Product search form"
      >
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for products..."
          className="flex-1 px-4 py-2 border-black border-solid border-[1px] rounded outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-gray-700 text-black"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Search
        </button>
      </form>
    </div>
  );
}
