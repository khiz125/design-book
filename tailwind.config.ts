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
        lora: ['var(--font-lora)', 'sans-serif'],
        newTegomin: ['var(--font-new-tegomin)', 'serif'],
        ruluko: ['var(--font-ruluko)', 'sans-serif'],
        gentiumBookPlus: ['var(--font-gentium-book-plus)', 'serif'],
        asset: ['var(--font-asset)', 'sans-serif'],
        mysteryQuest: ['var(--font-mystery-quest)', 'cursive'],
        stalemate: ['var(--font-stalemate)', 'cursive'],
        fontdinerSwanky: ['var(--font-fontdiner-swanky)', 'cursive'],
        mcLaren: ['var(--font-mclaren)', 'sans-serif'],
        imFellEnglishSC: ['var(--font-im-fell-english-sc)', 'serif'],
        libreFranklin: ['var(--font-libre-franklin)', 'sans-serif'],
        merriweatherSans: ['var(--font-merriweather-sans)', 'sans-serif'],
        alegreya: ['var(--font-alegreya)', 'serif'],
        dancingScript: ['var(--font-dancing-script)', 'cursive'],
        anton: ['var(--font-anton)', 'sans-serif'],
        francoisOne: ['var(--font-francois-one)', 'sans-serif'],
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

