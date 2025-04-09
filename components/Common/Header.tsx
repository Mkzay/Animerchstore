"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import AnimerchLogo from "@/public/svg/AnimerchLogo.svg";
import Cart from "@/public/svg/Cart.svg";
import Search from "@/public/svg/Search.svg";
import { useCart } from "@/context/CartContext";
import SearchBar from "@/components/Search/SearchBar";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const { cartItems } = useCart();
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/searchResults?query=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
      setSearchOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto p-4 flex items-center justify-between">
        <div>
          <Link href="/" className="text-xl font-bold text-blue-600">
            <Image src={AnimerchLogo} alt="Animerch logo" />
          </Link>
        </div>

        <nav aria-label="Main navigation">
          <ul className="flex space-x-6 items-center text-sm font-medium text-gray-700">
            <li>
              <button
                className="cursor-pointer"
                onClick={() => setSearchOpen((prev) => !prev)}
              >
                <Image src={Search} alt="Search-Icon" height={30} width={30} />
              </button>
            </li>
            <li className="relative">
              <Link
                href="/cart"
                className={`hover:text-blue-600 ${
                  pathname === "/cart" ? "text-blue-600 font-semibold" : ""
                }`}
              >
                <Image src={Cart} alt="Shopping-Cart" height={30} width={30} />
              </Link>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </li>
          </ul>
        </nav>
      </div>

      {/* Search Input */}
      {searchOpen && <SearchBar closeSearch={() => setSearchOpen(false)} />}
    </header>
  );
}
