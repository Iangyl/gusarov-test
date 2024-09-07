/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'snowflake-silk': 'var(--snowflake-silk-col)',
        'smokey-slate': 'var(--smokey-slate-col)',
        'moonlit-charcoal': 'var(--moonlit-charcoal-col)',
        'midnight-ink': 'var(--midnight-ink-col)',
        'midnight-moss': 'var(--midnight-moss-col)',
        'sunset-ember': 'var(--sunset-ember-col)',
        'peach-blossom': 'var(--peach-blossom-col)',
        'ruby-red': 'var(--ruby-red-col)',
        'sky-blue': 'var(--sky-blue-col)',
        'ocean-breeze': 'var(--ocean-breeze-col)',
      },
      boxShadow: {
        'focus-ring': '0px 0px 0px 4px',
      }
    },
  },
  plugins: [],
};
