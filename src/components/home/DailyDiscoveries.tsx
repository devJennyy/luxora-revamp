import { discoveryProducts } from "@/constants/data";
import SectionHeading from "../shared/SectionHeading";
import { HoverEffect } from "../ui/card-hover-effect";

const DailyDiscoveries = () => {
  return (
    <div className="sm:!my-20 !my-10 flex flex-col lg:gap-14 sm:gap-10 gap-8">
      <SectionHeading subtitle={"Daily"} title={"Discovery"} />

      {/* <div className="grid xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
        {discoveryProducts.map((item, index) => (
          <button
            key={index}
            className="flex md:w-56 sm:w-48 w-40 md:h-80 sm:h-72 border border-muted/30 rounded-md cursor-pointer"
          >
            <div className="flex flex-col justify-center items-center p-4 w-full gap-6">
              <div className="flex justify-center items-center md:w-36 w-28 sm:h-[10.7rem] h-[8rem]">
                <img
                  src={item.image}
                  alt={item.productName}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>

              <div className="flex flex-col justify-center items-start w-full">
                <div className="flex gap-3">
                  <p className="font-medium sm:text-base text-sm">
                    <NumericFormat
                      displayType="text"
                      value={item.currentPrice}
                      thousandSeparator=","
                      decimalScale={2}
                      fixedDecimalScale
                      prefix="$"
                    />
                  </p>
                  <p className="line-through text-gray-darkGray sm:text-[12px] text-[10px] font-semibold">
                    <NumericFormat
                      displayType="text"
                      value={item.previousPrice}
                      thousandSeparator=","
                      decimalScale={2}
                      fixedDecimalScale
                      prefix="$"
                    />
                  </p>
                </div>
                <p className="sm:text-[14px] text-[12px] text-muted text-left">
                  {item.productName}
                </p>
                <div className="flex justify-between w-full md:!mt-5 !mt-3">
                  <p className="sm:text-[12px] text-[10px] font-medium">
                    {item.totalSold}k Sold
                  </p>
                  <GoHeartFill className="text-red-400 sm:text-base text-sm" />
                </div>
              </div>
            </div>
          </button>
        ))}
      </div> */}

      <HoverEffect
        items={discoveryProducts.map((item) => ({
          ...item,
          link: item.link ?? "#",
        }))}
      />
    </div>
  );
};

export default DailyDiscoveries;
