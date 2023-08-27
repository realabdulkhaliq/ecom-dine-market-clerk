"use client";
import React, { useEffect, useState } from "react";
import { useAuth } from "@clerk/nextjs";

const CartSummary = () => {
  const [qunat, setQuant] = useState(null);
  const [price, setPrice] = useState(null);
  const { userId } = useAuth();

  useEffect(() => {
    fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/cartSummary?user_id=${userId}`
    )
      .then((response) => response.json())
      .then((response) => {
        setQuant(response[0].quant);
        setPrice(response[0].price);
        console.log("Quantity", qunat);
      });
  }, [userId, qunat, price]);

  return (
    <aside>
      <div className="basis-1/4 bg-[#ececec] p-8 max-h-64">
        <p className="font-bold text-xl">Order Summary</p>
        <div className="flex justify-between my-5">
          <p>Quantity</p>
          {qunat} {qunat! > 1 ? "Products" : "Product"}
        </div>
        <div className="flex justify-between">
          <p>Sub Total</p>
          <p>$ {price}</p>
        </div>
        <button className="bg-black text-white py-2 px-4 mt-4">
          Process to Checkout
        </button>
      </div>
    </aside>
  );
};

export default CartSummary;
