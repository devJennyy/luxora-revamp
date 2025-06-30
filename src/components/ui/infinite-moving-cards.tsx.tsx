"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState, type Key } from "react";
import { FaCheck } from "react-icons/fa6";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    index: Key | null | undefined;
    quote: string;
    cta: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards",
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse",
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item) => (
          <li
            className="relative w-full sm:max-w-[345px] max-w-[300px] shrink-0 rounded-2xl border border-zinc-200 sm:p-7 p-5"
            key={item.index}
          >
            <blockquote className="flex flex-col gap-3">
              <div className="sm:w-7 sm:h-7 w-6 h-6 rounded-full bg-primary flex justify-center items-center">
                <FaCheck className="text-white sm:text-sm text-[12px]"/>
              </div>
              <h1 className="sm:text-lg font-medium !mt-2">{item.title}</h1>
              <span className="relative z-20 sm:text-sm text-[12px] leading-[1.6] font-normal text-secondary">
                {item.quote}
              </span>
              <p className="underline underline-offset-4 sm:text-sm text-[12px] cursor-pointer">{item.cta}</p>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
