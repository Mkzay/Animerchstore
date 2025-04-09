import Image from "next/image";
import Trash from "@/public/svg/trash.svg";

type CartItemProps = {
  id: string;
  name: string;
  image: string;
  price: number;
  description: string;
  quantity: number;
  onRemove: (id: string) => void;
};

const CartItem = ({ id, name, image, price, description, quantity, onRemove }: CartItemProps) => (
  <li className="flex items-center justify-between border-b border-gray-300 pb-4">
    <div className="flex items-center space-x-4">
      <div className="relative w-24 h-20">
        <Image src={image} alt={name} fill className="object-cover rounded" />
      </div>
      <div>
        <h3 className="font-semibold">{name}</h3>
        <p className="text-sm text-gray-600">{description}</p>
        <p className="text-gray-600">
          ${price.toFixed(2)} x {quantity}
        </p>
      </div>
    </div>
    <button onClick={() => onRemove(id)} aria-label="Remove item from cart">
      <Image src={Trash} alt="Trash Icon" width={30} height={30} />
    </button>
  </li>
);

export default CartItem;
