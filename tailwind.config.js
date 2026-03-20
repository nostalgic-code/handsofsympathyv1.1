/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        claret: {
          DEFAULT: '#7f1734',
          dark: '#5a1025',
          light: '#9b2e4f',
          mist: 'rgba(127,23,52,0.08)',
        },
        cream: {
          DEFAULT: '#e8d8c5',
          dark: '#d4c4b1',
          light: '#f5ede3',
        },
        bg: '#fafaf8',
        fg: '#1a1a1a',
        muted: '#6b6b6b',
        border: 'rgba(0,0,0,0.08)',
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        body: ['var(--font-dm)', 'system-ui', 'sans-serif'],
      },
      transitionTimingFunction: {
        expo: 'cubic-bezier(0.76, 0, 0.24, 1)',
        out4: 'cubic-bezier(0.25, 1, 0.5, 1)',
      },
    },
  },
  plugins: [],
}
