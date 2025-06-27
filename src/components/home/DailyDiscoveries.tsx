import SectionHeading from "../shared/SectionHeading";

const DailyDiscoveries = () => {
  return (
    <div className="sm:!my-20 !my-10 flex flex-col gap-14">
      <SectionHeading subtitle={"Daily"} title={"Discovery"} />
      {/* <div className="w-full flex flex-wrap gap-4">
        <div className="md:w-56 md:h-80 sm:w-[185px] sm:h-64 w-[155px] h-54 rounded-md bg-red-50"></div>
        <div className="md:w-56 md:h-80 sm:w-[185px] sm:h-64 w-[155px] h-54 rounded-md bg-red-100"></div>
        <div className="md:w-56 md:h-80 sm:w-[185px] sm:h-64 w-[155px] h-54 rounded-md bg-red-200"></div>
        <div className="md:w-56 md:h-80 sm:w-[185px] sm:h-64 w-[155px] h-54 rounded-md bg-red-100"></div>
        <div className="md:w-56 md:h-80 sm:w-[185px] sm:h-64 w-[155px] h-54 rounded-md bg-red-50"></div>
      </div> */}
      <div className="w-full lg:grid-cols-5 sm:grid-cols-3 grid grid-cols-2 gap-4">
        <div className="w-full md:h-80 sm:h-64 h-54 rounded-md bg-red-50"></div>
        <div className="w-full md:h-80 sm:h-64 h-54 rounded-md bg-red-100"></div>
        <div className="w-full md:h-80 sm:h-64 h-54 rounded-md bg-red-200"></div>
        <div className="w-full md:h-80 sm:h-64 h-54 rounded-md bg-red-100"></div>
        <div className="w-full md:h-80 sm:h-64 h-54 rounded-md bg-red-50"></div>
      </div>
    </div>
  );
};

export default DailyDiscoveries;
