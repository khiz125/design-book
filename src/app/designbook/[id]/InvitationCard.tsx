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
    <section className={`${parentWidth < 310 && `${stalemate.className}`} ${parentWidth < 310 && "font-stalemate"} w-full h-full`}>
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
      <div ref={ref} className={`relative bg-[#4682B4] w-full ${parentWidth > 310 ? "h-full" : "h-full"
        } ${parentWidth > 310 && `${fonts[index].font.className} font-${fonts[index].name}`
        }`}>
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
          <p className={`text-white ${parentWidth > 310 ? "px-10 text-[100px]" : "px-3 text-[42px]"}`}>It's <br />a <br />wild <br />tea <br />party!</p>
        </div>
      </div>
    </section>
  )
}

export default InvitationCard;