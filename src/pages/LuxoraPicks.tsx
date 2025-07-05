/* eslint-disable @typescript-eslint/no-explicit-any */
import { HoverEffect } from "@/components/ui/item-card-hover-effect";
import { db } from "@/firebase";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const PRODUCTS_PER_PAGE = 8;

const LuxoraPicks = () => {
  const [visibleCount, setVisibleCount] = useState(PRODUCTS_PER_PAGE);
  const [products, setProducts] = useState<any[]>([]);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + PRODUCTS_PER_PAGE);
  };

  const [searchParams] = useSearchParams();

  useEffect(() => {
    const categoryParam = searchParams.get("category");

    const categoryMap: Record<string, string[]> = {
      fashion: ["mens-apparel", "womens-apparel", "womens-shoes", "mens-shoes", "bags", "mens-accessories", "motors"],
      electronics: ["tech-gadgets", "smartphones", "gaming-console"],
      essentials: ["home-living", "home-decor"],
      smartphones: ["smartphones"],
    };

    onValue(ref(db), (snapshot) => {
      const data = snapshot.val();

      if (data !== null) {
        let categories: string[] = [];

        if (categoryParam && categoryMap[categoryParam]) {
          categories = categoryMap[categoryParam];
        } else if (categoryParam) {
          categories = searchParams.getAll("category");
        }

        const selectedProducts = categories.flatMap((cat) => data[cat] || []);
        setProducts(selectedProducts);
      } else {
        setProducts([]);
      }
    });
  }, [searchParams]);

  return (
    <section className="w-full max-w-[1280px] !mx-auto flex flex-col justify-center items-center gap-10 xl:px-10 sm:px-5 px-4 sm:!my-16 !my-8">
      <HoverEffect
        className="grid md:grid-cols-4 grid-cols-2 w-full"
        items={products.slice(0, visibleCount).map((item, idx) => ({
          ...item,
          link: item.link ?? "#",
          idx,
        }))}
      />

      {visibleCount < products.length && (
        <button
          className="sm:px-8 px-5 sm:py-[14px] py-[10px] border border-primary bg-primary text-white hover:bg-transparent hover:text-primary active:bg-transparent active:text-primary rounded-md w-fit h-fit !mt-8 cursor-pointer transition-default"
          onClick={handleLoadMore}
        >
          <p className="sm:text-sm text-[12px] font-medium">
            Load More Products
          </p>
        </button>
      )}
    </section>
  );
};

export default LuxoraPicks;
