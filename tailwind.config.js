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
  			xl: '1184px'
  		}
  	},
  	extend: {
  		maxWidth: {
  			'1396px': '1396px',
  			'10xl': '1536px'
  		},
  		gridTemplateColumns: {
  			'auto-fill-200': 'repeat(auto-fill, minmax(200px, 1fr))',
  			'auto-fill-300': 'repeat(auto-fill, minmax(300px, 1fr))',
  			'auto-fill-400': 'repeat(auto-fill, minmax(400px, 1fr))',
  			'auto-fill-220': 'repeat(auto-fill, minmax(220px, 1fr))',
  			'auto-fill-250': 'repeat(auto-fill, minmax(250px, 1fr))',
  			'auto-fill-150': 'repeat(auto-fill, minmax(150px, 1fr))'
  		},
  		fontFamily: {
  			roboto: 'Roboto',
  			sans: 'DM Sans'
  		},
  		fontSize: {
  			base: '16px',
  			standard: '14px'
  		},
  		colors: {
  			primary: '#075056',
  			'primary-light': '#E4EEF0',
  			'primary-dark': '#16232A',
  			 secondary: '#619B7D',
  			'secondary-light': '#619b7d1a',
  			'primary-white': '#F5F5F5',
  			'primary-black': '#1A1A1A',
  			'secondary-black': '#575757',
				background: '#ffffff',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [nextui(), require("tailwindcss-animate")],
};
