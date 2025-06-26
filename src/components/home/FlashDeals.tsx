import SectionHeading from "../shared/SectionHeading";

const FlashDeals = () => {
  return (
    <div className="!my-20 flex flex-col gap-14">
      <SectionHeading subtitle={"Flash"} title={"Deals"} />
      <div className="w-full h-56 grid grid-cols-3 gap-4">
        <div className="w-full h-full rounded-md bg-red-50"></div>
        <div className="w-full h-full rounded-md bg-red-100"></div>
        <div className="w-full h-full rounded-md bg-red-200"></div>
      </div>
    </div>
  );
};

export default FlashDeals;
