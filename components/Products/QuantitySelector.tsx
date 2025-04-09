export default function QuantitySelector({
  quantity,
  onIncrement,
  onDecrement,
}: {
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
}) {
  return (
    <div className="flex items-center gap-4 mb-2 mt-6">
      <span className="text-sm font-medium">Quantity:</span>
      <button
        onClick={onDecrement}
        className="w-8 h-8 text-lg border rounded hover:bg-gray-100"
      >
        -
      </button>
      <span className="text-md">{quantity}</span>
      <button
        onClick={onIncrement}
        className="w-8 h-8 text-lg border rounded hover:bg-gray-100"
      >
        +
      </button>
    </div>
  );
}
