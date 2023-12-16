import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
       
      },
      colors: {
        primary: "#1A9C9C",
        black: "#1E1E1E",
        highlight: "#95E3E3",
        gray: "#878787",
      },
    },
  },
  plugins: [],
};
export default config;
