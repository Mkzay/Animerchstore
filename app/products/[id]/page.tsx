"use client";

import { use, useState } from "react";
import Image from "next/image";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import MainImage from "@/components/MainImage";
import ThumbnailGallery from "@/components/ThumbnailGallery";
import QuantitySelector from "@/components/QuantitySelector";
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
  const [selectedImage, setSelectedImage] = useState<string>(
    product?.images[0] ?? ""
  );

  if (!product) {
    return (
      <p className="text-center mt-10 text-red-500 text-lg font-medium">
        Product not found
      </p>
    );
  }

  const handleIncrement = () => setQuantity((q) => q + 1);
  const handleDecrement = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Image Gallery */}
        <div>
          <MainImage src={selectedImage} alt={product.title} />
          <ThumbnailGallery
            images={product.images}
            selectedImage={selectedImage}
            onSelect={setSelectedImage}
          />
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
          <p className="text-gray-600 mb-4 text-xl font-semibold">
            ${product.price.toFixed(2)}
          </p>
          <p className="text-gray-800 mb-6 leading-relaxed">
            {product.description}
          </p>

          <QuantitySelector
            quantity={quantity}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
          />

          <button
            className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
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

      {/* Reviews */}
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
