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
          navy: "#0f2744",
          deep: "#0a1a2e",
          ocean: "#1a4d7c",
          sky: "#2d7ab8",
          accent: "#00b4d8",
          glow: "#48cae4",
          slate: "#64748b",
          mist: "#e8eef4",
          paper: "#fafbfc",
        },
        cv: {
          ink: "#0c1220",
          body: "#334155",
          muted: "#64748b",
          line: "#cbd5e1",
        },
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      boxShadow: {
        cv: "0 25px 50px -12px rgba(15, 39, 68, 0.25)",
        card: "0 1px 0 0 rgba(15, 39, 68, 0.06), 0 4px 16px -4px rgba(15, 39, 68, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
