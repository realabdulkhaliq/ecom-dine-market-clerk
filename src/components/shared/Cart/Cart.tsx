"use client";
import { ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import Link from "next/link";

const Cart = () => {
  const cartValue = useSelector((state: RootState) => state.cart.totalQuantity);

  return (
    <Link href={"/cart"}>
      <div className="bg-gray-200 rounded-full p-3 relative hover:scale-110 duration-300">
        <span className="text-white bg-red-500 text-xs h-4 px-1 text-center rounded-full absolute top-0 right-0">
          {cartValue}
        </span>
        <ShoppingCart />
      </div>
    </Link>
  );
};

export default Cart;
