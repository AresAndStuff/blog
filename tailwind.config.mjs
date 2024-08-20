/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "primary-dark": {
          light: "#c5beb9",
          DEFAULT: "#2b2935",
          dark: "#2b2935",
        },
        primary: {
          light: "#f4eee0",
          DEFAULT: "#413d4d",
          dark: "#413d4d",
        },
        neutral: {
          DEFAULT: "#756e77",
        },
        "secondary-dark": {
          light: "#2b2935",
          DEFAULT: "#c5beb9",
          dark: "#c5beb9",
        },
        secondary: {
          light: "#413d4d",
          DEFAULT: "#f4eee0",
          dark: "#f4eee0",
        },
      },
    },
  },
  plugins: [],
};
