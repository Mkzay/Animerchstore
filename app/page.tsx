"use client";

import { useState, useMemo } from "react";
import { products } from "@/data/products";
import ProductCard from "@/components/Products/ProductCard";
import Pagination from "@/components/Products/Pagination";
import Skeleton from "@/components/Common/Skeleton";
import ErrorBoundary from "@/components/Common/ErrorBoundary";

export const dynamic = "force-dynamic";

export default function HomePage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const itemsPerPage = 12;
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = useMemo(() => {
    return products.slice(startIndex, startIndex + itemsPerPage);
  }, [startIndex, itemsPerPage, products]);

  const handlePageChange = (page: number) => {
    setIsLoading(true);
    setTimeout(() => {
      setCurrentPage(page);
      setIsLoading(false);
    }, 200);
  };

  return (
    <ErrorBoundary
      fallback={
        <p className="text-red-500">
          Failed to load products. Please try again later.
        </p>
      }
    >
      <main className="p-6">
        <h1 className="text-2xl font-bold mb-6">Top Products</h1>

        {isLoading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {Array.from({ length: itemsPerPage }).map((_, index) => (
              <div key={index} className="p-4">
                <Skeleton className="h-48 w-full mb-4" />
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-6 w-1/2" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {currentProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </main>
    </ErrorBoundary>
  );
}
