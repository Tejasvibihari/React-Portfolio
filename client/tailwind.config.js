/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    animation: {
      bounce: 'bounce 1s infinite ease-in-out',
    },
    keyframes: {
      bounce: {
        '0%, 100%': {
          transform: 'translateY(-5%)',
          animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
        },
        '50%': {
          transform: 'translateY(0)',
          animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
        },
      },
    },
  },

  plugins: [],

}
// cubic-bezier(0.8, 0, 1, 1)
//cubic-bezier(0, 0, 0.2, 1)