/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useRef, useEffect } from "react";
import { HoverEffect } from "@/components/ui/item-card-hover-effect";
import { useSearchParams } from "react-router-dom";
import { onValue, ref } from "firebase/database";
import { db } from "@/firebase";

const TABS = [
  { label: "Descriptions", value: "description" },
  { label: "Reviews", value: "reviews" },
];

const AdditionalInfo = () => {
  const [activeTab, setActiveTab] = useState("description");
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [underlineStyle, setUnderlineStyle] = useState<{
    left: number;
    width: number;
  }>({ left: 0, width: 0 });
  const [itemDatas, setItemDatas] = useState<any[]>([]);

  const [searchParams] = useSearchParams();

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

  useEffect(() => {
      const productId = parseInt(searchParams.get("id") || '');
      const category = searchParams.get("category");
  
      if (category) {
        onValue(ref(db), (snapshot) => {
          const data = snapshot.val();
          if (data !== null) {
            setItemDatas(data[category].filter((item: any) => item.id !== productId));
          } else {
            setItemDatas([]);
          }
        });
      }
    }, [searchParams]);

  return (
    <section className="flex flex-col justify-start items-start sm:gap-10 gap-8">
      <div className="flex flex-col gap-2 w-full">
        <div className="flex gap-10 font-medium transition-all relative">
          {TABS.map((tab, i) => (
            <button
              key={tab.value}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              className={`$activeTab === tab.value ? "text-primary" : "" cursor-pointer sm:text-base text-sm whitespace-nowrap`}
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
  {activeTab === "reviews" && (
    <div className="flex flex-col sm:gap-6 gap-4 w-full">
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
      <div className="flex flex-col xl:gap-8 gap-5 !mt-10">
        <p className="lg:text-2xl font-semibold">Related Products</p>

        <HoverEffect
          className="hidden lg:grid md:grid-cols-4 grid-cols-2 w-full"
          items={itemDatas.slice(0, 4).map((item, idx) => ({
            ...item,
            id: 1,
            price: String(item.price),
            link: item.link ?? "#",
            idx,
          }))}
        />

        <HoverEffect
          className="lg:hidden md:grid md:grid-cols-3 grid-cols-2 w-full hidden"
          items={itemDatas.slice(0, 3).map((item, idx) => ({
            ...item,
            id: 1,
            price: String(item.price),
            link: item.link ?? "#",
            idx,
          }))}
        />

        <HoverEffect
          className="md:hidden grid grid-cols-2 w-full"
          items={itemDatas.slice(0, 2).map((item, idx) => ({
            ...item,
            id: 1,
            price: String(item.price),
            link: item.link ?? "#",
            idx,
          }))}
        />
      </div>
    </section>
  );
};

export default AdditionalInfo;
