// tailwind.config.js
module.exports = {
    theme: {
      extend: {
        animation: {
          'fade-in': 'fadeIn 0.15s ease-in-out',
        },
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  };
  