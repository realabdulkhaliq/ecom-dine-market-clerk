"use client";
import { ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import React, { useEffect, useState } from "react";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";

const Cart = () => {
  // const cartValue = useSelector((state: RootState) => state.cart.totalQuantity);
  const [qunat, setQuant] = useState(null);
  const { userId } = useAuth();

  useEffect(() => {
    fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/cartSummary?user_id=${userId}`
    )
      .then((response) => response.json())
      .then((response) => {
        setQuant(response[0].quant);
      });
  }, [userId]);

  return (
    <Link href={"/cart"}>
      <div className="bg-gray-200 rounded-full p-3 w-12 h-12 relative hover:scale-110 duration-300">
        <span className="text-white bg-red-500 text-xs h-4 px-1 text-center rounded-full absolute top-0 right-0">
          {qunat || 0}
        </span>
        <ShoppingCart className="self-center" />
      </div>
    </Link>
  );
};

export default Cart;
