import MaxWidthWrapper from "@/components/shared/Wrapper/MaxWidthWrapper";
import { client } from "@/lib/sanityClient";
import { IProduct } from "@/utils/types";
import Image from "next/image";
import { urlForImage } from "../../../../sanity/lib/image";
import FetchDataFromSanity from "@/components/shared/FetchData/FetchDataFromSanity";
import AddToCart from "@/components/shared/Cart/AddToCart";

export async function generateStaticParams() {
  const res = await client.fetch(
    `*[_type=='product']{
    title,
      _id,
    price,
    image, 
    alt,
    slug {current}, 
    kind -> {kind, _id}, 
    category -> {category, _id}
  }`,
    { cache: "no-store" }
  );
  return res.map((product: any) => ({
    slug: product.slug.current,
  }));
}

const sizes = ["XS", "S", "M", "L", "XL"];

const getProductDetails = async (slug: any) => {
  const data: IProduct[] = await FetchDataFromSanity();
  const productSlug = data.filter(
    (product: IProduct) => product.slug.current == slug
  );

  return productSlug;
};

const CategoryPage = async ({ params }: { params: { slug: string } }) => {
  const productBySlug = await getProductDetails(params.slug);
  return (
    <main className="my-20">
      <MaxWidthWrapper>
        <section className="">
          {productBySlug.map((singleProduct: IProduct) => (
            <div
              key={singleProduct._id}
              className="grid grid-cols-1 sm:flex gap-10"
            >
              {/* Left */}
              <div className="grid grid-cols-1 sm:flex gap-8 basis-8/12">
                <div>
                  <Image
                    src={urlForImage(singleProduct.image).url()}
                    alt={singleProduct.alt}
                    width={100}
                    height={100}
                    priority={true}
                    className="h-[100px] w-[100px] hidden sm:block"
                  />
                </div>
                <div>
                  <Image
                    src={urlForImage(singleProduct.image).url()}
                    alt={singleProduct.alt}
                    width={560}
                    height={600}
                    className="h-[600px] w-[560px]"
                  />
                </div>
              </div>
              {/* Right */}
              <div className="basis-4/12">
                {/* Title */}
                <div>
                  <h1 className="text-4xl font-medium">
                    {singleProduct.title}
                  </h1>
                  <h2 className="text-xl font-medium text-gray-400">
                    {singleProduct.kind.kind}
                  </h2>
                </div>
                {/* Select Size */}
                <div>
                  <h3 className="font-bold text-base mt-10">SELECT SIZE</h3>
                  {/* Sizes */}
                  <div className="flex gap-x-4">
                    {sizes.map((item) => (
                      <div
                        key={item}
                        className="center h-10 w-10 rounded-full mt-6 hover:shadow-2xl duration-300"
                      >
                        <span className="text-lg font-bold text-gray-500">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Quantity */}

                <AddToCart singleProduct={singleProduct} />
                <p className="text-2xl font-bold mt-4">
                  $ {singleProduct.price.toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </section>
        <section className="bg-white mt-20 py-16 px-12 -z-10 relative">
          <h4 className="font-extrabold text-4xl sm:text-9xl absolute top-3 -z-10 text-[#ECEDEF]">
            Overview
          </h4>
          <h3 className="font-bold text-3xl">Product Information</h3>
          <div className="border-t-2 grid grid-cols-1 sm:flex mt-8 pt-8">
            <div className="basis-1/3">
              <h4 className="text-[#666666] font-bold">PRODUCT DETAILS</h4>
            </div>
            <div className="basis-2/3">
              <p className="text-[#666666] text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:flex py-8">
            <div className="basis-1/3">
              <h4 className="text-[#666666] font-bold">PRODUCT CARE</h4>
            </div>
            <div className="basis-2/3">
              <ul className="list-disc">
                <li>Hand wash using cold water.</li>
                <li>Do not using bleach.</li>
                <li>Hang it to dry.</li>
                <li>Iron on low temperature.</li>
              </ul>
            </div>
          </div>
        </section>
      </MaxWidthWrapper>
    </main>
  );
};

export default CategoryPage;
