/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3sl': '2px 2px 4px #898D8F, -2px -2px 4px #898D8F',
      }
    },
    screens: {
      'ssm': "240px",
      "m36":"360px",
      "m46":"460px",
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      "main-text": "#393939",
      "grey": "#5B5B5C",
      "grey2":"#F9FAFB",
      "grey3":"#44474F",
      "white":"#fff",
      "black": "#000",
      "white2": "#F2F4F5",
      "white3":"#F6F8FB",
      "white4":"#F3F4F5",
      "main":"#3B3C3F",
      "main-title": "#2C333D", 
      'red': '#EE0906',
      "blue": "#186FD4",
      "blue2":"#117FE3",
      "brown": "#2B2A28", 
      "button":"#011120",

    },
  },
  plugins: [],
}

