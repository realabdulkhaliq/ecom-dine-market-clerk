import MaxWidthWrapper from "@/components/shared/Wrapper/MaxWidthWrapper";
import { ShoppingCart, ThumbsUp } from "lucide-react";
import Link from "next/link";
import React from "react";

const CheckOutSuccess = () => {
  return (
    <section>
      <MaxWidthWrapper>
        <ThumbsUp size={200} className="mx-auto" />
        <Link href={"/products"}>
          <button className="flex flex-col md:flex-row items-center mt-6 bg-black text-white py-3 px-4 text-base font-bold mx-auto">
            <ShoppingCart size={20} className="mr-3" /> Continue Shopping
          </button>
        </Link>
      </MaxWidthWrapper>
    </section>
  );
};

export default CheckOutSuccess;
