import { BiLogoTelegram, BiSolidTruck } from "react-icons/bi";
import { CiDiscount1, CiDeliveryTruck } from "react-icons/ci";
import { GoShieldCheck } from "react-icons/go";
import {
  MdOutlineCurrencyExchange,
  MdOutlineSupportAgent,
  MdPayment,
} from "react-icons/md";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";

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
    icon: (
      <CiDiscount1 className="xl:text-[60px] lg:text-[50px] sm:text-[40px] text-[20px]" />
    ),
  },
  {
    title: "Delivery",
    description: "100% Free for all orders",
    icon: (
      <CiDeliveryTruck className="xl:text-[60px] lg:text-[50px] sm:text-[40px] text-[20px]" />
    ),
  },
  {
    title: "Great Support",
    description: "We care your experiences",
    icon: (
      <MdOutlineSupportAgent className="xl:text-[55px] lg:text-[45px] sm:text-[35px] text-[20px]" />
    ),
  },
  {
    title: "Secure Payment",
    description: "100% Safe Payment Mode",
    icon: (
      <GoShieldCheck className="xl:text-[45px] lg:text-[40px] sm:text-[30px] text-[16px]" />
    ),
    customClass: "sm:!pt-0 !pt-[1px]",
  },
];

export const categoryData = [
  {
    categoryImage: "/images/categories/womens-apparel.png",
    categoryName: "Women's Apparels",
    href: "/product-list?category=womens-apparel"
  },
  {
    categoryImage: "/images/categories/womens-shoes.png",
    categoryName: "Women's Shoes",
    href: "/product-list?category=womens-shoes"
  },
  {
    categoryImage: "/images/categories/cosmetics.png",
    categoryName: "Cosmetics",
    href: "/product-list?category=cosmetics"
  },
  {
    categoryImage: "/images/categories/home-decor.png",
    categoryName: "Home Decor",
    href: "/product-list?category=home-decor"
  },
  {
    categoryImage: "/images/categories/appliances.png",
    categoryName: "Appliances",
    href: "/product-list?category=appliances"
  },
  {
    categoryImage: "/images/categories/womens-accessories.png",
    categoryName: "Women's Accessories",
    href: "/product-list?category=womens-accessories"
  },
  {
    categoryImage: "/images/categories/bags.png",
    categoryName: "Bags",
    href: "/product-list?category=bags"
  },
  {
    categoryImage: "/images/categories/mens-apparel.png",
    categoryName: "Men's Apparel",
    href: "/product-list?category=mens-apparel"
  },
  {
    categoryImage: "/images/categories/men-shoes.png",
    categoryName: "Men's Shoes",
    href: "/product-list?category=mens-shoes"
  },
  {
    categoryImage: "/images/categories/gadgets.png",
    categoryName: "Gadgets",
    href: "/product-list?category=gadgets"
  },
  {
    categoryImage: "/images/categories/motors.png",
    categoryName: "Motors",
    href: "/product-list?category=motors"
  },
  {
    categoryImage: "/images/categories/gaming-console.png",
    categoryName: "Gaming Consoles",
    href: "/product-list?category=gaming-console"
  },
  {
    categoryImage: "/images/categories/mens-accessories.png",
    categoryName: "Men's Accessories",
    href: "/product-list?category=mens-accessories"
  },
  {
    categoryImage: "/images/categories/mobiles-accessories.png",
    categoryName: "Mobile Accessories",
    href: "/product-list?category=mobile-accessories"
  },
  {
    categoryImage: "/images/categories/home&living.png",
    categoryName: "Home & Living",
    href: "/product-list?category=home&living"
  },
];

export const flashDealsData = [
  { imageSrc: "/images/flashdeals/flashdeals.png" },
  { imageSrc: "/images/flashdeals/flashdeals-two.png" },
  { imageSrc: "/images/flashdeals/flashdeals-three.png" },
];

export const benefits = [
  {
    title: "Free Shipping",
    icon: <BiLogoTelegram className="sm:text-[26px] text-xl" />,
  },
  {
    title: "Guaranteed Refund",
    icon: <MdOutlineCurrencyExchange className="sm:text-[26px] text-xl" />,
  },
  {
    title: "Fast Delivery",
    icon: <BiSolidTruck className="sm:text-[26px] text-xl" />,
  },
  {
    title: "Flexible Payments",
    icon: <MdPayment className="sm:text-[26px] text-xl" />,
  },
];

export const discoveryProducts = [
  {
    image: "/images/discovery/fujifilm.png",
    currentPrice: 159.6,
    previousPrice: 194.0,
    productName: "Fujifilm Instax mini 8",
    totalSold: 1.2,
    link: "/product-overview?category=discovery&id=1",
  },
  {
    image: "/images/discovery/menshirt.png",
    currentPrice: 19.99,
    previousPrice: 34.3,
    productName: "Polo Shirt for Men",
    totalSold: 7.8,
    link: "/product-overview?category=discovery&id=2",
  },
  {
    image: "/images/discovery/bag.png",
    currentPrice: 15.92,
    previousPrice: 31.83,
    productName: "Leather Backpack",
    totalSold: 1.3,
    link: "/product-overview?category=discovery&id=3",
  },
  {
    image: "/images/discovery/chair.png",
    currentPrice: 59.9,
    previousPrice: 75,
    productName: "Pillow Grey Chair",
    totalSold: 2.7,
    link: "/product-overview?category=discovery&id=4",
  },
  {
    image: "/images/discovery/headphone.png",
    currentPrice: 69.9,
    previousPrice: 100.0,
    productName: "Wireless Headphone",
    totalSold: 22,
    link: "/product-overview?category=discovery&id=5",
  },
  {
    image: "/images/discovery/dress.png",
    currentPrice: 9.26,
    previousPrice: 17.15,
    productName: "Corset Mini Dress",
    totalSold: 89,
    link: "/product-overview?category=discovery&id=6",
  },
  {
    image: "/images/discovery/sandals.png",
    currentPrice: 20.99,
    previousPrice: 34.3,
    productName: "Pointed Heels",
    totalSold: 1.5,
    link: "/product-overview?category=discovery&id=7",
  },
  {
    image: "/images/discovery/plushtoy.png",
    currentPrice: 7.94,
    previousPrice: 10.99,
    productName: "Plush Toy",
    totalSold: 55,
    link: "/product-overview?category=discovery&id=8",
  },
  {
    image: "/images/discovery/home-decor.png",
    currentPrice: 14.58,
    previousPrice: 27.73,
    productName: "Artificial Flower",
    totalSold: 18.6,
    link: "/product-overview?category=discovery&id=9"
  },
  {
    image: "/images/discovery/nike.png",
    currentPrice: 84.98,
    previousPrice: 104.98,
    productName: "Chuck 70",
    totalSold: 6.8,
    link: "/product-overview?category=discovery&id=10",
  },
];

export const socialIcons = [
  <FaTwitter />,
  <FaPinterestP />,
  <FaFacebookF />,
  <FaInstagram />,
  <FaGithub />,
];
export const downloadButton = [
  {
    image: "/icons/download-app-store.svg",
    alt: "download-on-app-store",
  },
  {
    image: "/icons/download-app-google-play.svg",
    alt: "download-on-google-play",
  },
];

export const footerData = [
  {
    header: "Company",
    content: ["About", "Contact", "Sitemap", "Careers"],
  },
  {
    header: "Help Center",
    content: [
      "Customer Service",
      "Policy",
      "Terms & Condition",
      "FAQs"
    ],
  },
  {
    header: "Partner",
    content: ["Affiliate Program", "Become Seller", "Advertise", "Partnership"],
  },
];
