import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: "#F6F1E8",
          50: "#FFFCF7",
          100: "#F6F1E8",
          200: "#EBE3D4",
          300: "#D8CFBE",
        },
        ink: {
          DEFAULT: "#1A1814",
          muted: "#5C564C",
          soft: "#7A7368",
        },
        navy: {
          DEFAULT: "#12263A",
          700: "#1C3854",
          800: "#0E1D2C",
        },
        forest: {
          DEFAULT: "#1F4D3A",
          600: "#27624A",
          800: "#16382B",
        },
        copper: {
          DEFAULT: "#A36B35",
          600: "#8A592C",
        },
        line: "#D4CBBA",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        site: "72rem",
      },
      boxShadow: {
        card: "0 1px 0 rgba(26,24,20,0.04), 0 12px 32px -16px rgba(18,38,58,0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
