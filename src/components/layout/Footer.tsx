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
      <p className="text-primary/60 hover:text-primary active:text-primary focus:text-primary  dark:text-white/60 cursor-pointer transition-all">
        {children}
      </p>
    );
  };
  return (
    <footer className="w-full">
      <div id="footer" className="w-full max-w-[1280px] !mx-auto xl:px-10 sm:px-5 px-4 flex flex-col sm:gap-20 gap-12 py-5">
        <div className="w-full xl:h-32 md:h-36 sm:h-32 h-16 border sm:border-muted/30 border-muted/20 rounded-md lg:px-3 px-1">
          <div className="grid grid-cols-4 justify-between items-center w-full h-full">
            {benefits?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col justify-center items-center sm:gap-4 gap-2 transition-all"
                >
                  {item.icon}
                  <p className="md:text-base sm:text-sm text-[8px]">
                    {item.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex lg:flex-row items-start flex-col w-full sm:gap-16 gap-12">
          <div className="flex flex-col justify-center gap-4 lg:max-w-[295px] w-full">
            <div className="h-fit">
              <img
                src="/logo/logo-black.svg"
                alt="Luxora Logo"
                className="xl:w-48 lg:w-36 w-32"
              />
            </div>

            <p className="lg:block sm:hidden block max-w-[320px] w-full text-left text-primary/60 dark:text-white/60 lg:text-sm text-[12px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempora incididunt ut labore et dolore magnasu aliqua
              seddo labore.
            </p>

            <p className="lg:hidden sm:block hidden w-full text-left text-primary/60 dark:text-white/60 sm:text-sm text-[12px]">
              <p>
                Lorem ipsum dolor sit amet. Id odio eaque eos nisi harum sit
                autem fugiat. Est voluptates illo quo ratione natus ut numquam
                molestiae ut mollitia omnis!
                Ea eaque repudiandae non consequatur harum est recusandae
                inventore id voluptas magni aut placeat perspiciatis eum minus
                earum ab praesentium magni. Eos quibusdam eaque qui laudantium
                iure vel corrupti iusto aut excepturi fugit.
              </p>
            </p>

            <div className="grid grid-cols-5 !mt-3 lg:gap-4 w-full max-w-[250px] ">
              {socialIcons?.map((icon, index) => {
                return (
                  <div
                    key={index}
                    className="flex justify-center items-center hover:bg-gradient-to-b from-primary to-primary/30 focus:bg-gradient-to-b active:bg-gradient-to-b hover:text-white active:text-white focus:text-white transition-slow bg-muted/10 xl:w-[46px] xl:h-[46px] lg:w-[40px] w-[40px] h-[40px] lg:rounded-xl md:rounded-lg rounded-lg text-primary cursor-pointer"
                  >
                    {icon}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-4 flex w-full gap-6">
            {footerData?.map((data, index) => (
              <div key={index} className="flex flex-col h-full text-left gap-4">
                <p className="font-semibold sm:text-lg text-sm sm:mb-1">
                  {data.header}
                </p>
                <div className="flex flex-col xl:gap-4 gap-3 sm:text-sm text-[12px]">
                  {data.content.map((item, index) => (
                    <ParagraphComponent key={index}>{item}</ParagraphComponent>
                  ))}
                </div>
              </div>
            ))}
            <div className="sm:flex flex-col h-full text-left gap-4 w-full hidden">
              <p className="font-bold text-lg mb-1">Get app</p>
              <div className="flex flex-col gap-2 text-primary/60 dark:text-white/60 text-sm">
                {downloadButton?.map((button, index) => {
                  return (
                    <button
                      key={index}
                      className="xl:py-3 py-[10px] flex justify-center items-center w-full bg-primary rounded-md text-white active:scale-95 transition-all duration-300 ease-in-out"
                    >
                      <img
                        src={button.image}
                        alt={button.alt}
                        className="object-contain sm:w-24 w-20"
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col lg:gap-3 gap-2 text-primary/60 dark:text-white/60 text-sm sm:hidden">
            {downloadButton?.map((button, index) => {
              return (
                <button
                  key={index}
                  className="flex justify-center items-center xl:h-[3rem] lg:h-[2.5rem] lg:w-full md:w-[7.5rem] sm:h-[2.3rem] h-[3rem] bg-primary rounded-lg text-white active:scale-95 transition-all duration-400 ease-in-out"
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

      <div className="w-full bg-primary sm:h-12 h-10 sm:!mt-20 !mt-12 flex justify-center items-center">
        <p className="text-white sm:text-[12px] text-[10px]">
          Designed & Developed by Jenny Pieloor
        </p>
      </div>
    </footer>
  );
};

export default Footer;
