"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { GridColorCodePreset } from '@/app/components/constants/colorParretPreset';
import { useDebounce } from '@/utils/useDebounce';

const UsingColors = () => {
  const [baseColor, setBaseColor] = useState("#ffffff");
  const [firstSplited, setFirstSplited] = useState("");
  const [secondSplited, setSecondSplited] = useState("");
  const [parentWidth, setParentWidth] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const debouncedColor = useDebounce((newColor: string) => setBaseColor(newColor), 500);
  const getSplitComplementaryColors = (baseColor: string) => {
    const hsl = hexToHSL(baseColor);
    const [fh, fs, fl] = [String((hsl[0] + 120) % 360), String(hsl[1]), String(hsl[2])];
    const [sh, ss, sl] = [String((hsl[0] + 240) % 360), String(hsl[1]), String(hsl[2])];

    setFirstSplited(`hsl(${fh},${fs}%,${fl}%)`);
    setSecondSplited(`hsl(${sh},${ss}%,${sl}%)`);
  }
  const hexToHSL = (hex: string): number[] => {
    let r = parseInt(hex.slice(1, 3), 16) / 255;
    let g = parseInt(hex.slice(3, 5), 16) / 255;
    let b = parseInt(hex.slice(5, 7), 16) / 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h: number = 0, s: number = 0, l = (max + min) / 2;

    if (max === min) {
      h = s = 0; // achromatic
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }
    return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
  }
  useEffect(() => {
    getSplitComplementaryColors(baseColor);
  }, [baseColor])
  useLayoutEffect(() => {
    if (ref.current) {
      setParentWidth(ref.current.offsetWidth);
    }
  }, []);
  return (
    <section ref={ref} className={`w-full h-full`}>
      {parentWidth > 310 ? (
        <div className='flex flex-col justify-center items-center'>
          <div className={`w-full`}>
            {GridColorCodePreset.map((color, i) => (
              <button
                key={i}
                style={{ backgroundColor: color }}
                className={`py-2 px-3 m-2 border border-gray-300`}
                onClick={() => setBaseColor(color)}
              />
            ))}

          </div>
          <div className='w-full flex justify-center'>
            <input
              type="color"
              style={{ border: 'none' }}
              value={baseColor}
              className={`w-20`}
              onChange={(e) => debouncedColor(e.target.value)}
            />
          </div>
        </div>
      ) : <></>}
      <div className={`flex justify-center items-center w-full h-full`}>
        <div className='flex justify-around items-center'>
          <div style={{ backgroundColor: baseColor }} className={`py-2 px-3 m-2 border border-gray-300`}>
            base
          </div>
          <div style={{ backgroundColor: firstSplited }} className={`py-2 px-3 m-2 border border-gray-300`}>
            first
          </div>
          <div style={{ backgroundColor: secondSplited }} className={`py-2 px-3 m-2 border border-gray-300`}>
            second
          </div>
        </div>
      </div>
    </section>
  )
}

export default UsingColors;