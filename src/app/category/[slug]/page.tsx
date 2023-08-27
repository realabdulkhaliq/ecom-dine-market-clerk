import FetchDataFromSanity from "@/components/shared/FetchData/FetchDataFromSanity";
import ProductCard from "@/components/shared/ProductCard";
import MaxWidthWrapper from "@/components/shared/Wrapper/MaxWidthWrapper";
import { IProduct } from "@/utils/types";

const getProductsByCategory = async (categoryFilter: string) => {
  const data: IProduct[] = await FetchDataFromSanity();
  const item = data.filter(
    (product: IProduct) =>
      product.category.category.toLowerCase() === categoryFilter
  );
  return item;
};

const CategoryPage = async ({ params }: { params: { slug: string } }) => {
  const filteredProducts: IProduct[] = await getProductsByCategory(params.slug);
  // console.log(filteredProducts);
  return (
    <main className="my-20">
      <MaxWidthWrapper>
        <div className="grid grid-cols-3 gap-12">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((singleProduct: any) => (
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
            ))
          ) : (
            <p>All Products Sold Out</p>
          )}
        </div>
      </MaxWidthWrapper>
    </main>
  );
};

export default CategoryPage;
