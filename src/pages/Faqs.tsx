import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards.tsx";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqSections, featuredFaqs } from "@/constants/faqsData";
import { useState } from "react";

const Faqs = () => {
   const [openValue, setOpenValue] = useState<string | undefined>("section-0-item-0");

  return (
    <section className="w-full max-w-[1280px] !mx-auto xl:px-10 sm:px-5 px-4 sm:!my-20 !my-12 flex flex-col sm:gap-10 gap-6">
      <div className="flex flex-col justify-center items-center sm:gap-2 gap-3">
        <h1 className="sm:text-[2.5rem] text-3xl font-medium text-center">Frequently Ask Questions</h1>
        <p className="text-secondary sm:text-base text-sm">
          Here you can find solutions to your queries.
        </p>
      </div>

      <div className="rounded-md flex flex-col antialiased bg-white items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={featuredFaqs.map((item, idx) => ({ ...item, index: idx }))}
          direction="right"
          speed="slow"
        />
      </div>

    <div className="!mt-5">
      <Accordion
        type="single"
        collapsible
        className="w-full flex flex-col md:gap-5 gap-8"
        value={openValue}
        onValueChange={setOpenValue}
      >
        {faqSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="w-full flex md:flex-row flex-col md:justify-between md:gap-8 gap-3">
            <div className="md:w-1/2 flex flex-col justify-start gap-2">
              <h2 className="sm:text-2xl text-xl font-medium">{section.title}</h2>
              <p className="text-secondary text-sm lg:w-[65%] sm:w-[80%] w-[95%] sm:leading-normal leading-relaxed">
                {section.description}
              </p>
            </div>

            <div className="md:w-1/2">
              {section.items.map(({ title, content }, itemIndex) => {
                const uniqueValue = `section-${sectionIndex}-item-${itemIndex}`;
                return (
                  <AccordionItem value={uniqueValue} key={uniqueValue}>
                    <AccordionTrigger>{title}</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance text-secondary sm:leading-normal leading-relaxed">
                      {content.map((text, idx) => (
                        <p key={idx}>{text}</p>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </div>
          </div>
        ))}
      </Accordion>
    </div>
    </section>
  );
};

export default Faqs;
