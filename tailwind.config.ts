import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#0a0a0f",
        secondary: "#111118",
        tertiary: "#16161f",
        "text-primary": "#e8e8f0",
        "text-secondary": "#a0a0b8",
        "accent-1": "#7c3aed",
        "accent-2": "#3b82f6",
        "accent-3": "#06b6d4",
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
