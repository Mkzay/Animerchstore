"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect, useMemo } from "react";
import { products } from "@/data/products";
import Link from "next/link";
import Image from "next/image";
import Filter from "@/components/Search/Filter";
import Skeleton from "@/components/Common/Skeleton";
import ErrorBoundary from "@/components/Common/ErrorBoundary";

export default function SearchResults() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const query = searchParams.get("query")?.toLowerCase() || "";
  const categoryParam = searchParams.get("category") || "";
  const min = parseFloat(searchParams.get("min") ?? "0");
  const max = parseFloat(searchParams.get("max") ?? "1000");

  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [priceRange, setPriceRange] = useState<[number, number]>([min, max]);
  const [isLoading, setIsLoading] = useState(false);

  const categories = useMemo(
    () => Array.from(new Set(products.map((p) => p.category))),
    []
  );

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesQuery = product.title.toLowerCase().includes(query);
      const matchesCategory = selectedCategory
        ? product.category === selectedCategory
        : true;
      const matchesPrice =
        product.price >= priceRange[0] && product.price <= priceRange[1];
      return matchesQuery && matchesCategory && matchesPrice;
    });
  }, [query, selectedCategory, priceRange]);

  useEffect(() => {
    setIsLoading(true);

    const params = new URLSearchParams(searchParams);
    selectedCategory
      ? params.set("category", selectedCategory)
      : params.delete("category");
    params.set("min", priceRange[0].toString());
    params.set("max", priceRange[1].toString());
    router.push(`/searchResults?${params.toString()}`);

    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [selectedCategory, priceRange, query, searchParams, router]);

  return (
    <ErrorBoundary
      fallback={
        <p className="text-red-500">
          Failed to load search results. Please try again later.
        </p>
      }
    >
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">
          Search Results for "{query}"
        </h1>

        <Filter
          categories={categories}
          selectedCategory={selectedCategory}
          priceRange={priceRange}
          onCategoryChange={setSelectedCategory}
          onPriceRangeChange={setPriceRange}
        />

        {isLoading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {Array.from({ length: 16 }).map((_, index) => (
              <div key={index} className="p-4">
                <Skeleton className="h-48 w-full mb-4" />
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-6 w-1/2" />
              </div>
            ))}
          </div>
        ) : filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="pb-8 rounded-xl shadow-xl bg-white hover:shadow-2xl transition"
              >
                <Link href={`/products/${product.id}`}>
                  <div className="relative aspect-square mb-4 overflow-hidden group">
                    <Image
                      src={product.images[0]}
                      alt={product.title}
                      fill
                      className="object-contain rounded-t-xl bg-gray-50 transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 25vw"
                      loading="lazy"
                    />
                  </div>
                  <h2 className="font-semibold px-2">{product.title}</h2>
                </Link>
                <p className="text-gray-700 mt-1 px-2">
                  ${product.price.toFixed(2)}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-700">No products found.</p>
        )}
      </div>
    </ErrorBoundary>
  );
}
