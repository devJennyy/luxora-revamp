import AdditionalInfo from "@/components/product-overview/AdditionalInfo";
import ProductSummary from "@/components/product-overview/ProductSummary";

const ProductOverview = () => {
  
  return (
    <main className="w-full max-w-[1280px] !mx-auto xl:px-10 sm:px-5 px-4 xl:!my-16 !my-8 flex flex-col xl:gap-20 gap-14">
      <ProductSummary />
      <AdditionalInfo />
    </main>
  );
};

export default ProductOverview;
