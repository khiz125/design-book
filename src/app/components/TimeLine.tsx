"use client";

import React, { useLayoutEffect, useRef, useState } from 'react';
import { FONTS } from "../components/constants/fonts";

const TimeLine = () => {
  const [parentWidth, setParentWidth] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  useLayoutEffect(() => {
    if (ref.current) {
      console.log(ref.current.offsetWidth)
      setParentWidth(ref.current.offsetWidth);
    }
  }, []);
  return (
    <div ref={ref} className={`w-full hidden-scrollbar`}>
      <MessageBox parentWidth={parentWidth} />
      <MessageBox parentWidth={parentWidth} />
      <MessageBox parentWidth={parentWidth} />
    </div>
  )
}

export default TimeLine;

type MessageBoxProps = {
  parentWidth: number
}
const MessageBox: React.FC<MessageBoxProps> = ({ parentWidth }) => {
  const fonts = FONTS;
  return (
      <article className={`flex mt-2 ${parentWidth < 310 ? "h-20" : "h-[150px]"} px-2 justify-center border-b border-gray-300 ${fonts[11].font.className} font-${fonts[11].name}`}>
        <div className="flex h-full">
          <figure className={`${parentWidth < 310 ? "text-[10px] transform scale-50" : "max-w-1 mx-10 my-2"}`}>icon</figure>
          <div className={`my-2 w-full ${parentWidth ? "h-20" : "h-[300px]"}`}>
            <div className='flex items-center w-full'>
              <p className={`${parentWidth < 310 ? "text-[10px] transform scale-50 origin-bottom" : "w-36"}`}>handle name</p>
              <p className={`${parentWidth < 310 ? "text-[10px] transform scale-50 origin-bottom" : "w-24"}`}>time stamp</p>
            </div>
            <p className={`${parentWidth < 310 ? 
              "text-[10px] transform scale-50 origin-top my-2 whitespace-pre-wrap line-clamp-2 truncate"
              : "whitespace-pre-wrap line-clamp-3 truncate"}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea obcaecati doloribus numquam distinctio natus esse asperiores minus commodi quaerat! Itaque fugiat ab enim velit optio reprehenderit amet doloremque voluptatem temporibus?
            </p>
            <figure className='flex justify-end w-full mt-2 pr-4'></figure>
          </div>
        </div>
      </article>
  )
}