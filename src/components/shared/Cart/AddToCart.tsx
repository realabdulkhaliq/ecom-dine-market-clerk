"use client";
import { useDispatch } from "react-redux";
import { cartActions } from "@/store/slice/cartSlice";
import toast from "react-hot-toast";
import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { urlForImage } from "../../../../sanity/lib/image";
import { useAuth } from "@clerk/nextjs";

const AddToCart = ({ singleProduct }: { singleProduct: any }) => {
  const [quantity, setQuantity] = useState(1);
  const { userId } = useAuth();
  const dispatch = useDispatch();
  const addItem = async () => {
    try {
      const res = await fetch("/api/cart", {
        method: "POST",
        body: JSON.stringify({
          user_id: userId,
          product_id: singleProduct._id,
          product_title: singleProduct.title,
          product_kind: singleProduct.kind,
          product_price: singleProduct.price * quantity,
          product_quantity: quantity,
          image_url: urlForImage(singleProduct.image).url(),
        }),
      });
      dispatch(cartActions.addToCart({ quantity: quantity }));
      toast.success("Product Added Successfully");
    } catch (error) {
      return console.log("Error", error);
    }
  };
  return (
    <>
      {/* Quantity */}
      <div className="flex gap-x-4 items-center my-8">
        <h3 className="font-bold text-lg">Quantity: </h3>
        <div className="center gap-x-4">
          {/* Minus */}
          <button
            className="w-6 h-6 border rounded-full center disabled:bg-slate-200"
            disabled={quantity === 1}
            onClick={() => {
              //   if (num > 0) {
              //     setNum(num - 1);
              //   }
              setQuantity(quantity - 1);
            }}
          >
            -
          </button>
          {/* Number */}
          <span>{quantity}</span>
          {/* Plus */}
          <button
            className="w-6 h-6 border rounded-full center disabled:bg-slate-200"
            disabled={quantity === 10}
            onClick={() => {
              setQuantity(quantity + 1);
            }}
          >
            +
          </button>
        </div>
      </div>
      {/* Button */}
      <div>
        <button
          onClick={addItem}
          className="flex bg-black text-white py-3 px-4 text-base font-bold"
        >
          <ShoppingCart size={20} className="mr-3 shrink-0" /> Add to Cart
        </button>
      </div>
    </>
  );
};

export default AddToCart;
