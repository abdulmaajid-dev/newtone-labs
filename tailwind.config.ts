import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0A",
        cream: "#F2EBE0",
        blood: "#E63946",
        bone: "#FFFFFF",
        whisper: "#8A857E",
      },
      fontFamily: {
        display: ["var(--font-display)", "Anton", "Impact", "sans-serif"],
        romance: ["var(--font-romance)", "Playfair Display", "Georgia", "serif"],
        body: ["var(--font-body)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "ui-monospace", "monospace"],
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        "in-out-expo": "cubic-bezier(0.87, 0, 0.13, 1)",
        "out-quart": "cubic-bezier(0.25, 1, 0.5, 1)",
      },
      keyframes: {
        revealArrow: {
          '0%': { width: '0px', 'max-width': '0px', opacity: '0' },
          '20%': { width: 'auto', 'max-width': '40px', opacity: '1' },
          '75%': { width: 'auto', 'max-width': '40px', opacity: '1' },
          '100%': { width: '0px', 'max-width': '0px', opacity: '0' },
        },
      },
      maxWidth: {
        page: "1440px",
      },
      letterSpacing: {
        eyebrow: "0.12em",
      },
    },
  },
  plugins: [],
};

export default config;
