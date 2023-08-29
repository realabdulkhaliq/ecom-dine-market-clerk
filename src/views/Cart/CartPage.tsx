"use client";
import Image from "next/image";
import { Bird, ShoppingBagIcon, Trash2 } from "lucide-react";
import { useAuth } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import MaxWidthWrapper from "@/components/shared/Wrapper/MaxWidthWrapper";
import StripeCheckoutButton from "@/components/shared/Checkout";

const CartPage = () => {
  const [products, setProducts] = useState<any>(null);
  const [state, setState] = useState(false);
  const { userId } = useAuth();

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/cart?user_id=${userId}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, [userId, state]);

  async function deleteProduct(product_id: any) {
    const res = await fetch(`/api/cart`, {
      method: "DELETE",
      body: JSON.stringify({
        user_id: userId,
        product_id: product_id,
      }),
    });
    setState(!state);
  }

  const [qunat, setQuant] = useState(null);
  const [price, setPrice] = useState(null);

  useEffect(() => {
    fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/cartSummary?user_id=${userId}`
    )
      .then((response) => response.json())
      .then((response) => {
        setQuant(response[0].quant);
        setPrice(response[0].price);
      });
  }, [userId, qunat, price]);

  return (
    <main>
      <MaxWidthWrapper>
        <h3 className="text-2xl font-bold mb-20">Shopping Cart</h3>
        {/* Filled Cart Section */}
        {userId ? (
          products?.length != 0 ? (
            <section className="grid grid-cols-1 sm:flex gap-8">
              {/* Right Product Section */}
              <main className="flex flex-col basis-3/4 gap-y-10">
                {products?.map((product: any) => (
                  <div
                    className="grid grid-cols-1 sm:flex gap-4 bg-slate-200 p-2"
                    key={product.id}
                  >
                    {/* Image */}
                    <div className="rounded-xl mx-auto">
                      <Image
                        src={product.image_url}
                        alt={product.product_title}
                        width={200}
                        height={400}
                        priority={true}
                        className="w-48 h-60 rounded-2xl"
                      />
                    </div>
                    {/* Text */}
                    <div className="flex flex-col grow mx-6 my-2">
                      <span className="flex justify-between items-center mb-4">
                        <h2 className="text-2xl">{product.product_title}</h2>
                        <button
                          onClick={() => deleteProduct(product.product_id)}
                        >
                          <Trash2 />
                        </button>
                      </span>
                      <h4 className="font-bold text-gray-400 mb-4">
                        {product.product_kind.kind}
                      </h4>
                      <h5 className="font-bold mb-4">Delivery Estimation</h5>
                      <h5 className="font-bold text-[#FFC700] mb-10">
                        5 Working Days
                      </h5>
                      <span className="flex items-center justify-between">
                        <p className="font-bold text-xl">
                          RS: {product.product_price}
                        </p>
                        {/* Add Minus Product */}
                        <div className="flex gap-x-4 items-center">
                          <div className="center gap-x-4">
                            {/* Minus */}
                            <button
                              // onClick={() => data.product_quantity - 1}
                              className="w-6 h-6 border-2 border-black rounded-full center"
                            >
                              -
                            </button>
                            {/* Number */}
                            <span>{product.product_quantity}</span>
                            {/* Plus */}
                            <button
                              // onClick={() => data.product_quantity - 1}
                              className="w-6 h-6 border-2 border-black rounded-full center"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </span>
                    </div>
                    {/* Text End */}
                  </div>
                ))}
              </main>
              {/* Right Product Section End */}
              {/* Left Summary Section */}
              <div className="basis-1/4 bg-[#ececec] p-8 max-h-64">
                <p className="font-bold text-xl">Order Summary</p>
                <div className="flex justify-between my-5">
                  <p>Quantity</p>
                  {qunat} {qunat! > 1 ? "Products" : "Product"}
                </div>
                <div className="flex justify-between">
                  <p>Sub Total</p>
                  <p>RS {price}</p>
                </div>
                <StripeCheckoutButton products={products} />
              </div>
            </section>
          ) : (
            <section className="flex flex-col">
              <ShoppingBagIcon size={200} className="mx-auto" />
              <h4 className="font-bold text-4xl mx-auto">
                Your shopping bag is empty
              </h4>
            </section>
          )
        ) : (
          <div className="flex flex-col items-center gap-y-10">
            <h3 className="text-2xl font-bold">
              You are not loged in. Login First
            </h3>
            <Bird size={200} className="hover:scale-125" />
          </div>
        )}
      </MaxWidthWrapper>
    </main>
  );
};

export default CartPage;
