"use client";

import { useState, use } from "react";
import Image from "next/image";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import CustomerReviews from "@/components/CustomerReviews";

type ParamsPromise = Promise<{ id: string }>;

export default function ProductDetailsPage({
  params,
}: {
  params: ParamsPromise;
}) {
  const { id } = use(params);
  const product = products.find((p) => p.id === id);

  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(product?.images[0]);

  if (!product) {
    return <p className="text-center mt-10 text-red-500">Product not found</p>;
  }

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Image Gallery */}
        <div>
          <div className="relative w-full h-96 rounded-lg overflow-hidden border">
            <Image
              src={selectedImage}
              alt={product.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex gap-2 mt-4">
            {product.images.map((img, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedImage(img)}
                className={`w-20 h-20 relative border rounded-md overflow-hidden cursor-pointer ${
                  selectedImage === img ? "ring-2 ring-blue-600" : ""
                }`}
              >
                <Image
                  src={img}
                  alt={`thumb-${idx}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
          <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
          <p className="text-gray-800 mb-6">{product.description}</p>

          {/* Specifications */}

          {/* Quantity Control */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm font-medium">Quantity:</span>
            <button
              onClick={handleDecrement}
              className="px-3 py-1 border rounded hover:bg-gray-200"
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              onClick={handleIncrement}
              className="px-3 py-1 border rounded hover:bg-gray-200"
            >
              +
            </button>
          </div>

          <button
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            onClick={() =>
              addToCart({
                id: product.id,
                name: product.title,
                price: product.price,
                image: product.images[0],
                description: product.description,
                quantity,
              })
            }
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Customer Reviews */}
      <CustomerReviews productId={product.id} />
    </div>
  );
}

/*
          Specifications
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Specifications</h2>
            <ul className="list-disc pl-6 text-gray-700">
              {product.specifications?.map((spec, idx) => (
                <li key={idx}>{spec}</li>
              ))}
            </ul>
          </div>
*/
