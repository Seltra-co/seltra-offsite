import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          DEFAULT: "#158855",
          deep: "#0d5f3c",
        },
        seagreen: "#25A56F",
        charleston: "#272727",
        cultured: "#F8F8F8",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "brand-gradient":
          "radial-gradient(120% 120% at 85% 10%, #1c9c63 0%, #0f3f2a 45%, #0a1f16 100%)",
        "brand-gradient-dark":
          "radial-gradient(140% 140% at 10% 0%, #123c29 0%, #0a1c13 55%, #060f0a 100%)",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(0, 0, 0, 0.35)",
        "glow-sea": "0 0 0 1px rgba(37,165,111,0.35), 0 8px 30px rgba(37,165,111,0.15)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.55", filter: "drop-shadow(0 0 0px rgba(37,165,111,0.0))" },
          "50%": { opacity: "1", filter: "drop-shadow(0 0 26px rgba(37,165,111,0.55))" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        "float-slow": "float 11s ease-in-out infinite",
        pulseGlow: "pulseGlow 3.5s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
