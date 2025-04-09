import { FaFilter, FaTags, FaDollarSign } from "react-icons/fa";

type Props = {
  categories: string[];
  selectedCategory: string;
  priceRange: [number, number];
  onCategoryChange: (category: string) => void;
  onPriceRangeChange: (range: [number, number]) => void;
};

export default function Filter({
  categories,
  selectedCategory,
  priceRange,
  onCategoryChange,
  onPriceRangeChange,
}: Props) {
  const safePriceRange: [number, number] = priceRange ?? [0, 100];

  const handlePriceChange = (value: number, index: 0 | 1) => {
    const updated: [number, number] = [...safePriceRange];
    updated[index] = value;
    onPriceRangeChange(updated);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md mb-6">
      <div className="flex items-center gap-2 mb-4 text-blue-600 font-semibold text-lg">
        <FaFilter />
        <span>Filters</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Category Dropdown */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
            <FaTags className="text-gray-500" />
            Category
          </label>
          <select
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="border px-4 py-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Min Price */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
            <FaDollarSign className="text-gray-500" />
            Min Price
          </label>
          <input
            type="number"
            value={safePriceRange[0]}
            onChange={(e) => handlePriceChange(Number(e.target.value), 0)}
            className="border px-4 py-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Max Price */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
            <FaDollarSign className="text-gray-500" />
            Max Price
          </label>
          <input
            type="number"
            value={safePriceRange[1]}
            onChange={(e) => handlePriceChange(Number(e.target.value), 1)}
            className="border px-4 py-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </div>
  );
}
