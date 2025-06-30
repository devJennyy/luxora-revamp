import Filter from "@/components/shared/Filter";
import { HoverEffect } from "@/components/ui/item-card-hover-effect";
import {
  collections,
  colors,
  prices,
  sizes,
  tags,
  womensApparel,
} from "@/constants/womensApparelData";
import { useState } from "react";
import { IoFilterOutline } from "react-icons/io5";

const PRODUCTS_PER_PAGE = 6;

const WomensApparel = () => {
  const [visibleCount, setVisibleCount] = useState(PRODUCTS_PER_PAGE);
  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + PRODUCTS_PER_PAGE);
  };
  
  return (
     <section
      id="womens-apparel"
      className="relative w-full max-w-[1280px] !mx-auto xl:px-10 lg:px-5 lg:!my-16 !my-8 flex justify-between gap-20"
    >
     <div className="lg:block hidden sticky top-24 self-start">
        <Filter
          sizes={sizes}
          colors={colors}
          prices={prices}
          collections={collections}
          tags={tags}
        />
      </div>

      <div className="w-full h-full flex flex-col items-center sm:gap-5 gap-2 lg:px-0 px-2">
        <div className="w-full flex justify-between items-center lg:px-0 px-2">
          <p className="text-lg font-semibold">Best Selling</p>
          <div className="border rounded-sm p-2 bg-primary lg:hidden">
            <IoFilterOutline className="text-white sm:text-base text-sm" />
          </div>
        </div>

        <HoverEffect
          items={womensApparel
            .slice(0, visibleCount)
            .map((item, idx) => ({
              ...item,
              link: item.link ?? "#",
              idx,
            }))}
        />

        {visibleCount < womensApparel.length && (
          <button
            className="sm:px-8 px-5 sm:py-[14px] py-[10px] border hover:bg-primary hover:text-white active:bg-primary active:text-white focus:bg-primary focus:text-white rounded-md w-fit h-fit !mt-8 cursor-pointer transition-default"
            onClick={handleLoadMore}
          >
            <p className="sm:text-sm text-[12px] font-medium">Load More Products</p>
          </button>
        )}
      </div>
    </section>
  );
};

export default WomensApparel;
