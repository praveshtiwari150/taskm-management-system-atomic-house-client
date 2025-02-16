import type { Config } from "tailwindcss";
import { heroui } from "@heroui/react";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: {
          1: '#fdfefe', // Lightest
          2: '#fbfcfc',
          3: '#f7f9f9',
          4: '#f4f6f7',
          5: '#f0f3f4',  // default background color
          6: '#ecf0f1',
          7: '#d0d3d4',
          8: '#b3b6b7',
          9: '#979a9a',
          10: '#7b7d7d', // Darkest
        },
        dark: {
          1: '#eaecee', // Lightest shade (almost white)
          2: '#d5d8dc',
          3: '#abb2b9',
          4: '#808b96',
          5: '#2c3e50',
          6: '#2c3e50 ',
          7: '#273746',
          8: '#212f3d',
          9: '#1c2833',
          10: '#17202a', // Darkest shade default color
        },
        purple: {
          1: "#673ab7",
          2: "#ede7f6",
          3: "#d1c4e9",
          4 : "#b39ddb",
          5: "#9575cd",
          6: "#7e57c2",
          7: "#673ab7",
          8: "#5e35b1",
          9: "#512da8",
          10: "#4527a0",
          11: "#311b92",
        }
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()]
} satisfies Config;
