/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
      
      extend: {
        colors:{
          custom: {
            200:"#FACE9B",
            300:"#FCD5A0",
            400:"#F0B57A",
            500:"#F7C48B",
            600:"#F5C591",
            700:"#eb9b44",
            800:"#ed8718",
            900:"#8c500e",
          },
        },
      },
    },
    plugins: [
      require('@tailwindcss/forms'),
      
    ],
  }
  
  