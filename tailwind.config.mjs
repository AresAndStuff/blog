/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary_dark: 'var(--color_primary_dark)',
        primary: 'var(--color_primary)',
        neutral: 'var(--color_neutral)',
        secondary_dark: 'var(--color_secondary_dark)',
        secondary: 'var(--color_secondary)',
      },
    },
  },
  plugins: [],
};
