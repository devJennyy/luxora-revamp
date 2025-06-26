import Categories from "@/components/home/Categories";
import DailyDiscoveries from "@/components/home/DailyDiscoveries";
import FlashDeals from "@/components/home/FlashDeals";
import Hero from "@/components/home/Hero";


const Homepage = () => {
  return (
    <div className="w-full max-w-[1280px] !mx-auto xl:px-10 sm:px-5 px-4 !my-16">
      <Hero />
      <Categories />
      <FlashDeals />
      <DailyDiscoveries />
    </div>
  );
};

export default Homepage;
