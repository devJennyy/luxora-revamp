import { discoveryProducts } from "@/constants/data";
import SectionHeading from "../shared/SectionHeading";
import { HoverEffect } from "../ui/card-hover-effect";

const DailyDiscoveries = () => {
  return (
    <section className="sm:!my-20 !my-10 flex flex-col lg:gap-14 sm:gap-10 gap-8">
      <SectionHeading subtitle={"Daily"} title={"Discovery"} />
      <HoverEffect
        items={discoveryProducts.map((item) => ({
          ...item,
          link: item.link ?? "#",
        }))}
      />
    </section>
  );
};

export default DailyDiscoveries;
