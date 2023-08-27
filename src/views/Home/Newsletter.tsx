import MaxWidthWrapper from "@/components/shared/Wrapper/MaxWidthWrapper";
import React from "react";

const Newsletter = () => {
  return (
    <section className="py-20">
      <MaxWidthWrapper>
        <div className="flex flex-col items-center relative">
          <h3 className="font-bold text-4xl mb-6">Subscribe Our Newsletter</h3>
          <p>Get the latest information and promo offers directly</p>
          <div className="mt-8">
            <input
              className="border border-black py-2 px-4 mr-3"
              placeholder="Input Email Address"
            ></input>
            <button className="bg-black text-white py-2 px-4 w-32 border-2 border-gray-600">
              Get Started
            </button>
          </div>
          <p className="text-9xl absolute font-extrabold text-[#F2F3F7] -z-10">
            Newsletter
          </p>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Newsletter;
