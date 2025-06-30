import { flashDealsData } from "@/constants/data";
import SectionHeading from "../shared/SectionHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const FlashDeals = () => {
  return (
    <section className="sm:!my-20 !my-10 flex flex-col lg:gap-14 sm:gap-10 gap-8">
      <SectionHeading subtitle={"Flash"} title={"Deals"} />

      <Swiper
        modules={[Autoplay]}
        slidesPerView={3}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 8,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 12,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 16,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 16,
          },
        }}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          waitForTransition: true,
        }}
        speed={1000}
        className="w-full"
      >
        {flashDealsData?.map((item, index) => (
          <SwiperSlide key={index}>
            <img
              src={item.imageSrc}
              alt="Flash Deals"
              className="rounded-md w-full h-full object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default FlashDeals;
