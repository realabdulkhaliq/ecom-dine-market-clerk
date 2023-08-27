"use client";
import MaxWidthWrapper from "@/components/shared/Wrapper/MaxWidthWrapper";
import { ICarousel } from "@/utils/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "../../../sanity/lib/image";

const Carousel = ({ products }: { products: ICarousel[] }) => {
  const responsive = {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1080: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  };
  return (
    <section className="my-16">
      <MaxWidthWrapper>
        <main className="text-center">
          <p className="text-blue-600 text-sm font-bold mb-4">PRODUCTS</p>
          <h3 className="text-4xl font-bold mb-4">Check What We Have</h3>
        </main>
        <Swiper
          spaceBetween={0}
          autoplay={{
            delay: 3000,
            pauseOnMouseEnter: true,
          }}
          breakpoints={responsive}
          modules={[Pagination, Autoplay]}
        >
          {products.map((product: any) => (
            <SwiperSlide key={product._id}>
              <Link href={`/products/${product.slug.current}`}>
                <div className="flex flex-col items-center py-10 hover:scale-110 hover:transition duration-300">
                  <Image
                    src={urlForImage(product.image).url()}
                    alt={product.alt}
                    width={400}
                    height={400}
                    className="w-[370px] h-[400px]"
                  ></Image>
                  <h3 className="font-bold text-lg">{product.title}</h3>
                  <p className="font-bold text-lg">$ {product.price}</p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </MaxWidthWrapper>
    </section>
  );
};
export default Carousel;
