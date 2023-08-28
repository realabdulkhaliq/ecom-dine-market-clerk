import MaxWidthWrapper from "@/components/shared/Wrapper/MaxWidthWrapper";
import { feature, featureText } from "@/utils/data";
import featureImage from "@/assets/feature.webp";
import Image from "next/image";
import Link from "next/link";

const Feature = () => {
  return (
    <section className="py-28">
      <main className="bg-[#FBFCFF]">
        <MaxWidthWrapper>
          <div className="grid grid-cols-1 sm:flex">
            <div className="basis-1/2 grid grid-cols-1 sm:grid-cols-2 gap-10 mt-16 mb-10 relative">
              {feature.map((item) => (
                <div key={item.id} className="px-8 z-10">
                  <h3 className="text-lg font-semibold">{item.text}</h3>
                  <p className="mt-4">{featureText}</p>
                </div>
              ))}
              <h3 className="font-bold text-6xl sm:text-[110px] absolute leading-none text-[#ECEDEF]">
                Different from others
              </h3>
            </div>
            <div className="order-first sm:order-last basis-1/2">
              <h2 className="text-5xl font-bold px-10 leading-[48px] -mt-20">
                Unique and Authentic Vintage Designer Jewellery
              </h2>
              <div className="grid grid-cols-1 sm:flex gap-8 mt-2">
                <figure className="basis-7/12">
                  <Image
                    src={featureImage}
                    alt="Featured Item"
                    height={600}
                    width={600}
                    className="h-[360px]"
                  />
                </figure>
                <div className="basis-5/12">
                  <p className="text-justify mb-16">
                    This piece is ethically crafted in our small family-owned
                    workshop in Peru with unmatched attention to detail and
                    care. The Natural color is the actual natural color of the
                    fiber, undyed and 100% traceable.
                  </p>
                  <Link href={"/products"}>
                    <button className="bg-black text-white py-2 px-4 w-32 border-2 border-gray-600">
                      See All Product
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </main>
    </section>
  );
};

export default Feature;
