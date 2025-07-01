import { womensApparels } from "@/constants/womensApparelData";
import { FaRegStar, FaStar } from "react-icons/fa6";
import { LuMinus, LuPlus } from "react-icons/lu";
import type { JSX } from "react/jsx-runtime";
import Countdown from "react-countdown";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
import { IoMdHeart } from "react-icons/io";
import { IoHeartOutline } from "react-icons/io5";

const ProductSummary = () => {
  const [count, setCount] = useState(1);
  const rating = 4;
  const getStarRating = () => {
    const stars: JSX.Element[] = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} />);
      } else {
        stars.push(<FaRegStar key={i} />);
      }
    }
    return stars;
  };
  return (
    <section className="w-full flex md:flex-row flex-col justify-between xl:gap-0 sm:gap-10 gap-8">
      {/* Media */}
      <div className="flex xl:flex-row flex-col-reverse sm:h-[35rem] h-[20rem] gap-4 overflow-hidden w-full">
        <div className="flex xl:flex-col flex-row justify-between h-full gap-1">
          {womensApparels?.map((item, itemIndex) =>
            item.pinkElegantSleeveless?.map((selection, index) => (
              <button
                key={`${itemIndex}-${index}`}
                className={`${
                  index === 0
                    ? "border-2 border-primary"
                    : "border-2 border-white hover:border-primary active:border-primary focus:border-primary transition-default"
                } w-full h-full border-2 border-primary cursor-pointer`}
              >
                <img
                  src={selection}
                  alt=""
                  className="w-full xl:max-w-20 h-full object-cover p-1"
                />
              </button>
            ))
          )}
        </div>

        <div className="w-full md:max-w-[32rem] h-full border-red-700">
          <img
            src={womensApparels[0]?.image}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Product Details */}
      <div className="w-full max-w-[33rem] flex flex-col gap-6 relative">
        {/* Product Name */}
        <div className="flex flex-col sm:gap-1">
          <p className="uppercase sm:text-sm text-[12px] font-medium">
            BizChic
          </p>
          <h1 className="sm:text-3xl text-xl font-semibold capitalize">
            Draped Neck Sleeveless
          </h1>
          <div className="flex items-center sm:gap-2 gap-1 !mt-2">
            {getStarRating()}
            <div className="flex gap-2 sm:text-sm text-[12px] text-secondary/80 font-normal sm:!ml-0 !ml-1">
              <p>4.0</p>
              <p>(121 Reviews)</p>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="flex items-center gap-3">
          <p className="text-2xl font-bold">$39.00</p>
          <p className="text-secondary/80 line-through">$59.00</p>
          <div className="flex justify-center items-center w-16 h-5 bg-red-600 rounded-full">
            <p className="uppercase text-[10px] text-white">Save 33%</p>
          </div>
        </div>

        {/* Countdown */}
        <div className="flex justify-between items-center sm:text-sm text-[12px] font-medium  bg-[#FDEFEE] w-full h-10 outline outline-[#F8CCCC] rounded-sm text-[#FF706B] px-4">
          <p>Hurry up! Sale ends in:</p>
          <Countdown
            className="tracking-[7px] font-bold"
            date={Date.now() + 18000000}
          />
        </div>

        {/* Item Stock */}
        <div className="flex flex-col justify-start items-start !mt-2 gap-2">
          <p className="text-[12px] text-secondary font-normal">
            Only <span className="font-bold">9</span> item(s) left in stock!
          </p>
          <div className="w-full h-1 bg-secondary/10 rounded-full flex items-center">
            <div className="w-10 h-[6px] bg-[#EF2D2D] rounded-full"></div>
          </div>
        </div>

        {/* Size */}
        <div className="flex flex-col gap-3">
          <p className="sm:text-base text-sm font-medium">Size</p>
          <div className="flex sm:gap-3 gap-2 sm:text-sm text-[12px]">
            {womensApparels?.map((item, itemIndex) =>
              item.sizes?.map((sizes, index) => (
                <button
                  key={`${itemIndex}-${index}`}
                  className={`${
                    index === 0
                      ? "sm:w-11 sm:h-11 w-10 h-10 bg-primary text-white"
                      : "sm:w-11 sm:h-11 w-10 h-10 border hover:bg-primary hover:text-white transition-all"
                  } flex justify-center items-center rounded-md`}
                >
                  {sizes}
                </button>
              ))
            )}
          </div>
        </div>

        {/* Color */}
        <div className="flex flex-col gap-3">
          <p className="sm:text-base text-sm font-medium">Color</p>
          <div className="flex justify-start items-center gap-3">
            {womensApparels?.map((item, itemIndex) =>
              item.colors?.map((color, index) => (
                <button
                  key={`${itemIndex}-${index}`}
                  className={`${color} ${
                    index == 0
                      ? `w-4 h-4 outline outline-black  outline-offset-2`
                      : `w-5 h-5 outline outline-gray-lightGray`
                  } rounded-full cursor-pointer`}
                ></button>
              ))
            )}
          </div>
        </div>

        {/* Quantity */}
        <div className="flex flex-col gap-3">
          <p className="sm:text-base text-sm font-medium">Quantity</p>
          <div className="flex justify-start sm:gap-4 gap-3">
            <div className="flex">
              <button
                onClick={() => setCount((prevCount) => prevCount - 1)}
                className="flex justify-center items-center sm:w-12 sm:h-11 w-10 h-10 border rounded-tl-md rounded-bl-md"
              >
                <LuMinus size={14} />
              </button>
              <p className="flex justify-center items-center border-t border-b sm:w-12 sm:h-11 w-10 h-10">
                {count}
              </p>
              <button
                onClick={() => setCount((prevCount) => prevCount + 1)}
                className="flex justify-center items-center sm:w-12 sm:h-11 w-10 h-10 border rounded-tr-md rounded-br-md"
              >
                <LuPlus size={14} />
              </button>
            </div>

            {/* Add to cart */}
            <Link
              to={"/signup"}
              className="flex justify-center items-center w-full sm:h-11 h-10 bg-primary text-white rounded-md active:bg-transparent active:text-primary border border-primary transition-all"
            >
              <p className="lg:text-base text-sm">Add to cart</p>
            </Link>

            {/* Favourite */}
            <Link to={"/signup"} className="hidden sm:block relative">
              <HoverCard openDelay={20} closeDelay={10}>
                <HoverCardTrigger asChild>
                  <Button
                    variant="link"
                    className="flex justify-center items-center min-w-11 h-11 border rounded-md"
                  >
                    <IoHeartOutline size={22} />
                  </Button>
                </HoverCardTrigger>

                <HoverCardContent
                  side="top"
                  className="flex justify-center items-center gap-2 w-fit px-4 h-fit py-3 !mb-2 text-sm right-[-1.2rem] bottom-1 absolute"
                >
                  <IoMdHeart size={19} className="text-red-600" />
                  <p>Favorite</p>
                  <p>(8.2k)</p>
                </HoverCardContent>
              </HoverCard>
            </Link>
          </div>
        </div>

        {/* Favourite */}
        <div className="absolute top-0 right-0 sm:hidden">
          <HoverCard openDelay={20} closeDelay={10}>
            <HoverCardTrigger asChild>
              <Button
                variant="link"
                className="flex justify-center items-center p-[6px] border rounded-md"
              >
                <IoHeartOutline size={20} />
              </Button>
            </HoverCardTrigger>

            <HoverCardContent
              side="top"
              className="flex justify-center items-center gap-2 w-fit px-4 h-fit py-3 !mb-2 sm:text-sm text-[12px] font-medium right-[-1.2rem] bottom-1 absolute"
            >
              <IoMdHeart className="text-red-600 sm:text-xl text-sm" />
              <p>Favorite</p>
              <p>(8.2k)</p>
            </HoverCardContent>
          </HoverCard>
        </div>
      </div>
    </section>
  );
};

export default ProductSummary;
