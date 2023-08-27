import MaxWidthWrapper from "@/components/shared/Wrapper/MaxWidthWrapper";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import headerImage from "@/assets/header.webp";
import featured1 from "@/assets/f1.webp";
import featured2 from "@/assets/f2.webp";
import featured3 from "@/assets/f3.webp";
import featured4 from "@/assets/f4.webp";
import { Badge } from "@/components/ui/badge";

const Hero = () => {
  return (
    <MaxWidthWrapper>
      <section className="flex">
        {/* Left */}
        <div className="my-10 md:basis-5/12">
          <Badge className="text-[#0000FF] font-semibold text-lg bg-[#E1EDFF] px-5 py-1 rounded-lg mt-9">
            Sale 70%
          </Badge>
          <h1 className="scroll-m-20 text-4xl mt-10 font-bold tracking-wide lg:text-6xl">
            An Industrial Take on Streetwear
          </h1>
          <p className="leading-7 [&:not(:first-child)]:mt-8 text-gray-700 text-lg lg:mr-28">
            Anyone can beat you but no one can beat your outfit as long as you
            wear Dine outfits.
          </p>
          <button className="flex flex-col md:flex-row items-center mt-6 bg-black text-white py-3 px-4 text-base font-bold md:w-40">
            <ShoppingCart size={20} className="mr-3 shrink-0" /> Start Shopping
          </button>
          <div className="grid grid-cols-2 md:grid-cols-4 mt-8">
            <Image src={featured1} alt="Bazaar" />
            <Image src={featured2} alt="Bustle" />
            <Image src={featured3} alt="Versace" />
            <Image src={featured4} alt="InStyle" />
          </div>
        </div>
        {/* Right */}
        <div className="md:basis-7/12 bg-[#FFECE3] bg-[90%] rounded-full my-8">
          {/* <div className="bg-[#FFECE3] rounded-full w-[90%] h-[90%] absolute top-10"></div> */}
          <Image
            src={headerImage}
            height={1000}
            width={1000}
            alt=""
            className="h-[110%] w-full -my-8"
          ></Image>
        </div>
      </section>
    </MaxWidthWrapper>
  );
};

export default Hero;
