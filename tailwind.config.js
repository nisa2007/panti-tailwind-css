/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    container :{
      center : true,
      padding : '16px',
    },
    extend: {
      colors: {
        primary: '#6b21a8',
        dark : '#0f172a',
        gray : '#64748b',
        secondary : '#cbd5e1',
        thirhd :'#a78bfa',
      },
      screen :{
        '2xl': '1320px',
      },
    },
  },

  plugins: [],
}

