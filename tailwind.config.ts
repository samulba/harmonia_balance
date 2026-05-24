import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./app/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        teal: "#0F3A47",
        "teal-deep": "#0A2832",
        "teal-soft": "#2B5563",
        champagne: "#C9A87C",
        "champagne-pale": "#E8D5B5",
        "champagne-deep": "#A68A5F",
        cream: "#F7F2EA",
        "cream-light": "#FDFAF3",
        "cream-warm": "#EFE6D4",
        sage: "#94A89A",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
      },
    },
  },
  plugins: [],
}

export default config
