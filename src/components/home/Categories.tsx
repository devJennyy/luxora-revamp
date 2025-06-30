import { categoryData } from "@/constants/data";
import SectionHeading from "../shared/SectionHeading";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <section className="sm:!my-20 !my-10 flex flex-col lg:gap-14 sm:gap-10 gap-8">
      <SectionHeading subtitle={"Shop From"} title={"Top Categories"} />

      <div className="grid grid-cols-5 xl:grid-cols-7 lg:gap-x-12 sm:gap-x-8 gap-4 md:gap-y-14 sm:gap-y-10 gap-y-6 w-full">
        {categoryData?.map((item, index) => {
          return (
            <Link to={item.href ?? "#"} className={`flex flex-col items-center gap-5 ${index === 14 ? 'xl:hidden' : ''}`}>
              <div key={index} className="w-full max-w-32 flex justify-center items-center transition-default cursor-pointer hover:border active:border focus:border border-muted/20 rounded-full bg-primary-muted aspect-square">
              <img
                src={item.categoryImage}
                alt={item.categoryName}
                className="md:w-24 md:h-24 sm:w-16 sm:h-16 w-10 h-10 object-contain"
              />
            </div>
            <p className="text-center xl:text-base md:text-sm sm:text-[12px] text-[8px]">{item.categoryName}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Categories;
