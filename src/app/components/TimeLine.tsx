"use client";

import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import { FONTS, Pokemon, POKEMON_DATA } from "../components/constants";

const TimeLine = () => {
  const [parentWidth, setParentWidth] = useState(0);
  const genTimeLineItems = useMemo<Pokemon[]>(() => {
    const numbers = Array.from({ length: 12 }, (_, index) => index + 1);
    return numbers.map(n => POKEMON_DATA[n]).filter(pokemon => pokemon);
  }, []);
  const [cards, setCards] = useState<Pokemon[]>(genTimeLineItems);
  const ref = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visible, setVisible] = useState<boolean[]>(Array.from({ length: cards.length }, () => false));
  const generateNewCards = (count: number): Pokemon[] => {
    return Array.from({ length: count }, (_, i) => ({
      ...genTimeLineItems[i % genTimeLineItems.length]
    }))
  };

  const setRef = (index: number) => (el: HTMLDivElement | null) => {
    cardRefs.current[index] = el;
  }
  useEffect(() => {
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const index = cardRefs.current.indexOf(entry.target as HTMLDivElement);
          if (index !== -1) {
            if (entry.isIntersecting) {
              setVisible(prev => {
                const newVisible = [...prev];
                newVisible[index] = true;
                return newVisible;
              })
              if (index === cards.length - 1) {
                setCards(prev => [...prev, ...generateNewCards(10)])
              }
            } else {
              setVisible(prev => {
                const newVisible = [...prev];
                newVisible[index] = false;
                return newVisible;
              });
            }
          }
        });
      }, { threshold: 0.5 });
      cardRefs.current.forEach((ref) => {
        if (ref) {
          observer.observe(ref);
        }
      });
      return () => {
        cardRefs.current.forEach((ref) => {
          if (ref) {
            observer.unobserve(ref);
          }
        })
      }
    }
  }, [cards]);
  useLayoutEffect(() => {
    if (ref.current) {
      setParentWidth(ref.current.offsetWidth);
    }
  }, []);
  return (
    <div ref={ref} className="w-full h-full flex flex-col justify-center bg-black">
      <div className={`${parentWidth < 310 ? "h-72" : "h-2/3"} border rounded bg-white m-4 overflow-scroll hidden-scrollbar`}>
        {cards.map((pokemon, i) => {
          return (
            <div key={i} ref={setRef(i)} className={`w-full px-14  ${visible[i] ? 'animate-slideIn' : 'animate-slideOut'}`}>
              <div>hello: {visible[i] ? "yes" : "no"}</div>
              <MessageBox parentWidth={parentWidth} pokemon={pokemon} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TimeLine;

type MessageBoxProps = {
  parentWidth: number;
  pokemon: Pokemon;
};
const MessageBox: React.FC<MessageBoxProps> = ({ parentWidth, pokemon }) => {
  const fonts = FONTS;
  return (
    <article
      className={`flex mt-2 ${parentWidth < 310 ? "h-10" : "h-[120px]"} justify-center border border-gray-300 rounded ${fonts[11].font.className} font-${fonts[11].name}`}
    >
      <div className={`${parentWidth < 310 ? "" : "my-4"} flex mx-2`}>
        <figure
          className={`${parentWidth < 310 ? "text-[10px] transform scale-50" : "max-w-1 mx-10 my-2"}`}
        >
          <Image
            src={pokemon.image}
            alt="pokemon image"
            height={100}
            width={100}
          />
        </figure>
        <div
          className={`w-full flex flex-col ${parentWidth ? "h-full" : "h-[120px] mx-2"}`}
        >
          <div className={`flex items-center w-full ${parentWidth ? "h-full" : "h-[120px] mx-2"}`}>
            <p
              className={`${parentWidth < 310 ? "text-[10px]" : "w-36 font-bold text-xl text-gray-600"}`}
            >
              {pokemon.name}
            </p>
          </div>
          <div className="w-full">
            <p>
              {parentWidth > 310 && pokemon.description}
            </p>{" "}
          </div>
        </div>
      </div>
    </article>
  );
};
