/* eslint-disable @typescript-eslint/no-explicit-any */
import Filter from "@/components/shared/Filter";
import { HoverEffect } from "@/components/ui/item-card-hover-effect";
import {
  collections,
  colors,
  prices,
  sizes,
  tags,
} from "@/constants/womensApparelData";
import { db } from "@/firebase";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { IoFilterOutline } from "react-icons/io5";
import { useSearchParams } from "react-router-dom";

const PRODUCTS_PER_PAGE = 6;

const ProductList = () => {
  const [visibleCount, setVisibleCount] = useState(PRODUCTS_PER_PAGE);
  const [products, setProducts] = useState<any[]>([]);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + PRODUCTS_PER_PAGE);
  };

  const [searchParams] = useSearchParams();

  useEffect(() => {
    const category = searchParams.get("category");

    if(category){
      onValue(ref(db), (snapshot) => {
        const data = snapshot.val();
        if (data !== null) {
          setProducts(data[category]);
        } else {
          setProducts([]);
        }
      });
    }
  }, [searchParams]);

  return (
    <div
      id="womens-apparel"
      className="relative w-full max-w-[1280px] !mx-auto xl:px-10 lg:px-5 lg:!my-16 !my-5 flex justify-between gap-20"
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
        <div className="w-full flex justify-between items-center lg:px-0 px-2 sticky top-0 z-20 bg-white lg:static">
          <p className="text-lg font-semibold">Best Selling</p>
          <div className="border rounded-sm p-2 bg-primary lg:hidden">
            <IoFilterOutline className="text-white sm:text-base text-sm" />
          </div>
        </div>

        <HoverEffect
          items={products.slice(0, visibleCount).map((item, idx) => ({
            ...item,
            link: item.link ?? "#",
            idx,
          }))}
        />

        {visibleCount < products.length && (
          <button
            className="sm:px-8 px-5 sm:py-[14px] py-[10px] border border-primary bg-primary text-white hover:bg-transparent hover:text-primary active:bg-transparent active:text-primary focus:bg-transparent focus:text-primary rounded-md w-fit h-fit !mt-8 cursor-pointer transition-default"
            onClick={handleLoadMore}
          >
            <p className="sm:text-sm text-[12px] font-medium">
              View More
            </p>
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductList;
