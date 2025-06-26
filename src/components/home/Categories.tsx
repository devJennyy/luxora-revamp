import SectionHeading from "../shared/SectionHeading";

const Categories = () => {
  return (
    <div className="!my-20 flex flex-col gap-14">
      <SectionHeading subtitle={"Shop From"} title={"Top Categories"} />

      <div className="grid grid-cols-5 xl:grid-cols-7 lg:gap-x-12 sm:gap-x-8 gap-4  gap-y-10 w-full">
        <div className="rounded-full bg-red-50 aspect-square w-full max-w-32"></div>
        <div className="rounded-full bg-red-100 aspect-square w-full max-w-32"></div>
        <div className="rounded-full bg-red-200 aspect-square w-full max-w-32"></div>
        <div className="rounded-full bg-red-200 aspect-square w-full max-w-32"></div>
        <div className="rounded-full bg-red-200 aspect-square w-full max-w-32"></div>
        <div className="rounded-full bg-red-100 aspect-square w-full max-w-32"></div>
        <div className="rounded-full bg-red-50 aspect-square w-full max-w-32"></div>
        <div className="rounded-full bg-red-50 aspect-square w-full max-w-32"></div>
        <div className="rounded-full bg-red-100 aspect-square w-full max-w-32"></div>
        <div className="rounded-full bg-red-200 aspect-square w-full max-w-32"></div>
        <div className="rounded-full bg-red-200 aspect-square w-full max-w-32"></div>
        <div className="rounded-full bg-red-200 aspect-square w-full max-w-32"></div>
        <div className="rounded-full bg-red-100 aspect-square w-full max-w-32"></div>
        <div className="rounded-full bg-red-50 aspect-square w-full max-w-32"></div>
      </div>
    </div>
  );
};

export default Categories;
