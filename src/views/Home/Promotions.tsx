import MaxWidthWrapper from "@/components/shared/Wrapper/MaxWidthWrapper";
import Image from "next/image";
import event1 from "@/assets/event1.webp";
import event2 from "@/assets/event2.webp";
import event3 from "@/assets/event3.webp";

const Promotions = () => {
  return (
    <section className="py-20">
      <MaxWidthWrapper>
        <div className="flex flex-col items-center py-10">
          <h3 className="text-blue-500 font-bold">PROMOTIONS</h3>
          <h3 className="text-4xl font-bold">Our Promotions Events</h3>
        </div>
        <main className="grid grid-cols-1 sm:flex gap-5">
          <div className="grid grid-cols-1 sm:flex sm:flex-col gap-5 sm:basis-5/12">
            <div className="bg-gray-300 flex">
              <article className="p-3 sm:p-6">
                <h3 className="font-bold text-lg sm:text-2xl">
                  GET UP TO{" "}
                  <span className="text-lg sm:text-4xl font-bold">60%</span>
                </h3>
                <p className="text-base sm:text-lg">For the summer season</p>
              </article>
              <figure>
                <Image
                  src={event1}
                  alt="60% OFF promotion"
                  priority
                  width={450}
                  height={500}
                />
              </figure>
            </div>
            <div className="flex flex-col gap-4 items-center bg-black text-white p-8">
              <h3 className="text-4xl font-bold">GET 30% Off</h3>
              <p>USE PROMO CODE</p>
              <p className="font-bold bg-gray-600 rounded-lg py-2 px-10 tracking-widest">
                DINEWEEKENDSALE
              </p>
            </div>
          </div>
          <div className="sm:flex gap-5 sm:basis-7/12">
            <div className="bg-[#EFE1C7] flex flex-col basis-1/2 my-3 sm:my-0">
              <article className="p-6">
                <h3>Flex Sweatshirt</h3>
                <p className="text-lg">
                  <span className="line-through">$100.00</span>
                  <span className="font-bold pl-4">$75.00</span>
                </p>
              </article>
              <figure className="mx-auto">
                <Image
                  src={event2}
                  alt="60% OFF promotion"
                  height={325}
                  priority
                />
              </figure>
            </div>
            <div className="bg-[#D7D7D9] flex flex-col basis-1/2">
              <article className="p-6">
                <h3>Flex Sweatshirt</h3>
                <p className="text-lg">
                  <span className="line-through">$100.00</span>
                  <span className="font-bold pl-4">$75.00</span>
                </p>
              </article>
              <figure className="mx-auto">
                <Image
                  src={event3}
                  alt="60% OFF promotion"
                  height={325}
                  priority
                />
              </figure>
            </div>
          </div>
        </main>
      </MaxWidthWrapper>
    </section>
  );
};

export default Promotions;
