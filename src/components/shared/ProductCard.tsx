"use client";
import { IProduct } from "@/utils/types";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { urlForImage } from "../../../sanity/lib/image";

const ProductCard = (props: IProduct) => {
  return (
    <main>
      <Link href={`/products/${props.slug.current}`}>
        <div className="flex flex-col">
          <Image
            src={urlForImage(props.image).url()}
            alt={props.alt}
            width={400}
            height={400}
            priority={true}
            className="w-[330px] h-[380px]"
          ></Image>
          <h3 className="font-bold text-lg">{props.title}</h3>
          <h3 className="font-bold text-gray-400">{props.kind.kind}</h3>
          <p className="font-bold text-lg">RS: {props.price}</p>
        </div>
      </Link>
      {/* <AddToCart item={props} /> */}
    </main>
  );
};

export default ProductCard;
