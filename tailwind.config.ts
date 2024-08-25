import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";


const config: Config = {
	content: ["./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
      keyframes: {
        "border-spin": {
          "100%": {
            transform: "rotate(360deg)",
          },
        },
      },
      animation: {
        "border-spin": "border-spin 6s linear infinite"
      },
      screens: {
        'xs': '580px',
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        lora: ['var(--font-lora)'],
        newTegomin: ['var(--font-new-tegomin)'],
        ruluko: ['var(--font-ruluko)'],
        gentiumBookPlus: ['var(--font-gentium-book-plus)'],
        asset: ['var(--font-asset)'],
        mysteryQuest: ['var(--font-mystery-quest)'],
        stalemate: ['var(--font-stalemate)'],
        fontdinerSwanky: ['var(--font-fontdiner-swanky)'],
        mcLaren: ['var(--font-mclaren)'],
        imFellEnglishSC: ['var(--font-im-fell-english-sc)'],
        libreFranklin: ['var(--font-libre-franklin)'],
        merriweatherSans: ['var(--font-merriweather-sans)'],
        alegreya: ['var(--font-alegreya)'],
        dancingScript: ['var(--font-dancing-script)'],
        anton: ['var(--font-anton)'],
        francoisOne: ['var(--font-francois-one)'],
      }
    },
	},
	plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'auto-fill': (value) => ({
            gridTemplateColumns: `repeat(auto-fill, minmax(min(${value}, 100%), 1fr))`,
          }),
          'auto-fit': (value) => ({
            gridTemplateColumns: `repeat(auto-fit, minmax(min(${value}, 100%), 1fr))`,
          }),
        },
        {
          values: theme('width', {}),
        }
      )
    })]
};
export default config;

