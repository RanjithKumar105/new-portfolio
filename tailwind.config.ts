import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  lightMode: "class",
  theme: {
    extend: {
      colors: {
        bgPrimary: "#0a0a0f",
        bgSecondary: "#111118",
        bgTertiary: "#16161f",
        textPrimary: "#e8e8f0",
        textSecondary: "#a0a0b8",
        accent1: "#7c3aed",
        accent2: "#3b82f6",
        accent3: "#06b6d4",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        outfit: ["var(--font-outfit)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-accent": "linear-gradient(135deg, #7c3aed, #3b82f6, #06b6d4)",
      },
    },
  },
  plugins: [],
};

export default config;
