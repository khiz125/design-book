import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";


const config: Config = {
	content: ["./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {},
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

