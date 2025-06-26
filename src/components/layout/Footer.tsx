const Footer = () => {
  return (
    <div className="w-full">
      <div className="w-full max-w-[1280px] !mx-auto xl:px-10 sm:px-5 flex flex-col gap-20">
        <div className="w-full h-32 border bg-red-200 rounded-md"></div>

        <div className="w-full h-54 flex">
          <div className="w-full max-w-80 h-full bg-red-200"></div>
          <div className="w-full grid grid-cols-4">
            <div className="w-full h-full bg-red-50"></div>
            <div className="w-full h-full bg-red-100"></div>
            <div className="w-full h-full bg-red-200"></div>
            <div className="w-full h-full bg-red-300"></div>
          </div>
        </div>
      </div>

      <div className="w-full bg-primary h-12 !mt-10 flex justify-center items-center">
        <p className="text-white text-[12px]">Designed & Developed by Jenny Pieloor</p>
      </div>
    </div>
  );
};

export default Footer;
