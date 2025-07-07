/* eslint-disable @typescript-eslint/no-explicit-any */
import { BsBagCheckFill } from "react-icons/bs";
import { IoMdGlobe } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TiArrowBack } from "react-icons/ti";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link, useNavigate } from "react-router-dom";
import { LuMessagesSquare, LuSearch } from "react-icons/lu";
import { BiSolidHelpCircle } from "react-icons/bi";
import { useLocation } from "react-router-dom";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { useEffect, useState } from "react";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const [result, setResult] = useState<string[]>([]);
  const [keyResult, setKeyResult] = useState<any[]>([]);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (value.length === 0) {
        setResult([]);
        return;
      }

      fetch(
        "https://luxora-devjenny-default-rtdb.asia-southeast1.firebasedatabase.app/.json"
      )
        .then((res) => res.json())
        .then((resData) => {
          const searchQuery = value.toLowerCase();
          const matchedResults: string[] = [];
          const matchedKeyResults: any[] = [];

          for (const key in resData) {
            resData[key]?.map((data: any) => {
              const itemName = data?.itemName?.toLowerCase?.();

              if (itemName && itemName.includes(searchQuery)) {
                matchedResults.push(data.itemName);
                matchedKeyResults.push({
                  category: key,
                  id: data.id,
                });
              }
            });
          }

          setResult(matchedResults);
          setKeyResult(matchedKeyResults);
        })
        .catch((error) => {
          console.error("Search error:", error);
        });
    }, 100);

    return () => clearTimeout(delayDebounce);
  }, [value]);

  const isCustomPage =
    location.pathname === "/homepage" ||
    location.pathname === "/product-list" ||
    location.pathname === "/product-overview" ||
    location.pathname === "/luxora-picks" ||
    location.pathname === "/flash-deals";

  return (
    <div className="w-full text-white">
      {/* Top Header */}
      <div className="w-full sm:h-12 h-10 bg-primary">
        <div className="w-full max-w-[1280px] !mx-auto h-full flex justify-between items-center xl:px-10 sm:px-5 px-4 xl:text-sm sm:text-[12px] text-[11.5px] font-light">
          {isCustomPage ? (
            <div className="flex items-center gap-2">
              <BsBagCheckFill className="!mb-1 sm:text-base text-[12px]" />
              <p>Free shipping on all orders over $22</p>
            </div>
          ) : (
            <Link to={"/homepage"} className="h-6 w-fit">
              <img
                src="/logo/logo-white.svg"
                alt="Luxora Logo"
                className="w-full h-full object-contain"
              />
            </Link>
          )}

          <div className="flex items-center xl:gap-7 gap-3 transition-slow">
            {/* Language */}
            <Select>
              <SelectTrigger className="flex justify-center items-center gap-2 outline-none">
                <IoMdGlobe size={16} />
                <div className="xl:text-sm text-[12px] font-light sm:block hidden">
                  <SelectValue placeholder="English" />
                </div>
                <MdKeyboardArrowDown size={16} className="sm:block hidden" />
              </SelectTrigger>
              <SelectContent className="!mt-1">
                <SelectGroup>
                  <SelectItem
                    value="english"
                    className="sm:text-sm text-[12px]"
                  >
                    English
                  </SelectItem>
                  <SelectItem
                    value="filipino"
                    className="sm:text-sm text-[12px]"
                  >
                    Filipino
                  </SelectItem>
                  <SelectItem
                    value="japanese"
                    className="sm:text-sm text-[12px]"
                  >
                    Japanese
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            {/* Faqs */}
            <Link
              to={"/faqs"}
              className="flex justify-center items-center gap-2"
            >
              <LuMessagesSquare size={16} />
              <p className="sm:block hidden">Faqs</p>
            </Link>

            {/* Help Center */}
            <Link
              to={"/help-center"}
              className="flex justify-center items-center gap-2"
            >
              <BiSolidHelpCircle size={16} />
              <p className="sm:block hidden">Help Center</p>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      {isCustomPage ? (
        <>
          <a href="/homepage" className="h-8 md:hidden sm:!mt-6 !mt-5 block">
            <img
              src="/logo/logo-black.svg"
              alt="Luxora logo"
              className="w-full h-full object-contain"
            />
          </a>

          <div className="w-full max-w-[1280px] !mx-auto xl:px-10 sm:px-5">
            <div className="border-b w-full flex justify-between items-center sm:h-24 h-[70px] ">
              <Link
                to={"/homepage"}
                className="w-full md:max-w-56 md:flex justify-start hidden"
              >
                <img
                  src="/logo/logo-black.svg"
                  alt="Luxora logo"
                  className="w-fit xl:h-9 md:h-8 h-7 object-contain"
                />
              </Link>

              {location.pathname !== "/homepage" && (
                <button
                  className="md:hidden !md:mr-0 !mr-3 flex justify-center items-center md:w-11 md:h-11 sm:w-10 sm:h-10 w-9 h-9 bg-primary rounded-md sm:!p-[10px] !p-[9px] cursor-pointer"
                  onClick={() => navigate(-1)}
                >
                  <TiArrowBack size={18} />
                </button>
              )}

              {/* Search Bar */}
              <div className="flex justify-end items-center w-full md:max-w-[25rem] transition-slow md:h-11 sm:h-10 h-9 !md:mr-0 !mr-3 relative">
                <input
                  placeholder="Search item..."
                  className="placeholder:text-muted text-primary w-full h-full xl:text-sm text-[13px] font-normal border rounded-md !pl-4 !pr-10 outline-none focus:shadow-sm focus-visible:ring-1 ring-stone-100"
                  onChange={(e) => setValue(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => {
                    setTimeout(() => setIsFocused(false), 150);
                  }}
                  value={value}
                />

                <LuSearch
                  size={20}
                  className="absolute right-3 text-muted cursor-pointer"
                />
                {result.length > 0 && isFocused && (
                  <ul className="absolute top-full !mt-1 sm:p-2 p-[7px] bg-white shadow-md w-full z-50 rounded-md max-h-60 overflow-y-auto">
                    {result.map((item, index) => (
                      <li
                        key={index}
                        onClick={() => {
                          navigate(
                            `/product-overview?category=${keyResult[index].category}&id=${keyResult[index].id}`
                          );
                          console.log(keyResult[index]);
                        }}
                        className="sm:text-sm text-[13px] sm:p-3 p-[7px] hover:bg-gray-100 rounded-md text-primary cursor-pointer"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="md:w-full md:max-w-48 flex justify-end items-center sm:gap-2 gap-[5px]">
                {/* Cart */}
                <HoverCard openDelay={20} closeDelay={10}>
                  <HoverCardTrigger asChild>
                    <Button
                      variant="link"
                      className="hidden xl:flex justify-center items-center md:w-11 md:h-11 sm:w-10 sm:h-10 w-9 h-9 border rounded-md !p-[10px] cursor-pointer"
                    >
                      <img
                        src="/icons/cart.svg"
                        className="object-contain w-full h-full"
                      />
                    </Button>
                  </HoverCardTrigger>

                  <HoverCardContent className="lg:w-80 w-72 xl:h-80 lg:h-64 h-56 2xl:!mr-16 xl:!mr-10 !mr-5">
                    <div className="flex flex-col justify-center items-center py-4">
                      <div className="xl:w-48 xl:h-48 lg:w-32 lg:h-32 w-28 h-28">
                        <img
                          src="/icons/cart-two.svg"
                          className="w-fit h-fit object-cover ml-[10px] gap-5"
                        />
                      </div>
                      <div className="flex flex-col justify-center items-center gap-1">
                        <p className="lg:text-base text-sm font-bold">
                          No Orders
                        </p>
                        <p className="lg:text-sm text-[12px] text-gray-darkGray/90">
                          You haven't made any orders yet.
                        </p>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>

                {/* Cart on mobile*/}
                <div className="xl:hidden">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="link"
                        className="flex justify-center items-center md:w-11 md:h-11 sm:w-10 sm:h-10 w-9 h-9 border rounded-md !p-[10px] cursor-pointer"
                      >
                        <img
                          src="/icons/cart.svg"
                          className="object-contain w-full h-full"
                        />
                      </Button>
                    </PopoverTrigger>

                    <PopoverContent className="!mt-2 lg:w-80 md:w-64 sm:w-60 w-54 xl:h-80 lg:h-64 sm:h-56 2xl:!mr-16 xl:!mr-10 !mr-5">
                      <div className="flex flex-col justify-end items-center sm:gap-5 gap-3">
                        <div className="xl:w-48 xl:h-48 lg:w-32 lg:h-32 sm:w-28 sm:h-28 w-20 h-20">
                          <img
                            src="/icons/cart-two.svg"
                            className="w-full h-full object-contain ml-[10px] gap-5"
                          />
                        </div>
                        <div className="flex flex-col justify-center items-center gap-1 !mb-1">
                          <p className="lg:text-base text-sm sm:font-bold font-semibold">
                            No Orders
                          </p>
                          <p className="lg:text-sm sm:text-[12px] text-[10px] text-gray-darkGray/90">
                            You haven't made any orders yet.
                          </p>
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Favourites */}
                <HoverCard openDelay={20} closeDelay={10}>
                  <HoverCardTrigger asChild>
                    <Button
                      variant="link"
                      className="hidden xl:flex justify-center items-center md:w-11 md:h-11 sm:w-10 sm:h-10 w-9 h-9 border rounded-md !p-[10px] cursor-pointer"
                    >
                      <img
                        src="/icons/favourite.svg"
                        className="object-contain w-full h-full"
                      />
                    </Button>
                  </HoverCardTrigger>

                  <HoverCardContent className="lg:w-80 w-72 xl:h-80 lg:h-64 h-56 2xl:!mr-40 xl:!mr-10 !mr-5">
                    <div className="flex flex-col justify-center items-center py-2 gap-5">
                      <div className="xl:w-48 xl:h-48 lg:w-32 lg:h-32 w-28 h-28">
                        <img
                          src="/icons/favourite-two.svg"
                          className="w-fit h-fit object-cover"
                        />
                      </div>
                      <div className="flex flex-col justify-center items-center gap-1">
                        <p className="lg:text-base text-sm font-bold">
                          No Orders
                        </p>
                        <p className="lg:text-sm text-[12px] text-gray-darkGray/90">
                          You haven't made any orders yet.
                        </p>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>

                {/* Favourites on mobile*/}
                <div className="xl:hidden">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="link"
                        className="flex justify-center items-center md:w-11 md:h-11 sm:w-10 sm:h-10 w-9 h-9 border rounded-md !p-[10px] cursor-pointer"
                      >
                        <img
                          src="/icons/favourite.svg"
                          className="object-contain w-full h-full"
                        />
                      </Button>
                    </PopoverTrigger>

                    <PopoverContent className="!mt-2 lg:w-80 md:w-64 sm:w-60 w-54 xl:h-80 lg:h-64 sm:h-56 2xl:!mr-40 xl:!mr-10 !mr-5">
                      <div className="flex flex-col justify-center items-center sm:gap-5 gap-3">
                        <div className="xl:w-48 xl:h-48 lg:w-32 lg:h-32 sm:w-28 sm:h-28 w-20 h-20">
                          <img
                            src="/icons/favourite-two.svg"
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="flex flex-col justify-center items-center gap-1 !mb-1">
                          <p className="lg:text-base text-sm sm:font-bold font-semi-bold">
                            No Orders
                          </p>
                          <p className="lg:text-sm sm:text-[12px] text-[10px] text-gray-darkGray/90">
                            You haven't made any orders yet.
                          </p>
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>

                {/* User Profile */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="link"
                      className="flex justify-center items-center md:w-11 md:h-11 sm:w-10 sm:h-10 w-9 h-9 border border-primary bg-primary rounded-md !p-[10px] cursor-pointer"
                    >
                      <img
                        src="/icons/user.svg"
                        className="object-contain w-full h-full"
                      />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="2xl:!mr-20 xl:!mr-10 !mr-5">
                    <Link to={"/login"}>
                      <DropdownMenuItem className="sm:text-sm text-[12px]">
                        Login
                      </DropdownMenuItem>
                    </Link>
                    <Link to={"/signup"}>
                      <DropdownMenuItem className="sm:text-sm text-[12px]">
                        Signup
                      </DropdownMenuItem>
                    </Link>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Header;
