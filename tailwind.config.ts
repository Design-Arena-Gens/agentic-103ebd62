import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-playfair)', 'serif'],
        body: ['var(--font-lato)', 'sans-serif']
      },
      colors: {
        charcoal: '#333333',
        alabaster: '#f9f9f9',
        amethyst: '#673ab7',
        gilded: '#ffd700'
      }
    }
  },
  plugins: []
};

export default config;
