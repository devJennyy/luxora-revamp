import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import {
  discountBannerOne,
  discountBannerTwo,
  featuredData,
  promoBanner,
} from "@/constants/data";

const Hero = () => {
  return (
    <div className="w-full flex flex-col sm:gap-16 gap-8">
      <div className="w-full flex lg:flex-row flex-col-reverse gap-2">
        <div className="flex lg:flex-col flex-row gap-2 xl:max-w-[390px] lg:max-w-[340px] w-full max-w-full">
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
            modules={[Autoplay]}
            autoplay={{
              delay: 2300,
              disableOnInteraction: false,
              waitForTransition: true,
            }}
            speed={1000}
            className="lg:h-full md:h-36 sm:h-32 h-16 w-full rounded-md overflow-hidden"
          >
            {discountBannerOne.map((src, index) => (
              <SwiperSlide key={index}>
                <img
                  src={src}
                  alt={`Hero ${index + 1}`}
                  className="w-full h-full object-cover rounded-md"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
            modules={[Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              waitForTransition: true,
            }}
            speed={1000}
            className="lg:h-full md:h-36 sm:h-32 h-16 w-full rounded-md overflow-hidden"
          >
            {discountBannerTwo.map((src, index) => (
              <SwiperSlide key={index}>
                <img
                  src={src}
                  alt={`Hero ${index + 1}`}
                  className="w-full h-full object-cover rounded-md"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            waitForTransition: true,
          }}
          speed={1000}
          className="w-full lg:h-80 sm:h-64 h-32 rounded-md overflow-hidden"
        >
          {promoBanner.map((src, index) => (
            <SwiperSlide key={index}>
              <img
                src={src}
                alt={`Hero ${index + 1}`}
                className="w-full h-full object-cover rounded-md"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="w-full xl:h-32 md:h-36 sm:h-32 h-16 border sm:border-muted/30 border-muted/20 rounded-md lg:px-3">
        <div className="grid grid-cols-4 justify-between items-center w-full h-full">
          {featuredData?.map((item, index) => (
            <div
              key={index}
              className="flex justify-center items-center gap-3 w-full h-full"
            >
              <div className="xl:block hidden">{item.icon}</div>
              <div className="flex flex-col justify-center xl:items-start items-center gap-[1px]">
                <div className={`xl:hidden ${item.customClass}`}>
                  {item.icon}
                </div>
                <p
                  className={`${item.customClass} lg:text-base md:text-sm sm:text-[12px] text-[7px] font-medium xl:!mt-0 sm:!mt-2 !mt-1`}
                >
                  {item.title}
                </p>
                <p className="lg:text-[12px] md:text-[10px] sm:text-[9px] text-[5px] font-normal text-muted">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
