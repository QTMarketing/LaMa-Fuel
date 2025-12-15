import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF6B35", // Updated to gradient orange base color
        brand: "#FF6B35", // Updated to gradient orange base color
        "brand-dark-blue": "#1F2937", // Brand dark blue
        dark: "#1F2937", // Your brand dark blue
      },
      fontFamily: {
        // Source Sans 3 for body text, buttons, nav, forms, labels, etc.
        sans: ["var(--font-source-sans-3)", ...defaultTheme.fontFamily.sans],
        // Headings also use Source Sans 3 so the entire site is on one font
        heading: ["var(--font-source-sans-3)", ...defaultTheme.fontFamily.sans],
      },
      animation: {
        blob: "blob 8s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(40px, -60px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-30px, 30px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;

