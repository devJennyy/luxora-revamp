import AdditionalInfo from "@/components/product-overview/AdditionalInfo";
import ProductSummary from "@/components/product-overview/ProductSummary";
import LoadingAnimation from "@/components/ui/loading";
import { useState } from "react";

const ProductOverview = () => {
  const [isLoading, setIsLoading] = useState(true);
  setTimeout(() => {
    setIsLoading(false);
  }, 1500);

  return (
    <main>
      {isLoading && <LoadingAnimation />}

      <section
        className={`transition-opacity duration-500 ${
          isLoading ? "opacity-0" : "opacity-100"
        } w-full md:max-w-[1280px] !mx-auto xl:px-10 sm:px-5 px-4 xl:!my-16 !my-5 flex flex-col xl:gap-20 gap-14`}
      >
        <ProductSummary />
        <AdditionalInfo />
      </section>
    </main>
  );
};

export default ProductOverview;
