import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useState, type Key } from "react";
import { useLocation } from "react-router-dom";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    idx: Key | null | undefined;
    id: 1,
    thumbnail: string;
    productVariants: string[];
    shopName: string;
    itemName: string;
    currentPrice: string;
    previousPrice: string;
    sizes: string[],
    colors: string[],
    sold: boolean;
    link: string;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const location = useLocation();
  const isProductOverview = location.pathname.includes('product-overview');

  return (
    <div className={cn("grid md:grid-cols-3 grid-cols-2 w-full", className)}>
      {items.map((item, idx) => (
        <a
          href={item.link}
          key={item?.idx}
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
            <div className={isProductOverview? "flex flex-col justify-center items-between w-full xl:h-[400px] md:h-[340px] sm:h-[380px] h-[250px] transition-slow xl:p-4 sm:p-3 p-[10px]" : "flex flex-col justify-center items-between w-full xl:h-[400px] sm:h-[380px] h-[250px] transition-slow xl:p-4 sm:p-3 p-[10px]"}>
              <div className="flex justify-center items-center w-full h-full overflow-hidden">
                {/* Image */}
                <img
                  src={item.thumbnail}
                  className="object-cover object-top w-full h-full rounded-md"
                />

                {/* Sold */}
                {item.sold && (
                  <div className="flex flex-col justify-center items-center text-center sm:w-14 sm:h-16 w-12 h-12 p-1 rounded-full bg-[#B1B1B1]/70 absolute">
                    <p className="text-white sm:text-sm text-[11px] font-medium sm:leading-4 leading-3">
                      Sold out
                    </p>
                  </div>
                )}
              </div>

              {/* Item Name and Price */}
              <div className="flex flex-col justify-between items-start w-full xl:!mt-5 !mt-3 sm:max-h-21 max-h-16 h-full">
                <div className=" flex flex-col text-start gap-1">
                  <p className="font-medium sm:text-base text-[12px] text-ellipsis line-clamp-2">{item.itemName}</p>
                  <p className="sm:text-sm text-[12px]">${parseFloat(item.currentPrice).toFixed(2)}</p>
                </div>

                {/* Color */}
                <div className="flex justify-center items-center sm:gap-2 gap-[6px] xl:!mt-4 !mt-2">
                  {item.colors?.map((color, index) => {
                    return (
                      <div
                      key={index}
                        className={`${color} ${
                          index == 0
                            ? `sm:w-4 sm:h-4 w-[9px] h-[9px] outline outline-offset-2 mr-[2px]`
                            : `sm:w-5 sm:h-5 w-3 h-3 outline outline-[#E6E6E6]`
                        } rounded-full cursor-pointer`}
                      ></div>
                    );
                  })}
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
        "rounded-md w-full overflow-hidden border border-muted/30 group-hover:border-muted/30 relative z-20 bg-white cursor-pointer",
        className
      )}
    >
      <div className="relative z-50">
        <div className="">{children}</div>
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
