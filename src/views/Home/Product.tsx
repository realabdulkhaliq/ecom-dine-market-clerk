import { client } from "@/lib/sanityClient";
import Carousel from "./Carousel";

const Product = async () => {
  const products = await client.fetch(`*[_type=='product']`);
  return (
    <main>
      <Carousel products={products} />
    </main>
  );
};

export default Product;
