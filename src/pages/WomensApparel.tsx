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
import { IoFilterOutline } from "react-icons/io5";

const WomensApparel = () => {
  return (
    <section
      id="womens-apparel"
      className="w-full max-w-[1280px] !mx-auto xl:px-10 lg:px-5 lg:!my-16 !my-8 flex justify-between gap-20"
    >
      <div className="lg:block hidden">
        <Filter
          sizes={sizes}
          colors={colors}
          prices={prices}
          collections={collections}
          tags={tags}
        />
      </div>

      <div className="w-full h-full flex flex-col sm:gap-5 gap-2 lg:px-0 px-2">
        <div className="w-full flex justify-between items-center lg:px-0 px-2">
          <p className="text-lg font-semibold">Best Selling</p>
          <div className="border rounded-sm p-2 bg-primary lg:hidden">
            <IoFilterOutline className="text-white sm:text-base text-sm" />
          </div>
        </div>

        <HoverEffect
          items={womensApparel.map((item, idx) => ({
            ...item,
            link: item.link ?? "#",
            idx,
          }))}
        />
      </div>
    </section>
  );
};

export default WomensApparel;
