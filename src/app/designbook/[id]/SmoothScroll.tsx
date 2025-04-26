"use client";

import React, { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { PICTURES } from "@/app/components/constants/picture";

const SmoothScroll: React.FC = () => {
  const [parentWidth, setParentWidth] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const refs: { [key: string]: React.RefObject<HTMLHeadingElement> } = {
    natureRef: useRef<HTMLHeadingElement>(null),
    animalsRef: useRef<HTMLHeadingElement>(null),
    townRef: useRef<HTMLHeadingElement>(null),
    foodsRef: useRef<HTMLHeadingElement>(null),
    interiorRef: useRef<HTMLHeadingElement>(null),
  };
  const pictures = PICTURES.map((data) => ({
    ...data,
    ref: refs[`${data.name.toLowerCase()}Ref`],
  }));
  const handleScroll = (pictureRef: React.RefObject<HTMLHeadingElement>) => {
    if (pictureRef.current) {
      pictureRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  const handleBackToTop = (headerRef: React.RefObject<HTMLDivElement>) => {
    if (headerRef) {
      headerRef.current?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  useLayoutEffect(() => {
    if (ref.current) {
      setParentWidth(ref.current.offsetWidth);
    }
  }, []);
  return (
    <div ref={ref} className="m-10 relative">
      <section ref={headerRef}>
        <div
          className={`${
            parentWidth > 310 ? "flex items-center " : "flex justify-center"
          } my-5 gap-4`}
        >
          {pictures.map((picture) => (
            <button
              key={picture.name}
              onClick={() => handleScroll(picture.ref)}
              className={`${
                parentWidth > 310
                  ? "p-2 mx-10 border border-gray-400"
                  : "p-1 text-xs border border-gray-400"
              } hover:bg-gray-200 duration-500 rounded`}
            >
              {picture.name}
            </button>
          ))}
        </div>
      </section>
      <section
        className={`${
          parentWidth > 310 ? "flex flex-col" : "flex flex-col justify-center"
        } gap-2`}
      >
        {pictures.map((picture) => (
          <div key={picture.name}>
            <h2 key={picture.name} ref={picture.ref} className="font-bold">
              {picture.name}
            </h2>
            <div
              className={`flex ${
                parentWidth > 310 ? "" : "flex-col"
              } items-center gap-4`}
            >
              {picture.images.map((image) => (
                <React.Fragment key={image}>
                  <div>
                    <figure
                      className="relative overflow-hidden w-64 h-40"
                      key={image}
                    >
                      <Image
                        src={image}
                        alt=""
                        unoptimized
                        className="object-cover"
                        fill
                      />
                    </figure>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        ))}
      </section>
      {parentWidth > 310 && (
        <button
          onClick={() => handleBackToTop(headerRef)}
          className={`fixed bottom-1 right-1 bg-white ${
            parentWidth > 310 ? "w-28" : "w-10 text-xs"
          } text-center border border-gray-400 hover:bg-gray-200 duration-500 rounded`}
        >
          back to top
        </button>
      )}
    </div>
  );
};

export default SmoothScroll;