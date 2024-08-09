import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl":"1440px",
        "375": "375px",
        "425": "425px"
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
      },
      colors: {
        dark: "#000",
        light: "#FFF",
        primary: "#072D6B", 
        secondary: "#236DFF"
      },
      fontFamily: {
        aeonik: ["Aeonik", 'sans-serif'],
        inter: ["Inter", 'sans-serif'],
        gtwalsheimpro:["GT Walsheim Pro", 'sans-serif'],
        galanogrotesque: ["GalanoGrotesque-Medium",'sans-serif']
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config