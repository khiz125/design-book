import React from "react";
import Image from "next/image";

export const InvitationCard = () => {
  return (
    <section className="relative bg-[#4682B4] w-full h-full">
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
      <div className="absolute top-4 left-10 bg-[#333] w-1/5 h-1/2 opacity-90">
        <p className="text-white p-2">It's a wild tea party!</p>
      </div>
    </section>
  )
}
