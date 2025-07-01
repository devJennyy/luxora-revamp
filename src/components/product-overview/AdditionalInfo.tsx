import { useState, useRef, useEffect } from "react";
import { HoverEffect } from "@/components/ui/item-card-hover-effect";
import { womensApparel } from "@/constants/womensApparelData";

const TABS = [
  { label: "Descriptions", value: "description" },
  { label: "Additional Information", value: "additional" },
  { label: "Reviews", value: "reviews" },
];

const AdditionalInfo = () => {
  const [activeTab, setActiveTab] = useState("description");
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [underlineStyle, setUnderlineStyle] = useState<{
    left: number;
    width: number;
  }>({ left: 0, width: 0 });

  useEffect(() => {
    const idx = TABS.findIndex((t) => t.value === activeTab);
    const node = tabRefs.current[idx];
    if (node) {
      setUnderlineStyle({
        left: node.offsetLeft,
        width: node.offsetWidth,
      });
    }
  }, [activeTab]);

  return (
    <section className="flex flex-col justify-start items-start gap-10">
      <div className="flex flex-col gap-2 w-full">
        <div className="flex gap-10 font-medium transition-all relative">
          {TABS.map((tab, i) => (
            <button
              key={tab.value}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              className={`$activeTab === tab.value ? "text-primary" : "" cursor-pointer`}
              onClick={() => setActiveTab(tab.value)}
            >
              {tab.label}
            </button>
          ))}
          <div
            className="h-1 bg-primary rounded-full absolute bottom-[-0.7rem] transition-all duration-300"
            style={{
              left: underlineStyle.left,
              width: underlineStyle.width,
            }}
          />
        </div>
        <div className="w-full h-[2px] bg-muted/20 rounded-full" />
      </div>

      <div className="flex flex-col gap-7 text-justify text-sm w-full">
        {activeTab === "description" && (
          <>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
              libero non metus fermentum suscipit nec nec purus. Phasellus at
              sapien velit. Vivamus nec purus nec orci accumsan pharetra.
              Curabitur vel tristique urna. Sed ut ligula vel mauris rhoncus
              dictum. Vivamus ac turpis nec mauris dignissim lobortis non in
              ipsum. Suspendisse auctor risus quis velit bibendum, eget
              convallis turpis ultricies. Integer in aliquam metus. Etiam at
              nisi quis arcu tincidunt posuere. Cras tincidunt ullamcorper
              massa.
            </p>
            <p>
              A voluptas aperiam ut iste consequatur qui voluptas quos non omnis
              ullam. Est sint quia ut illum galisum aut velit ratione vel quae
              blanditiis eos aliquam ullam. Aut laboriosam dolores in aperiam
              quia aut aperiam eaque et quod soluta qui quaerat dolorum ut
              explicabo sint.
            </p>
          </>
        )}
        {activeTab === "additional" && (
          <div className="w-full flex flex-col gap-3">
            <div className="flex gap-6">
              <p className="w-32 font-medium text-muted">Product by</p>
              <p className="flex-1">BizChic</p>
            </div>
            <div className="flex gap-6">
              <p className="w-32 font-medium text-muted">Material</p>
              <p className="flex-1">100% Cotton</p>
            </div>
            <div className="flex gap-6">
              <p className="w-32 font-medium text-muted">Care</p>
              <p className="flex-1">Machine wash cold, tumble dry low</p>
            </div>
            <div className="flex gap-6">
              <p className="w-32 font-medium text-muted">Fit Size</p>
              <p className="flex-1">Regular</p>
            </div>
            <div className="flex gap-6">
              <p className="w-32 font-medium text-muted">Country</p>
              <p className="flex-1">Made in Somewhere</p>
            </div>
            <div className="flex gap-6">
              <p className="w-32 font-medium text-muted">P.S</p>
              <p className="flex-1">This is only sample text</p>
            </div>
          </div>
        )}
        {activeTab === "reviews" && (
          <div className="flex flex-col gap-6 w-full">
            <div className="flex items-center gap-3">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Jane Doe"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold">Jane Doe</p>
                <div className="flex items-center gap-1 text-yellow-400 text-xs">
                  {"★★★★★"}
                  <span className="text-muted ml-2 text-xs">2 days ago</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-justify">
              Love this product! The quality is amazing and it fits perfectly.
              Will definitely buy again.
            </p>
            <hr className="my-2 border-muted/20" />

            <div className="flex items-center gap-3">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="John Smith"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold">John Smith</p>
                <div className="flex items-center gap-1 text-yellow-400 text-xs">
                  {"★★★★☆"}
                  <span className="text-muted ml-2 text-xs">1 week ago</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-justify">
              Good value for the price. Shipping was fast and the item matched
              the description.
            </p>
          </div>
        )}
      </div>

      {/* Related Products */}
      <div className="flex flex-col gap-8 lg:!mt-10">
        <p className="lg:text-3xl font-semibold">Related Products</p>

         <HoverEffect
          items={womensApparel.map((item, idx) => ({
            ...item,
            link: item.link ?? "#",
            idx,
          }))}
        />
      </div>
    </section>
  );
};

export default AdditionalInfo;
