const Hero = () => {
  return (
    <div className="w-full flex flex-col gap-16">
      <div className="w-full flex lg:flex-row flex-col gap-2">
        <div className="flex lg:flex-col md:flex-row flex-col gap-2 lg:max-w-[390px] w-full max-w-full">
          <div className="lg:h-full h-56 w-full bg-red-50 rounded-md"></div>
          <div className="lg:h-full h-56 w-full bg-red-100 rounded-md"></div>
        </div>
        <div className="w-full lg:h-80 h-56 bg-red-200 rounded-md"></div>
      </div>

      <div className="w-full h-32 border rounded-md bg-red-100"></div>
    </div>
  );
};

export default Hero;
