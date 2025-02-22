import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        neutral: {
          900: "#12131A",
          800: "#21222C",
          700: "#2A2B37",
          600: "#404254",
          200: "#E4E4EF",
          100: "#F2F2F7",
          0: "FFFFFF",
        },
        purple: {
          400: "#D3A0FA",
          500: "#C27CF8",
        },
        yellow: {
          500: "#FF9F00",
        },
        orange: {
          800: "#DA3701",
          500: "#FE8159 ",
        },
      },
      fontSize: {
        "preset-1": ["64px", { lineHeight: "100%", letterSpacing: "-1px" }],
        "preset-1-mobile": [
          "40px",
          { lineHeight: "100%", letterSpacing: "-1px", fontWeight: "bold" },
        ],
        "preset-2": ["24px", { lineHeight: "130%", letterSpacing: "-1px" }],
        "preset-3": ["20px", { lineHeight: "140%", letterSpacing: "-0.6px" }],
        "preset-4": ["16px", { lineHeight: "130%", letterSpacing: "-0.6px" }],
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"], // Matches the global CSS
      },
    },
  },
  plugins: [],
} satisfies Config;
