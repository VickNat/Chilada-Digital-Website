import type { Config } from 'tailwindcss'

const config: Config = {
  purge: {
    content: [
      "./node_modules/flowbite-react/**/*.js",
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    options: {
      safelist: [
        'bg-chiladaBlue-100',
        'bg-chiladaBlue-200',
        'bg-chiladaPurple-100',
        'bg-chiladaPurple-200',
        'bg-chiladaBrown-100',
        'bg-chiladaBrown-200',
        'bg-chiladaGreen-100',
        'bg-chiladaGreen-200',
        'bg-chiladaYellow-100',
        'bg-chiladaYellow-200',
        'bg-chiladaRed-100',
        'bg-chiladaRed-200',
        'bg-chiladaOrange-100',
        'bg-chiladaOrange-200',
      ],
    },
  },
  content: [
    "./node_modules/flowbite-react/**/*.js",
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'heading': ['Poppins'],
      'body': ['Roboto'],
      'others': ['Open Sans'],
    },
    extend: {
      transitionDuration: {
        '2000': '2000ms',
      },
      transitionProperty: {
        'bg': 'background-color',
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-1500px)' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'chiladaSliderBg': "url('/internships 2.png')",
      },
      plugins: [
        require("flowbite/plugin")
      ],
      colors: {
        'chiladaWhite': {
          '100': '#BFBFBF',
          '200': "#FFFFFF",
        },
        'chiladaBlue': {
          '100': '#0A57AF',
          '200': "#094E99",
        },
        "chiladaPurple": {
          "100": "#6C3483", // Primary
          "200": "#4A235A"  // Secondary
        },
        "chiladaYellow": {
          "100": "#A89A3E", // Darker warm yellow
          "200": "#8C7C2E"  // Rich, deep yellow
        },
        "chiladaRed": {
          "100": "#A63D5B", // Slightly deeper primary
          "200": "#6D0F29"  // Slightly deeper secondary
        },
        "chiladaOrange": {
          "100": "#D89B50", // Deep, rich orange
          "200": "#B86D27"  // Darker, fruit-like orange
        },
        "chiladaGreen": {
          "100": "#2C6B2F", // Primary
          "200": "#1B4F29"  // Secondary
        },
        "chiladaBrown": {
          "100": "#8D5A2D", // Warm, rich brown reminiscent of classic vintage tones
          "200": "#6F3D22"  // Darker, deeper brown for a more classic and sophisticated look
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-transitions')(),
  ],
}
export default config
