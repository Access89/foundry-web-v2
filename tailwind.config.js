/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */

const { nextui } = require('@nextui-org/react');

module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',

      screens: {
        xl: '1184px',
      },
    },
    extend: {
      maxWidth: {
        '1396px': '1396px',
      },
      gridTemplateColumns: {
        'auto-fill-200': 'repeat(auto-fill, minmax(200px, 1fr))',
        'auto-fill-300': 'repeat(auto-fill, minmax(300px, 1fr))',
        'auto-fill-400': 'repeat(auto-fill, minmax(400px, 1fr))',
        'auto-fill-220': 'repeat(auto-fill, minmax(220px, 1fr))',
        'auto-fill-250': 'repeat(auto-fill, minmax(250px, 1fr))',
        'auto-fill-150': 'repeat(auto-fill, minmax(150px, 1fr))',
      },
      fontFamily: {
        roboto: 'Roboto',
        sans: 'DM Sans',
      },
      fontSize: {
        base: '16px',
        standard: '14px',
      },

      colors: {
        // primary: 'rgb(45 97 69)',
        // primary: '#19232A',
        primary: '#075056',
        'primary-light': '#E4EEF0',
        'primary-dark': '#16232A',
        secondary: '#619B7D',
        'secondary-light': '#619b7d1a',
        'primary-white': '#F5F5F5',
        'primary-black': '#1A1A1A',
        'secondary-black': '#575757',
        background: '#ffffff',
        // background: '#EDF2EE',
      },
    },
  },
  plugins: [nextui()],
};
