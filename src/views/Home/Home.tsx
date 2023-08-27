import Hero from "@/views/Home/Hero";
import Promotions from "@/views/Home/Promotions";
import Feature from "@/views/Home/Feature";
import Newsletter from "@/views/Home/Newsletter";
import Product from "@/views/Home/Product";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Promotions />
      <Product />
      <Feature />
      <Newsletter />
    </>
  );
};

export default HomePage;
