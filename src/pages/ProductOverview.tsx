import AdditionalInfo from "@/components/product-overview/AdditionalInfo";
import ProductSummary from "@/components/product-overview/ProductSummary";

const ProductOverview = () => {
  
  return (
    <main className="w-full max-w-[1280px] !mx-auto xl:px-10 sm:px-5 px-4 sm:!my-16 !my-8 flex flex-col gap-20">
      <ProductSummary />
      <AdditionalInfo />
    </main>
  );
};

export default ProductOverview;
