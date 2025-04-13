"use client";

import React, { useLayoutEffect, useRef, useState } from 'react';

type Pictures = {
  name: string;
  ref: React.RefObject<HTMLHeadingElement>;
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
    { name: "Nature", ref: refs.natureRef },
    { name: "Animals", ref: refs.animalsRef },
    { name: "Town", ref: refs.townRef },
    { name: "Foods", ref: refs.foodsRef },
    { name: "Interior", ref: refs.interiorRef },
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
    <div ref={ref}>
      <section className='m-10'>
        <div className='flex items-center my-5 gap-2'>
          {pictures.map((picture) => (
            <button
              key={picture.name}
              onClick={() => handleScroll(picture.ref)}
              className='p-2 px-10 border border-gray-400 rounded'>{picture.name}
            </button>
          ))}
        </div>
      </section>
      <section>
        {pictures.map((picture) => (
          <h2
            key={picture.name}
            ref={picture.ref}
            className=''>{picture.name}
          </h2>
        ))}
      </section>
    </div>
  )
};

export default SmoothScroll;
