import FetchDataFromSanity from "@/components/shared/FetchData/FetchDataFromSanity";
import ProductCard from "@/components/shared/ProductCard";
import MaxWidthWrapper from "@/components/shared/Wrapper/MaxWidthWrapper";
import { IProduct } from "@/utils/types";

const AllProducts = async () => {
  const allProducts: IProduct[] = await FetchDataFromSanity();
  return (
    <section className="my-20">
      <MaxWidthWrapper>
        <div className="grid grid-cols-3 gap-12">
          {allProducts.map((singleProduct: IProduct) => (
            <ProductCard
              image={singleProduct.image}
              title={singleProduct.title}
              price={singleProduct.price}
              kind={singleProduct.kind}
              key={singleProduct._id}
              slug={singleProduct.slug}
              alt={singleProduct.alt}
              _id={singleProduct._id}
              category={singleProduct.category}
            />
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default AllProducts;
