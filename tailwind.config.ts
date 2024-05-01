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
        'bg-chiladaBrown-200'
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
      animation:{
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes:{
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
          '100': '#0A57A4',
          '200': "#094E93",
        },
        'chiladaPurple': {
          '100': '#7057A5',
          '200': '#4C2D8E'
        },
        'chiladaYellow': {
          '100': '#CBC95B',
          '200': '#BEBB32'
        },
        'chiladaRed': {
          '100': '#8E3F5D',
          '200': '#720F34',
        },
        'chiladaOrange': {
          '100': '#E4AD52',
          '200': '#DD9827',
        },
        'chiladaGreen': {
          '100': '#68B571',
          '200': '#42A34D',
        },
        'chiladaBrown': {
          '100': '#805951',
          '200': '#602F26',
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-transitions')(),
  ],
}
export default config
