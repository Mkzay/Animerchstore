"use client";

import { useEffect, useState } from "react";

type Review = {
  id: number;
  author: string;
  rating: number;
  comment: string;
};

type Props = {
  productId: number | string;
};

export default function CustomerReviews({ productId }: Props) {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    // This would typically be an API call. For now, dummy data:
    const mockReviews: Review[] = [
      {
        id: 1,
        author: "Jane Doe",
        rating: 5,
        comment: "Amazing product! Highly recommend it.",
      },
      {
        id: 2,
        author: "John Smith",
        rating: 4,
        comment: "Very good quality, but delivery was slow.",
      },
      {
        id: 3,
        author: "Alice Johnson",
        rating: 3,
        comment: "Product was okay. Expected a bit more.",
      },
    ];

    // Simulate filtering by productId (if you have per-product reviews)
    setReviews(mockReviews);
  }, [productId]);

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
      {reviews.length === 0 ? (
        <p className="text-gray-600">No reviews yet.</p>
      ) : (
        <div className="space-y-6">
          {reviews.map((review) => (
            <div key={review.id} className="border rounded-lg p-4 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-gray-800">
                  {review.author}
                </span>
                <span className="text-yellow-500">
                  {"★".repeat(review.rating)}
                  {"☆".repeat(5 - review.rating)}
                </span>
              </div>
              <p className="text-gray-700">{review.comment}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
