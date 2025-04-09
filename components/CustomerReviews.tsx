"use client";

type Review = {
  username: string;
  rating: number;
  comment: string;
};

type Props = {
  reviews: Review[];
};

export default function CustomerReviews({ reviews }: Props) {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
      {reviews.length === 0 ? (
        <p className="text-gray-600">No reviews yet.</p>
      ) : (
        <div className="space-y-6">
          {reviews.map((review, index) => (
            <div key={index} className="border rounded-lg p-4 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-gray-800">
                  {review.username}
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