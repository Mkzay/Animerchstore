"use client";

import { useCart } from "@/context/CartContext";
import CartItem from "@/components/Cart/CartItem";
import EmptyCartIcon from "@/public/svg/empty-cart.svg";
import Image from "next/image";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart, calculateTotal } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="p-6 text-center">
        <Image
          src={EmptyCartIcon}
          alt="Empty cart"
          width={150}
          height={150}
          className="mx-auto mb-4"
        />
        <p className="text-gray-700 text-lg">Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>

      <ul className="space-y-4">
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} onRemove={removeFromCart} />
        ))}
      </ul>

      <div className="mt-6 flex justify-between items-center flex-wrap gap-4">
        <h3 className="text-lg font-bold text-black">
          Total: ${calculateTotal().toFixed(2)}
        </h3>
        <button
          onClick={clearCart}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
