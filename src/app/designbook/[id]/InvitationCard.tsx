"use client";

import React, { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { stalemate } from "../../../styles/fonts";

import { FONTS } from "../../components/constants/fonts";

const InvitationCard = () => {
  const [parentWidth, setParentWidth] = useState(0);
  const fonts = FONTS;
  const [index, setIndex] = useState<number>(6);


  const ref = useRef<HTMLDivElement | null>(null);
  useLayoutEffect(() => {
    if (ref.current) {
      setParentWidth(ref.current.offsetWidth);
    }
  }, [])
  return (
    <section className={`${parentWidth < 100 && `${stalemate.variable}`} ${parentWidth < 100 && "font-stalemate"} w-full h-full`}>
      {parentWidth > 100 && (
        <div className={`w-full h-[10%]`}>
          {FONTS.map((font, i) => (
            <button 
              key={font.name} 
              className={`${font.font.variable} font-${font.name} p-2 m-2 border border-gray-500`}
              onClick={() => setIndex(i)}
            >
              {font.name}
            </button>
          ))}
        </div>
      )}
      <div className={`relative bg-[#4682B4] w-full ${
          parentWidth > 100 ? "h-[90%]" : "h-full"
          } ${
            parentWidth > 100 && `${fonts[index].font.variable} font-${fonts[index].name}`
          }`}>
        <div className="absolute top-10 left-4 bg-[#FFCC00] w-11/12 h-1/3">
          <figure className="relative top-10 left-1/3 bg-white w-7/12 h-2/3">
            <Image
              src="/images/img/tea_set.png"
              alt="Picture of tes set"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
              priority
            />
          </figure>
        </div>
        <div ref={ref} className="absolute top-4 left-10 bg-[#333] w-2/7 h-4/5 opacity-90">
          <p className={`text-white ${parentWidth > 100 ? "px-10 text-[100px]" : "px-3 text-[42px]"}`}>It's <br />a <br />wild <br />tea <br />party!</p>
        </div>
      </div>
    </section>
  )
}

export default InvitationCard;