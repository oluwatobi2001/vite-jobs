const { wedgesTW } = require("@lemonsqueezy/wedges");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/@lemonsqueezy/wedges/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'PrimaryDesaturatedDarkCyan' : 'hsl(180, 29%, 50%)',
   'LightGrayishCyanTb' : 'hsl(180, 31%, 95%)',
   'DarkGrayishCyan': 'hsl(180, 8%, 52%)',
   'VeryDarkGrayishCyan': 'hsl(180, 14%, 20%)',

      },
      backgroundImage: {
        
      },
      fontFamily: {
        primary: "Cabinet Grotesk",
      },
    },
    container: {
      screens: {
       sm: '375px',
        xl: '1440px',
        
      },
    },
  },
  darkMode: "class",
  plugins: [wedgesTW()],
};
