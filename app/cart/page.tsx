"use client";

import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Trash from "@/public/svg/Trash.svg";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart, calculateTotal } = useCart();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-700">Your cart is empty</p>
      ) : (
        <div>
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between border-b border-gray-300 pb-4"
              >
                <div className="flex items-center space-x-4">
                  <div className="relative w-24 h-20">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p>{item.description}</p>
                    <p className="text-gray-600">
                      ${item.price.toFixed(2)} x {item.quantity}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="cursor-pointer"
                >
                  <Image src={Trash} alt="Remove-Icon" width={30} height={30} />
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <h3 className="text-xl font-bold">
              Total: ${calculateTotal().toFixed(2)}
            </h3>
            <button
              onClick={clearCart}
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;