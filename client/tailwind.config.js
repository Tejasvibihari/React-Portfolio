/** @type {import('tailwindcss').Config} */
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    animation: {
      bounce: "bounce 1s infinite ease-in-out", // From old configuration
      // ... other theme customizations can be added here
      scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      spine: "spine var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
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
      scroll: {
        to: {
          transform: "translate(calc(-50% - 0.5rem))",
        },
        spine: {
          '0%, 100%': { transform: 'rotateZ(0deg)' },
          '100%': { transform: 'rotateZ(360deg)' },
        },
      },
    },
  },

  plugins: [addVariablesForColors],

}

function addVariablesForColors({ addBase, theme }) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]));

  addBase({
    ":root": newVars,
  });
}

// cubic-bezier(0.8, 0, 1, 1)
//cubic-bezier(0, 0, 0.2, 1)