import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./app/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        teal: "#0F3A47",
        "teal-deep": "#0A2832",
        champagne: "#C9A87C",
        cream: "#F7F2EA",
        sage: "#94A89A",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        body: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
      },
    },
  },
  plugins: [],
}

export default config
