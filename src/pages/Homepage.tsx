import Categories from "@/components/home/Categories";
import DailyDiscoveries from "@/components/home/DailyDiscoveries";
import FlashDeals from "@/components/home/FlashDeals";
import Hero from "@/components/home/Hero";
import LoadingAnimation from "@/components/ui/loading";
import { useState } from "react";

const Homepage = () => {
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
        } w-full max-w-[1280px] !mx-auto xl:px-10 sm:px-5 px-4 sm:!my-16 !my-8`}
      >
        <Hero />
        <Categories />
        <FlashDeals />
        <DailyDiscoveries />
      </section>
    </main>
  );
};

export default Homepage;
