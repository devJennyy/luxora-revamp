import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";

import { useState } from "react";
import { GoHeartFill } from "react-icons/go";
import { NumericFormat } from "react-number-format";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    image: string;
    currentPrice: number;
    previousPrice: number;
    productName: string;
    totalSold: number;
    link: string;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4",
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          href={item?.link}
          key={item?.link}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-muted/10 block rounded-xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <div className="flex flex-col justify-center items-center w-full gap-6">
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
          </Card>
        </a>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-md h-full w-full overflow-hidden border border-muted/30 group-hover:border-muted/30 relative z-20 bg-white cursor-pointer",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
