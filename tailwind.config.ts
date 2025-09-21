// import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/preline/dist/*.js",
  ],
  darkMode: ["class"],
  important: true,
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        md: "1rem",
        lg: "1rem",
        xl: "3rem",
        "2xl": "8rem",
      },
    },

    fontFamily: {
      dm: ['"DM Sans", sans-serif'],
    },

    extend: {
      colors: {
        primary: "#8e95a3",
        primaryDark: "#6b7280",
        secondary: "#191A15",
        dark: "#212121",
        light: "#747474",
        black: "#000000",
        muted: "#707070",
        // APW Brand Colors (from documentation)
        "apw-manatee": "#8e95a3",
        "apw-gray-chateau": "#d7dadf",
        "apw-mid-gray": "#6b7280",
        "apw-gold-drop": "#e2b500",
        "apw-gradient-start": "#d7dadf",
        "apw-gradient-end": "#8e95a3",
      },

      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },

      spacing: {
        0.75: "0.1875rem",
        3.25: "0.8125rem",
      },

      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        999: "999",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("preline/plugin")],
};
