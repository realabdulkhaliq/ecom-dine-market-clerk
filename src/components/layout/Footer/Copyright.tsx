import MaxWidthWrapper from "@/components/shared/Wrapper/MaxWidthWrapper";

const Copyright = () => {
  return (
    <section className="py-8 border-t-2">
      <MaxWidthWrapper>
        <div className="grid grid-cols-1 gap-y-4 sm:gap-y-0 sm:grid-cols-3">
          <p>Copyright © 2023 Dine Market</p>
          <p>
            Design by. <span className="font-bold">PIAIC Design Studio</span>
          </p>
          <p>
            Code by.{" "}
            <span className="font-bold">realAbdulKhaliq on github</span>
          </p>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Copyright;
