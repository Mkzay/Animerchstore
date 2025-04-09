"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

type Product = {
  id: string;
  title: string;
  price: number;
  images: string[];
  description: string;
};

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <div className="pb-8 rounded-xl shadow-xl bg-white hover:shadow-2xl transition">
      <Link href={`/products/${product.id}`} prefetch>
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
        aria-label={`Add ${product.title} to cart`}
      >
        Add to Cart
      </button>
    </div>
  );
}
