import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          charcoal: "#1c1917",
          warm: "#292524",
          espresso: "#44403c",
          coral: "#e85d4c",
          terracotta: "#c45c3e",
          gold: "#c9a227",
          cream: "#faf7f2",
          blush: "#f5ebe6",
          mist: "#ede8e3",
          paper: "#fdfcfa",
        },
        cv: {
          ink: "#1c1917",
          body: "#44403c",
          muted: "#78716c",
          line: "#d6d3d1",
        },
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        playfair: ["var(--font-display)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
