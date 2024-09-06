/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        "snowflake-silk": "var(--snowflake-silk-col)",
        "smokey-slate": "var(--smokey-slate-col)",
      }
    },
  },
  plugins: [],
};
