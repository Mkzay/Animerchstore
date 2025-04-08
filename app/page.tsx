"use client";

import { useState } from "react";
import { products } from "@/data/products";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export const dynamic = "force-dynamic";

export default function HomePage() {
  const { addToCart } = useCart();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-6">Top Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentProducts.map((product) => (
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
            <button
              className="mt-3 mx-2 px-4 py-1 text-sm bg-black text-white rounded hover:bg-blue-700"
              onClick={() =>
                addToCart({
                  id: product.id,
                  name: product.title,
                  price: product.price,
                  image: product.images[0],
                  description: product.description,
                  quantity: 1,
                })
              }
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center mt-10 space-x-4">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded ${
            currentPage === 1
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          Previous
        </button>
        <span className="text-gray-700">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded ${
            currentPage === totalPages
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          Next
        </button>
      </div>
    </main>
  );
}