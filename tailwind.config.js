/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    '*'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'aliceblue': '#f0f8ff',
      'cblack': '#09203f',
      'cblue': '#215985',
      'black': '#000000',
      'gray': '#f3f4f6',
      'lgray': '#9ca3af',
      'dgray': '#abaeb1',
      'acqa' : '#ccfbf1',
      'cgray': '#f3f3f3',
      'dgray': '#f3f3f3',
      'nbb': '#9b9696',
      'vfl': '#aaaaab',
      'abUscone': 'rgb(71 118 171 / 20%)',
      'abUsctwo': 'rgba(0, 97, 242, 0.1)',
      'mncone': 'rgb(39 122 215 / 20%)',
      'mnctwo': 'rgba(1, 74, 157, 0.1) 100%)',
      'resb': '#91bce0',
      'resbtwo': 'rgb(21, 32, 43)',
      'mncb': 'rgb(147, 212, 216)',
      'mncrc': 'rgb(21, 32, 43)',
      'faqa': '#626161'
    },
    minHeight: {
      'ch': '330px',
      'cb': '60px',
      'cdb': '32px',
      'auch': '520px',
      'dykc': '200px',
      'gpbh': '28px',
      'crc': '100px',
      'gpbc': '80px'
    },
    minWidth: {
      'dcw': '45%',
      'hrm': '300px',
      'ddc': '145px'
    }
  },
  plugins: [],
}
