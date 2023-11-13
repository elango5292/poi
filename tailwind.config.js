/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports =withMT({
    darkMode: ["class"],
    content: [
      './pages/**/*.{js,jsx}',
      './components/**/*.{js,jsx}',
  
      './app/**/*.{js,jsx}',
      './src/**/*.{js,jsx}',
      ],
    theme: {
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },
      extend: {
        keyframes: {
          "accordion-down": {
            from: { height: 0 },
            to: { height: "var(--radix-accordion-content-height)" },
          },
          "accordion-up": {
            from: { height: "var(--radix-accordion-content-height)" },
            to: { height: 0 },
          },
          "hero-light-keyframe-1": {
              "0%":{opacity: "100%"},
              "50%":{opacity: "40%"},
              "100%":{opacity: "100%"},
  
            },
            "hero-light-keyframe-2": {
              "0%":{opacity: "10%"},
              "50%":{opacity: "20%"},
              "100%":{opacity: "10%"},
  
            },
        },
        animation: {
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out",
          "hero-light-1": "hero-light-keyframe-1 5s ease-out infinite",
          "hero-light-2": "hero-light-keyframe-2 10s ease-out infinite",
        },
      },
    },
    plugins: [require("tailwindcss-animate")],
  });