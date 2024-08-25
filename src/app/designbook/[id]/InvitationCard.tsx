"use client";

import React, { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  lora,
  newTegomin,
  ruluko,
  gentiumBookPlus,
  asset,
  mysteryQuest,
  stalemate,
  fontdinerSwanky,
  mcLaren,
  imFellEnglishSC,
  libreFranklin,
  merriweatherSans,
  alegreya,
  dancingScript,
  anton,
  francoisOne
} from "../../../styles/fonts";

const InvitationCard = () => {
  const [parentWidth, setParentWidth] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (ref.current) {
      setParentWidth(ref.current.offsetWidth);
    }
  },[])
  return (
    <section className={`${stalemate.variable} font-stalemate relative bg-[#4682B4] w-full h-full`}>
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
      <div ref={ref} className="absolute top-4 left-10 bg-[#333] w-1/4 h-4/5 opacity-90">
        <p className={`text-white ${parentWidth > 100 ? "px-10 text-[120px]" : "px-3 text-[42px]"}`}>It's a wild tea party!</p>
      </div>
    </section>
  )
}

export default InvitationCard;