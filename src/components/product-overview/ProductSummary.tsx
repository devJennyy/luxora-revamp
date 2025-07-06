/* eslint-disable @typescript-eslint/no-explicit-any */
import { FaRegStar, FaStar } from "react-icons/fa6";
import { LuMinus, LuPlus } from "react-icons/lu";
import type { JSX } from "react/jsx-runtime";
import Countdown from "react-countdown";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
import { IoMdHeart } from "react-icons/io";
import { IoHeartOutline } from "react-icons/io5";
import { onValue, ref } from "firebase/database";
import { db } from "@/firebase";

const ProductSummary = () => {
  const [count, setCount] = useState(1);
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(0);
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);

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
  const [itemData, setItemData] = useState<any>({});

  const [searchParams] = useSearchParams();

  useEffect(() => {
    const productId = parseInt(searchParams.get("id") || "");
    const category = searchParams.get("category");

    if (category && productId) {
      onValue(ref(db), (snapshot) => {
        const data = snapshot.val();
        if (data !== null) {
          setItemData(
            data[category].find((item: any) => item.id === productId)
          );
        } else {
          setItemData(null);
        }
      });
    }
  }, [searchParams]);

  const [previewImage, setPreviewImage] = useState<{ src: string } | null>(
    null
  );
  const [isVisible, setIsVisible] = useState(false);

  const handleOpenPreview = () => {
    setPreviewImage({
      src:
        itemData.productVariants?.[selectedVariantIndex] || itemData?.thumbnail,
    });

    setTimeout(() => {
      setIsVisible(true);
    }, 10);
  };

  const handleClosePreview = () => {
    setIsVisible(false);
    setTimeout(() => setPreviewImage(null), 300);
  };

  return (
    <section className="w-full flex md:flex-row flex-col justify-between xl:gap-0 sm:gap-10 gap-8">
      {/* Media */}
      <div className="flex xl:flex-row flex-col-reverse sm:h-[35rem] sm:gap-4 gap-2 overflow-hidden w-full">
        <div className="flex xl:flex-col flex-row justify-between h-full gap-1">
          {itemData.productVariants?.map((selection: any, index: number) => (
            <button
              key={index}
              onClick={() => setSelectedVariantIndex(index)}
              className={`${
                selectedVariantIndex === index
                  ? "border-2 border-primary"
                  : "border-2 border-white hover:border-primary active:border-primary focus:border-primary transition-default"
              } p-1 w-full h-full border-2 border-primary cursor-pointer`}
            >
              <img
                src={selection}
                alt={itemData.primaryProduct}
                className="w-full xl:w-20 sm:h-[97px] h-[60px] object-cover border"
              />
            </button>
          ))}
        </div>

        <div className="w-full xl:max-w-[500px] sm:h-full h-[20rem] border cursor-pointer">
          <img
            src={
              itemData.productVariants?.[selectedVariantIndex] ||
              itemData?.thumbnail
            }
            className="w-full h-full object-cover"
            alt={itemData?.itemName}
            onClick={handleOpenPreview}
          />
        </div>

        {previewImage && (
          <div
            className={`fixed inset-0 z-50 flex items-center justify-center bg-black/80 transition-opacity duration-300 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            onClick={handleClosePreview}
          >
            <img
              src={previewImage.src}
              alt="Full preview"
              className={`2xl:max-w-[50%] xl:max-w-[80%] sm:max-w-[90%] max-w-[85%] max-h-full rounded-xl shadow-lg transition-all duration-300 transform ${
                isVisible ? "scale-100 opacity-100" : "scale-90 opacity-0"
              }`}
            />
          </div>
        )}
      </div>

      {/* Product Details */}
      <div className="w-full flex flex-col gap-6 relative">
        {/* Product Name */}
        <div className="flex flex-col sm:gap-1">
          <p className="uppercase sm:text-sm text-[12px] font-medium">
            {itemData?.shopName}
          </p>
          <h1 className="sm:text-3xl text-xl font-semibold capitalize">
            {itemData?.itemName}
          </h1>
          <div className="flex items-center sm:gap-2 gap-1 !mt-2">
            {getStarRating()}
            <div className="flex gap-2 sm:text-sm text-[12px] text-secondary/80 font-normal sm:!ml-0 !ml-1">
              <p>4.5</p>
              <p>(121 Reviews)</p>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="flex items-center gap-3">
          <p className="text-2xl font-bold">${itemData?.currentPrice}</p>
          <p className="text-secondary/80 line-through">
            ${itemData?.previousPrice}
          </p>
          <div className="flex justify-center items-center w-16 h-5 bg-red-600 rounded-full">
            <p className="uppercase text-[10px] text-white">Save 22%</p>
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
    {itemData?.sizes?.map((size: any, index: number) => (
      <button
        key={index}
        type="button"
        onClick={() => setSelectedSizeIndex(index)}
        className={`w-fit px-4 sm:h-11 h-10 flex justify-center items-center rounded-md
          ${selectedSizeIndex === index
            ? "bg-primary text-white"
            : "border hover:bg-primary hover:text-white transition-all"
          }`}
      >
        {size}
      </button>
    ))}
  </div>
</div>
        {/* Color */}
        <div className="flex flex-col gap-3">
  <p className="sm:text-base text-sm font-medium">Color</p>
  <div className="flex justify-start items-center gap-3">
    {itemData?.colors?.map((item: any, index: number) => (
      <button
        key={index}
        type="button"
        onClick={() => setSelectedColorIndex(index)}
        className={`${item} ${
          selectedColorIndex === index
            ? "w-5 h-5 outline outline-black outline-offset-2"
            : "w-5 h-5 outline outline-gray-lightGray"
        } rounded-full cursor-pointer transition-all`}
      ></button>
    ))}
  </div>
</div>

        {/* Quantity */}
        <div className="flex flex-col gap-3">
  <p className="sm:text-base text-sm font-medium">Quantity</p>
  <div className="flex justify-start sm:gap-4 gap-3">
    <div className="flex">
      <button
        onClick={() => setCount((prevCount) => Math.max(1, prevCount - 1))}
        className="flex justify-center items-center sm:w-12 sm:h-11 w-10 h-10 border rounded-tl-md rounded-bl-md"
        disabled={count <= 1}
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
      </div>
    </section>
  );
};

export default ProductSummary;
