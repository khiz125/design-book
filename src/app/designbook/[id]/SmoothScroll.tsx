"use client";

import React, { useLayoutEffect, useRef, useState } from 'react';
import Image from 'next/image';

type Pictures = {
  name: string;
  ref: React.RefObject<HTMLHeadingElement>;
  images: string[]
}

const SmoothScroll: React.FC = () => {
  const [parentWidth, setParentWidth] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const refs: { [key: string]: React.RefObject<HTMLHeadingElement> } = {
    natureRef: useRef<HTMLHeadingElement>(null),
    animalsRef: useRef<HTMLHeadingElement>(null),
    townRef: useRef<HTMLHeadingElement>(null),
    foodsRef: useRef<HTMLHeadingElement>(null),
    interiorRef: useRef<HTMLHeadingElement>(null),
  }
  const pictures: Pictures[] = [
    {
      name: "Nature", ref: refs.natureRef, images: [
        "https://photosku.com/photo/images/s/p00/00386.jpg",
        "https://photosku.com/photo/images/s/p00/00385.jpg",
        "https://photosku.com/photo/images/s/p06/06419.jpg"
      ]
    },
    { name: "Animals", ref: refs.animalsRef, images: [
      "https://photosku.com/photo/images/s/p02/02702.jpg",
      "https://photosku.com/photo/images/s/p05/05741.jpg",
      "https://photosku.com/photo/images/s/p03/03223.jpg"
    ] },
    { name: "Town", ref: refs.townRef, images: [
      "https://photosku.com/photo/images/s/p06/06654.jpg",
      "https://photosku.com/photo/images/s/p00/00655.jpg",
      "https://photosku.com/photo/images/s/p06/06635.jpg"
    ] },
    { name: "Foods", ref: refs.foodsRef, images: [
      "https://photosku.com/photo/images/s/p04/04709.jpg",
      "https://photosku.com/photo/images/s/p06/06576.jpg",
      "https://photosku.com/photo/images/s/p05/05293.jpg"
    ] },
    { name: "Interior", ref: refs.interiorRef, images: [
      "https://photosku.com/photo/images/s/p06/06714.jpg",
      "https://photosku.com/photo/images/s/p06/06571.jpg",
      "https://photosku.com/photo/images/s/p00/00244.jpg"

    ] },
  ]

  const handleScroll = (pictureRef: React.RefObject<HTMLHeadingElement>) => {
    if (pictureRef.current) {
      pictureRef.current.scrollIntoView({
        behavior: "smooth"
      })
    }
  }
  useLayoutEffect(() => {
    if (ref.current) {
      setParentWidth(ref.current.offsetWidth);
    }
  }, []);
  return (
    <div ref={ref} className='m-10'>
      <section>
        <div className={`${parentWidth > 310 ? "flex items-center justify-between" : "flex justify-center"} my-5 gap-2`}>
          {pictures.map((picture) => (
            <button
              key={picture.name}
              onClick={() => handleScroll(picture.ref)}
              className={`${parentWidth > 310 ? "p-2 px-10 border border-gray-400" : "p-1 text-xs border border-gray-400"} hover:bg-gray-200 duration-500 rounded`}>{picture.name}
            </button>
          ))}
        </div>
      </section>
      <section className={`${parentWidth > 310 ? "flex flex-col" : "flex flex-col justify-center"} gap-2`}>
        {pictures.map((picture) => (
          <div key={picture.name}>
            <h2
              key={picture.name}
              ref={picture.ref}
              className='font-bold'>{picture.name}
            </h2>
            <div className='flex items-center justify-center gap-4'>
              {picture.images.map(image => (
                <figure className='relative overflow-hiddenrelative w-64 h-40 overflow-hidden' key={image}>
                  <Image
                    src={image}
                    alt="nature"
                    unoptimized
                    objectFit="cover"
                    fill              
                  />
                </figure>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  )
};

export default SmoothScroll;
