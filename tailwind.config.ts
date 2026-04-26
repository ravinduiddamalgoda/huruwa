import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        md: "2rem",
        lg: "3rem",
      },
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        muted: "var(--muted)",
        "muted-foreground": "var(--muted-foreground)",
        border: "var(--border)",
        surface: "var(--surface)",
        brand: {
          50: "#f0f7ff",
          100: "#e0efff",
          200: "#bbdcff",
          300: "#85c1ff",
          400: "#479dff",
          500: "#1a7bff",
          600: "#0a5eea",
          700: "#0a4abf",
          800: "#0e3f99",
          900: "#11377a",
          950: "#0b2354",
        },
        accent: {
          50: "#fff5f0",
          100: "#ffe4d6",
          200: "#ffc4a3",
          300: "#ff9c66",
          400: "#ff7438",
          500: "#ff5a1f",
          600: "#f04207",
          700: "#c63206",
          800: "#9c2a0d",
          900: "#7e2710",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sinhala: ["var(--font-sinhala)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(10,94,234,0.08), 0 20px 60px -20px rgba(10,94,234,0.35)",
        soft: "0 4px 24px -8px rgba(15, 23, 42, 0.08)",
        "card": "0 1px 2px rgba(15,23,42,0.04), 0 8px 24px -12px rgba(15,23,42,0.12)",
        "card-hover": "0 4px 12px rgba(15,23,42,0.08), 0 24px 48px -16px rgba(15,23,42,0.18)",
      },
      backgroundImage: {
        "grid-fade":
          "radial-gradient(circle at 50% 0%, rgba(26,123,255,0.18), transparent 60%)",
        "mesh":
          "radial-gradient(at 20% 10%, rgba(26,123,255,0.18) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(255,90,31,0.12) 0px, transparent 50%), radial-gradient(at 0% 90%, rgba(132,204,255,0.18) 0px, transparent 50%), radial-gradient(at 90% 80%, rgba(10,74,191,0.12) 0px, transparent 50%)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      animation: {
        "fade-in": "fadeIn 0.7s ease-out both",
        "float": "float 6s ease-in-out infinite",
        "shine": "shine 8s linear infinite",
        "blob": "blob 16s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shine: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        blob: {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(30px,-20px) scale(1.05)" },
          "66%": { transform: "translate(-20px,20px) scale(0.95)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
