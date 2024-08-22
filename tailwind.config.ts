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
        "chiladaBrown": {
          "100": "#8D5A2D", // Warm, rich brown reminiscent of classic vintage tones
          "200": "#6F3D22"  // Darker, deeper brown for a more classic and sophisticated look
        },
        "chiladaGray": {
          "100": "#464646", // Lighter gray
          "200": "#A9A9A9", // Darker gray
          "300": "#FFFFFF"  // Text
        },
        "chiladaPurple": {
          "100": "#7e77b2", // Primary
          "200": "#B6AEDD",  // Secondary
          "300": "#FFFFFF"  // Text
        },
        "chiladaBeige": {
          "100": "#b0aa74", // Primary
          "200": "#E3DCB4",  // Secondary
          "300": "#2E2E2E"  // Text
        },
        "chiladaTeal": {
          "100": "#7c958d", // Primary
          "200": "#AFC4B9",  // Secondary
          "300": "#FFFFFF"  // Text
        },
        "chiladaRose": {
          "100": "#a17e8b", // Primary
          "200": "#D1A5AE",  // Secondary
          "300": "#FFFFFF"  // Text
        },
        "chiladaGreen": {
          "100": "#8ba46f", // Primary
          "200": "#C1D1A7",  // Secondary
          "300": "#2E2E2E"  // Text
        },
        "chiladaBlue": {
          "100": "#83a6bf", // Primary
          "200": "#B7D1E2",  // Secondary
          "300": "#FFFFFF"  // Text
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-transitions')(),
  ],
}
export default config
