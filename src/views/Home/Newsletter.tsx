import MaxWidthWrapper from "@/components/shared/Wrapper/MaxWidthWrapper";
import Link from "next/link";
import React from "react";

const Newsletter = () => {
  return (
    <section className="py-20">
      <MaxWidthWrapper>
        <div className="flex flex-col items-center relative">
          <h3 className="font-bold text-4xl mb-6">Subscribe Our Newsletter</h3>
          <p>Get the latest information and promo offers directly</p>
          <div className="grid grid-cols-1 sm:flex gap-4 mt-8">
            <input
              className="border border-black py-2 px-4"
              placeholder="Input Email Address"
            ></input>
            <Link href={"/products"}>
              <button className="bg-black text-white py-2 px-4 w-32 border-2 border-gray-600">
                Get Started
              </button>
            </Link>
          </div>
          <p className="text-4xl sm:text-9xl absolute top-20 sm:top-0 font-extrabold text-[#F2F3F7] -z-10">
            Newsletter
          </p>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Newsletter;
