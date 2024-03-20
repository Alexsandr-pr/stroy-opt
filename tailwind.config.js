/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3sl': '2px 2px 4px #898D8F, -2px -2px 4px #898D8F',
        "4sl": "0px 4px 19px 0px rgba(23, 27, 32, 0.07)"
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
      'red': '#EE063E',
      "blue": "#186FD4",
      "blue2":"#117FE3",
      "brown": "#2B2A28", 
      "button":"#011120",
      "orange":"#F90",
      "article":"#A8ADB2",
      "price":"#003B73",
      "grey-sale":"#8F9296",
      "green-label":"#1B9665",
      "nav-link":"#6C6F71",
      "time":"#4E5760",
      "button-popup":"#2A5E8D",
      "navlink-mobile":"#2E3032",
      "fon": "rgba(1, 17, 32, 0.50)",
      "border-history":"#E6EEF6",
      "title-news": "#1D1D27",
      "input-text":"#ADB1B7",
      "input-border": "rgba(173, 177, 183, 1)",
      "checkbox":"#696D70",
      "pagination-border":"#DFDFDF",
      "spoller-border":"#EDF0F2",
      "date":"#60656C",
      "map-border":"#E9ECEF"
    },
  },
  plugins: [],
}

