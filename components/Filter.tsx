"use client";

import { useState } from "react";

type FilterProps = {
  categories: string[];
  onCategoryChange: (category: string) => void;
  onPriceRangeChange: (range: [number, number]) => void;
};

export default function Filter({
  categories,
  onCategoryChange,
  onPriceRangeChange,
}: FilterProps) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const category = e.target.value;
    setSelectedCategory(category);
    onCategoryChange(category);
  };

  const handlePriceRangeChange = (min: number, max: number) => {
    const range: [number, number] = [min, max];
    setPriceRange(range);
    onPriceRangeChange(range);
  };

  return (
    <div className="mb-6 p-6 bg-white rounded-2xl shadow-md border border-gray-200 transition-all">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Filter Products</h2>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Category Filter */}
        <div className="flex-1">
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-600 mb-1"
          >
            Category
          </label>
          <select
            id="category"
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Price Range Filter */}
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Price Range (₦)
          </label>
          <div className="flex items-center gap-3">
            <input
              type="number"
              value={priceRange[0]}
              onChange={(e) =>
                handlePriceRangeChange(Number(e.target.value), priceRange[1])
              }
              placeholder="Min"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
            <span className="text-gray-500">–</span>
            <input
              type="number"
              value={priceRange[1]}
              onChange={(e) =>
                handlePriceRangeChange(priceRange[0], Number(e.target.value))
              }
              placeholder="Max"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
