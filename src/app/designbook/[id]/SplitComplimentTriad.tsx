"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { GridColorCodePreset } from '@/app/components/constants/colorParretPreset';
import { useDebounce } from '@/utils/useDebounce';

const SplitComplimentTriad = () => {
  /* local state */
  const [baseColor, setBaseColor] = useState("#ff3366");
  const [bgColor, setBgColer] = useState("#f0f8ff");
  const [firstSplited, setFirstSplited] = useState("#ff9999");
  const [secondSplited, setSecondSplited] = useState("#ff99cc");
  const [parentWidth, setParentWidth] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const styles = {
    map: `relative mx-2 border border-gray-300 w-[80%] h-full rounded-lg`,
    hokkaido: 'absolute w-[10%] h-[16%] border border-gray-300 ' +
      '[clip-path:polygon(45%_33%,100%_79%,37%_100%,0%_71%)]', // 北海道
    honshu: 'absolute w-[12%] h-[20%] border border-gray-300 ' +
      '[clip-path:polygon(52%_0%,100%_22%,54%_100%,0%_83%)]', // 本州
    kyushu: 'absolute w-[12%] h-[10%] border border-gray-300 ' +
      '[clip-path:polygon(54%_22%,89%_38%,59%_99%,27%_85%)]', // 九州
    asia: 'absolute w-[64%] h-[45%] border border-gray-300 ' +
      '[clip-path:polygon(52%_12%,100%_38%,73%_66%,36%_67%,32%_37%)]',
    northAmerica: 'absolute w-[34%] h-[40%] border border-gray-300 ' +
      '[clip-path:polygon(9%_18%,80%_6%,84%_46%,53%_77%,63%_100%,7%_37%)]',
    southAmerica: 'absolute w-[26%] h-[34%] border border-gray-300 ' +
      '[clip-path:polygon(56%_13%,93%_47%,60%_100%,45%_53%,29%_31%)]',
    africa: 'absolute w-[34%] h-[40%] border border-gray-300 ' +
      '[clip-path:polygon(13%_13%,64%_17%,89%_37%,64%_100%,37%_54%,4%_45%)]',
  }
  /* functions */
  const debouncedColor = useDebounce((newColor: string) => {
    setBaseColor(newColor);
    getSplitComplementaryColors(newColor);
    setBgColer(getOppositeColor(newColor));
  }, 500);
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
      h = s = 0;
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
  const isLightColor = (color: string): boolean => {
    const hexToRgb = (hex: string) => {
      const bigint = parseInt(hex.slice(1), 16);
      return {
        r: (bigint >> 16) & 255,
        g: (bigint >> 8) & 255,
        b: bigint & 255,
      };
    };
    const rgb = hexToRgb(color);
    const { r, g, b } = rgb;
    const brightness = 0.299 * r + 0.587 * g + 0.114 * b;
    return brightness > 186;
  };
  const getOppositeColor = (color: string): string => {
    const hexToRgb = (hex: string) => {
      const bigint = parseInt(hex.slice(1), 16);
      return {
        r: (bigint >> 16) & 255,
        g: (bigint >> 8) & 255,
        b: bigint & 255,
      };
    };
    const rgb = hexToRgb(color);
    const { r, g, b } = rgb;
    if (isLightColor(color)) {
      return `#${((1 << 24) + (255 - r << 16) + (255 - g << 8) + (255 - b)).toString(16).slice(1)}`;
    } else {
      const newR = Math.min(255, Math.round(r + (255 - r) * 0.5));
      const newG = Math.min(255, Math.round(g + (255 - g) * 0.5));
      const newB = Math.min(255, Math.round(b + (255 - b) * 0.5));
      return `#${((1 << 24) + (newR << 16) + (newG << 8) + newB).toString(16).slice(1)}`;
    }
  };
  const handleSelectColor = (color: string) => {
    setBaseColor(color);
    getSplitComplementaryColors(color);
    setBgColer(getOppositeColor(color));
  }
  useLayoutEffect(() => {
    if (ref.current) {
      setParentWidth(ref.current.offsetWidth);
    }
  }, []);
  return (
    <section ref={ref} className="flex flex-col items-center my-10 w-full h-screen">
      {parentWidth > 310 ? (
        <div className='flex flex-col justify-center items-center'>
          <div className='w-full flex justify-center items-center'>
            <label htmlFor="color">base color: </label>
            <input
              name="color"
              type="color"
              style={{ border: 'none' }}
              value={baseColor}
              className={`w-20`}
              onChange={(e) => debouncedColor(e.target.value)}
            />
          </div>
        </div>
      ) : <></>}
      <div style={{ height: `${parentWidth > 310 ? "calc(100vh - 420px)" : "15%"}` }} className={`flex justify-center my-10 ${parentWidth < 310 && "items-center"} w-full`}>
        <div style={{ backgroundColor: bgColor }} className={`${styles.map}`}>
          <div className={styles.hokkaido} style={{ top: '30%', left: '50%', backgroundColor: baseColor }}></div>
          <div className={styles.honshu} style={{ top: '45%', left: '45%', backgroundColor: baseColor }}></div>
          <div className={styles.kyushu} style={{ top: '60%', left: '38%', backgroundColor: baseColor }}></div>
          <div className={styles.asia} style={{ top: '1%', left: '-10%', backgroundColor: firstSplited }}></div>
          <div className={styles.africa} style={{ top: '30%', left: '6%', backgroundColor: firstSplited }}></div>
          <div className={styles.northAmerica} style={{ top: '8%', left: '62%', backgroundColor: secondSplited }}></div>
          <div className={styles.southAmerica} style={{ top: '40%', left: '70%', backgroundColor: secondSplited }}></div>
        </div>
      </div>
      {parentWidth > 310 ? (
        <div className='flex flex-col justify-center items-center'>
          <div className={`w-full`}>
            {GridColorCodePreset.map((color, i) => (
              <button
                key={i}
                style={{ backgroundColor: color }}
                className={`py-2 px-3 m-2 border border-gray-300`}
                onClick={() => handleSelectColor(color)}
              />
            ))}
          </div>
        </div>
      ) : <></>}
    </section>
  )
}

export default SplitComplimentTriad;