import {
  benefits,
  downloadButton,
  footerData,
  socialIcons,
} from "@/constants/data";
import type { ReactNode } from "react";

const Footer = () => {
  const ParagraphComponent = ({ children }: { children: ReactNode }) => {
    return (
      <p className="text-primary/60 hover:text-primary dark:text-white/60 hover:dark:text-white cursor-pointer hover:transition-all">
        {children}
      </p>
    );
  };
  return (
    <div className="w-full">
      <div className="w-full max-w-[1280px] !mx-auto xl:px-10 px-5 flex flex-col gap-20">
        <div className="w-full xl:h-32 md:h-36 sm:h-32 h-16 border sm:border-muted/30 border-muted/20 rounded-md lg:px-3">
          <div className="grid grid-cols-4 justify-between items-center w-full h-full">
            {benefits?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col justify-center items-center sm:gap-4 gap-2 transition-all"
                >
                  {item.icon}
                  <p className="md:text-base sm:text-sm text-[7px]">
                    {item.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex md:flex-row items-start flex-col w-full lg:gap-32 gap-8">
          <div className="flex flex-col justify-center gap-4 lg:max-w-[295px] md:max-w-[190px] max-w-[250px] w-full mt-12 lg:mt-0">
            <div className="h-fit">
              <img
                src="/logo/logo-black.svg"
                alt="Luxora Logo"
                className="xl:w-48 lg:w-36 w-32"
              />
            </div>
            <div className="max-w-[320px] w-full">
              <p className="text-left text-primary/60 dark:text-white/60 lg:text-sm text-[12px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="grid grid-cols-5 sm:!mt-5 xl:gap-0 lg:gap-4">
              {socialIcons?.map((icon, index) => {
                return (
                  <div
                    key={index}
                    className="flex justify-center items-center bg-muted/10 xl:w-[46px] xl:h-[46px] lg:w-[40px] lg:h-[40px] md:w-[31px] md:h-[31px] w-[40px] h-[40px] lg:rounded-xl md:rounded-lg rounded-xl text-primary cursor-pointer"
                  >
                    {icon}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex justify-between xl:gap-16 lg:gap-11 md:gap-5 sm:gap-10 gap-5 xl:mt-[7.3rem] lg:mt-[6.7rem] md:mt-[5.7rem]">
            {footerData?.map((data, index) => (
              <div
                key={index}
                className={`flex flex-col h-full text-left gap-4 ${
                  data.width
                    ? data.width
                    : "xl:w-[135px] lg:w-[100px] sm:w-[97px] w-[95px]"
                }`}
              >
                <p className="font-semibold sm:text-lg sm:mb-1">{data.header}</p>
                <div className="flex flex-col xl:gap-4 gap-3 xl:text-sm text-[12px]">
                  {data.content.map((item, index) => (
                    <ParagraphComponent key={index}>{item}</ParagraphComponent>
                  ))}
                </div>
              </div>
            ))}
            <div className="sm:flex flex-col h-full text-left gap-4 xl:w-[200px] lg:w-[160px] w-[130px] hidden">
              <p className="font-bold text-lg mb-1">Get app</p>
              <div className="flex flex-col lg:gap-3 gap-2 text-primary/60 dark:text-white/60 text-sm">
                {downloadButton?.map((button, index) => {
                  return (
                    <button
                      key={index}
                      className="flex justify-center items-center xl:h-[3rem] lg:h-[2.5rem] lg:w-full md:w-[7.5rem] h-[2.3rem] bg-primary rounded-lg text-white active:scale-95 transition-all duration-400 ease-in-out"
                    >
                      <img
                        src={button.image}
                        alt={button.alt}
                        className="object-cover xl:w-[103px] lg:w-24 sm:w-20 w-24"
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:gap-3 gap-2 text-primary/60 dark:text-white/60 text-sm sm:hidden mt-4">
            {downloadButton?.map((button, index) => {
              return (
                <button
                  key={index}
                  className="flex justify-center items-center xl:h-[3rem] lg:h-[2.5rem] lg:w-full md:w-[7.5rem] sm:h-[2.3rem] h-[2.9rem] bg-primary rounded-lg text-white active:scale-95 transition-all duration-400 ease-in-out"
                >
                  <img
                    src={button.image}
                    alt={button.alt}
                    className="object-cover xl:w-[103px] lg:w-24 sm:w-20 w-24"
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="w-full bg-primary sm:h-12 h-10 !mt-10 flex justify-center items-center">
        <p className="text-white sm:text-[12px] text-[10px]">
          Designed & Developed by Jenny Pieloor
        </p>
      </div>
    </div>
  );
};

export default Footer;
