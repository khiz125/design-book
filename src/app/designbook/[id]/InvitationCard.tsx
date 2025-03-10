"use client";

import React, { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";

import { FONTS } from "../../components/constants/fonts";

const InvitationCard = () => {
  const [parentWidth, setParentWidth] = useState(0);
  const fonts = FONTS;
  const [index, setIndex] = useState(7);

  const animateSpins = {
    1: "animate-[spin_1.0s_linear_infinite] [clip-path:polygon(75%_0%,100%_100%,0%_100%)]",
    1.5: "animate-[spin_1.5s_linear_infinite] [clip-path:polygon(75%_0%,100%_100%,0%_100%)]",
    2: "animate-[spin_2.0s_linear_infinite] [clip-path:polygon(75%_0%,100%_100%,0%_100%)]",
  }
  const ref = useRef<HTMLDivElement | null>(null);
  useLayoutEffect(() => {
    if (ref.current) {
      setParentWidth(ref.current.offsetWidth);
    }
  }, []);
  return (
    <section ref={ref} className="w-full h-full">
      {parentWidth > 310 ? (
        <div className={`w-full`}>
          {FONTS.map((font, i) => (
            <button
              key={font.name}
              className={`${font.font.className} font-${font.name} p-2 m-2 border border-gray-500`}
              onClick={() => setIndex(i)}
            >
              {font.name}
            </button>
          ))}
        </div>
      ) : <></>}
      <div className={`relative bg-[#4682B4] w-full ${parentWidth > 310 ? "h-full" : "h-full"
        } ${fonts[index].font.className} font-${fonts[index].name}`}>
        <div className="absolute top-10 left-4 bg-[#FFCC00] w-11/12 h-1/3">
          <figure className="relative top-10 left-1/3 bg-white w-7/12 h-2/3">
            <Image
              src="/images/img/tea_set.png"
              alt="Picture of tes set"
              fill
              sizes="(max-width: 768px) 310vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
              priority
            />
          </figure>
        </div>
        <div className="absolute top-4 left-10 bg-[#333] w-2/7 h-4/5 opacity-90">
          <p className={`
            text-white ${parentWidth > 500 && index === 5 ? "p-10 text-8xl leading-[10rem]"
              : parentWidth > 500 ? "p-10 text-5xl leading-[10rem]" 
              : parentWidth < 500 && index === 5 ? "px-3 text-[12px]"
              : "px-3 text-[22px]"}`}>
            It&apos;s <br />a <br />wild <br />tea <br />party!
          </p>
        </div>
        <div className={`absolute ${parentWidth > 500 ? "bottom-[30rem] right-4" : "bottom-[22rem] right-8"}`}>
          <p className={`text-white ${parentWidth > 500 && index === 5 ? "p-10 text-8xl"
            : parentWidth > 500 ? "p-10 text-5xl leading-[100px]"
            : parentWidth < 500 && index === 5 ? "px-3 text-[12px]"
              : "px-3 text-[32px]"}`}>
            please join us <br />in the afternoon <br />wear your hat!
          </p>
        </div>
        <div className={`absolute bg-[#4682B4] ${animateSpins["1.5"]} ${parentWidth > 310 ? "top-36 right-24 w-5 h-5" : "top-12 right-8 w-2 h-2"}`}></div>
        <div className={`absolute bg-[#4682B4] ${animateSpins["2"]} ${parentWidth > 310 ? "top-[27rem] left-[30rem] w-10 h-5" : "top-16 left-36 w-5 h-2"}`}></div>
        <div className={`absolute bg-[#4682B4] ${animateSpins["1"]} ${parentWidth > 310 ? "top-72 left-64 w-5 h-5" : "top-36 left-6 w-2 h-2"}`}></div>
        <div className={`absolute bg-[#FFCC00] ${animateSpins["1.5"]} ${parentWidth > 310 ? "top-14 left-64 w-5 h-5" : "top-12 left-24  w-2 h-2"}`}></div>
        <div className={`absolute bg-[#FFCC00] ${animateSpins["1"]} ${parentWidth > 310 ? "bottom-80 left-24 w-5 h-5" : "bottom-32 left-12  w-2 h-2"}`}></div>
        <div className={`absolute bg-[#FFCC00] ${animateSpins["2"]} ${parentWidth > 310 ? "top-[34rem] left-16 w-5 h-5" : "top-36 left-24  w-2 h-2"}`}></div>
        <div className={`absolute bg-[#FFCC00] ${animateSpins["1.5"]} ${parentWidth > 310 ? "bottom-[48rem] right-24 w-5 h-5" : "bottom-36 left-32 w-2 h-2"}`}></div>
        <div className={`absolute bg-[#FFCC00] ${animateSpins["1.5"]} ${parentWidth > 310 ? "bottom-[40rem] left-64 w-10 h-5" : "bottom-40 right-8 w-5 h-2"}`}></div>
        <div className={`absolute bg-[#FFCC00] ${animateSpins["2"]} ${parentWidth > 310 ? "bottom-96 right-48 w-10 h-5" : "bottom-12 left-36 w-5 h-2"}`}></div>
      </div>
    </section>
  )
}

export default InvitationCard;