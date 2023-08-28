import MaxWidthWrapper from "@/components/shared/Wrapper/MaxWidthWrapper";
import { ThumbsUp } from "lucide-react";
import React from "react";

const CheckOutSuccess = () => {
  return (
    <section>
      <MaxWidthWrapper>
        <ThumbsUp size={200} />
      </MaxWidthWrapper>
    </section>
  );
};

export default CheckOutSuccess;
