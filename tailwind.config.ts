import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: "#F4EDE2",
          50: "#FFFDF8",
          100: "#F4EDE2",
          200: "#E7DCC9",
          300: "#D2C4AE",
        },
        ink: {
          DEFAULT: "#12100C",
          muted: "#3D3830",
          soft: "#6A6358",
        },
        navy: {
          DEFAULT: "#0B1A2B",
          700: "#16324C",
          800: "#071320",
        },
        forest: {
          DEFAULT: "#165C3F",
          600: "#1E7350",
          800: "#0E3A28",
        },
        copper: {
          DEFAULT: "#C17A3A",
          600: "#9A5F2C",
        },
        line: "#C9BBA6",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        display: [
          "clamp(2.6rem, 7vw, 5.4rem)",
          { lineHeight: "1.02", letterSpacing: "-0.035em" },
        ],
      },
      maxWidth: {
        site: "100rem",
      },
      boxShadow: {
        card: "0 1px 0 rgba(18,16,12,0.06), 0 18px 40px -20px rgba(11,26,43,0.28)",
        lift: "0 16px 40px -18px rgba(11,26,43,0.35)",
      },
      transitionTimingFunction: {
        punch: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
