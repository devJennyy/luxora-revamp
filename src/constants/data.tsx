import { CiDiscount1, CiDeliveryTruck } from "react-icons/ci";
import { GoShieldCheck } from "react-icons/go";
import { MdOutlineSupportAgent } from "react-icons/md";

export const promoBanner = [
  "/images/hero/one.png",
  "/images/hero/two.png",
  "/images/hero/three.png",
];
export const discountBannerOne = [
  "/images/hero/four.png",
  "/images/hero/five.png",
  "/images/hero/six.png",
];
export const discountBannerTwo = [
  "/images/hero/seven.png",
  "/images/hero/eight.png",
  "/images/hero/nine.png",
];

export const featuredData = [
  {
    title: "Discount",
    description: "Enjoy vouchers everyday",
    icon: <CiDiscount1 className="xl:text-[60px] lg:text-[50px] sm:text-[40px] text-[20px]"/>,
  },
  {
    title: "Delivery",
    description: "100% Free for all orders",
    icon: <CiDeliveryTruck className="xl:text-[60px] lg:text-[50px] sm:text-[40px] text-[20px]"/>,
  },
  {
    title: "Great Support",
    description: "We care your experiences",
    icon: <MdOutlineSupportAgent className="xl:text-[55px] lg:text-[45px] sm:text-[35px] text-[20px]"/>,
  },
  {
    title: "Secure Payment",
    description: "100% Safe Payment Mode",
    icon: <GoShieldCheck className="xl:text-[45px] lg:text-[40px] sm:text-[30px] text-[16px]"/>,
    customClass: "sm:!pt-0 !pt-[1px]"
  },
];
