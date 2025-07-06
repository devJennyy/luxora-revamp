import { HoverEffect } from "@/components/ui/card-hover-effect-two";
import LoadingAnimation from "@/components/ui/loading";
import { data, itemPill } from "@/constants/helpcenterData";
import { useState } from "react";
import { LuSearch } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

const HelpCenter = () => {
  const navigate = useNavigate();

  const isElementInViewport = (el: HTMLElement) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight)
    );
  };

  const handleClick = (link: string) => {
    if (link.startsWith("#")) {
      const id = link.slice(1);
      const el = document.getElementById(id);
      if (el) {
        if (!isElementInViewport(el)) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }

        el.classList.add(
          "border-2",
          "border-primary",
          "bg-white",
          "!mx-auto",
          "rounded-xl"
        );

        setTimeout(() => {
          el.classList.remove(
            "border-2",
            "border-primary",
            "bg-white",
            "mx-auto",
            "rounded-xl"
          );
        }, 1500);
      }
    } else {
      navigate(link);
    }
  };

  const [isLoading, setIsLoading] = useState(true);
  setTimeout(() => {
    setIsLoading(false);
  }, 1500);

  return (
    <main>
      {isLoading && <LoadingAnimation />}

      <section
        className={`transition-opacity duration-500 ${
          isLoading ? "opacity-0" : "opacity-100"
        } w-full max-w-[1280px] !mx-auto xl:px-10 sm:px-5 px-4 sm:!my-20 !my-12 flex flex-col sm:gap-10 gap-6`}
      >
        <div className="flex flex-col justify-center items-center sm:gap-2 gap-3">
          <h1 className="sm:text-[2.5rem] text-3xl font-medium text-center">
            Hi, how can we help?
          </h1>
          <p className="text-secondary sm:text-base text-sm text-center">
            Find quick answers, helpful guides, or get in touch with our support
            team.
          </p>
        </div>

        <div className="relative w-full sm:h-16 h-12 md:px-2 sm:px-16 px-2">
          <input
            placeholder="Search something..."
            className="sm:text-base text-sm w-full h-full border sm:pl-5 pl-4 pr-12 rounded-md outline-none focus:shadow-sm focus-visible:ring-1 ring-stone-100"
          />
          <div className="absolute md:right-3 sm:right-[68px] right-3 top-1/2 -translate-y-1/2 sm:w-16 w-12 sm:h-16 h-10 flex justify-center items-center bg-primary rounded-md">
            <LuSearch className="text-white cursor-pointer sm:text-2xl text-xl" />
          </div>
        </div>

        <div className="w-full flex gap-3 justify-center items-center">
          {itemPill?.map((item, index) => (
            <button
              key={index}
              onClick={() => handleClick(item.link)}
              className="py-2 sm:px-5 px-4 bg-muted/10 rounded-full w-fit h-fit sm:text-sm text-[12px] whitespace-nowrap hover:bg-primary hover:text-white transition-default"
            >
              {item.title}
            </button>
          ))}
        </div>

        <div id="topics" className="w-full mx-auto">
          <HoverEffect items={data} />
        </div>
      </section>
    </main>
  );
};

export default HelpCenter;
