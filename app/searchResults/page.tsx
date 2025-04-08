"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { products } from "@/data/products";
import Link from "next/link";
import Image from "next/image";
import Filter from "@/components/Filter";

export default function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query")?.toLowerCase() || "";

  // State for filters
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);

  // Get unique categories from products
  const categories = Array.from(new Set(products.map((product) => product.category)));

  // Filter products based on search query, category, and price range
  const filteredProducts = products.filter((product) => {
    const matchesQuery = product.title.toLowerCase().includes(query);
    const matchesCategory = selectedCategory
      ? product.category === selectedCategory
      : true;
    const matchesPrice =
      product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchesQuery && matchesCategory && matchesPrice;
  });

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Search Results for "{query}"</h1>

      {/* Filters */}
      <Filter
        categories={categories}
        onCategoryChange={setSelectedCategory}
        onPriceRangeChange={setPriceRange}
      />

      {/* Filtered Products */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="pb-8 rounded-xl shadow-xl bg-white hover:shadow-2xl transition"
            >
              <Link href={`/products/${product.id}`}>
                <div className="relative h-48 mb-4">
                  <Image
                    src={product.images[0]}
                    alt={product.title}
                    fill
                    className="object-cover rounded-t-xl"
                  />
                </div>
                <h2 className="font-semibold px-2">{product.title}</h2>
              </Link>
              <p className="text-gray-700 mt-1 px-2">${product.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-700">No products found.</p>
      )}
    </div>
  );
}