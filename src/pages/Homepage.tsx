import Categories from "@/components/home/Categories";
import DailyDiscoveries from "@/components/home/DailyDiscoveries";
import FlashDeals from "@/components/home/FlashDeals";
import Hero from "@/components/home/Hero";


const Homepage = () => {
  return (
    <main className="w-full max-w-[1280px] !mx-auto xl:px-10 sm:px-5 px-4 sm:!my-16 !my-8">
      <Hero />
      <Categories />
      <FlashDeals />
      <DailyDiscoveries />
    </main>
  );
};

export default Homepage;
