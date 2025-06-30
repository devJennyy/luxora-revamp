import { BsBagCheckFill } from "react-icons/bs";
import { IoMdGlobe } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from "react-router-dom";
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

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === "/homepage";

  return (
    <div className="w-full text-white">
      {/* Top Header */}
      <div className="w-full sm:h-12 h-10 bg-primary">
        <div className="w-full max-w-[1280px] !mx-auto h-full flex justify-between items-center xl:px-10 sm:px-5 px-4 xl:text-sm sm:text-[12px] text-[11.5px] font-light">
          {isHome ? (
            <div className="flex items-center gap-2">
              <BsBagCheckFill className="!mb-1 sm:text-base text-[12px]" />
              <p>Free shipping on all orders over $22</p>
            </div>
          ) : (
            <Link to={"/homepage"} className="h-6">
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
      {isHome ? (
        <>
          <div className="h-8 md:hidden !mt-5">
            <img
              src="/logo/logo-black.svg"
              alt="Luxora logo"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="border-b w-full sm:h-24 h-20 max-w-[1280px] !mx-auto flex justify-between items-center xl:px-10 sm:px-5 p-4">
            <div className="w-full md:max-w-56 md:flex justify-start hidden">
              <img
                src="/logo/logo-black.svg"
                alt="Luxora logo"
                className="w-fit xl:h-9 md:h-8 h-7 object-contain"
              />
            </div>

            {/* Search Bar */}
            <div className="flex justify-end items-center w-full md:max-w-[25rem] transition-slow md:h-11 sm:h-10 h-9 !md:mr-0 !mr-3 relative">
              <input
                placeholder="Sign up and get 100% off your first order"
                className="hidden sm:block placeholder:text-muted text-primary w-full h-full xl:text-sm text-[13px] font-normal border rounded-md !pl-4 !pr-10 outline-none focus:shadow-sm focus-visible:ring-1 ring-stone-100"
              />
              <input
                placeholder="Search..."
                className="sm:hidden placeholder:text-muted text-primary w-full h-full xl:text-sm text-[13px] font-normal border rounded-md !pl-4 !pr-10 outline-none focus:shadow-sm focus-visible:ring-1 ring-stone-100"
              />
              <LuSearch
                size={20}
                className="absolute !mr-4 text-muted cursor-pointer"
              />
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
                    <DropdownMenuItem className="sm:text-sm text-[12px]">Login</DropdownMenuItem>
                  </Link>
                  <Link to={"/signup"}>
                    <DropdownMenuItem className="sm:text-sm text-[12px]">Signup</DropdownMenuItem>
                  </Link>
                </DropdownMenuContent>
              </DropdownMenu>
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
