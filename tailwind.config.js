/** @type {import("tailwindcss").Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }

      "3xl": "1920px",
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      base: "#0891b2",
      active: "#06b6d4",
      white: "#ffffff",
      black: "#000000",
      neutral: {
        800: "#262626",
      },
      gray: {
        50: "#fafafa",
        100: "#f3f4f6",
        200: "#e5e7eb",
        300: "#d1d5db",
        400: "#9ca3af",
        500: "#6b7280",
        600: "#4b5563",
        700: "#374151",
        800: "#1f2937",
        900: "#111827",
      },
      zinc: {
        100: "#fafafa",
        200: "#f4f4f5",
        300: "#e4e4e7",
        400: "#a1a1aa",
        500: "#71717a",
        600: "#52525b",
        700: "#3f3f46",
        800: "#27272a",
        900: "#18181b",
        950: "#09090b",
      },
      red: {
        500: "#ef4444",
      },
      sky: {
        600: "#0284c7",
      },
      violet: {
        800: "#5b21b6",
      },
    },
    extend: {},
  },
  plugins: [],
};
