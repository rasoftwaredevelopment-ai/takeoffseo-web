import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: "#F7F1E8",
          50: "#FFFDF8",
          100: "#F7F1E8",
          200: "#E8DCC8",
          300: "#D2C4AE",
        },
        ink: {
          DEFAULT: "#141210",
          muted: "#3D3830",
          soft: "#6A6358",
        },
        navy: {
          DEFAULT: "#0B1A2B",
          700: "#16324C",
          800: "#071320",
        },
        forest: {
          DEFAULT: "#1A6A48",
          600: "#228056",
          800: "#0E3A28",
        },
        copper: {
          DEFAULT: "#C9843A",
          600: "#9A5F2C",
        },
        line: "#D0C3AE",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        display: [
          "clamp(2.85rem, 8vw, 6.15rem)",
          { lineHeight: "0.98", letterSpacing: "-0.04em" },
        ],
      },
      maxWidth: {
        site: "80rem",
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
