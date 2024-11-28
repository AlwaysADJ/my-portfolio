// tailwind.config.js
module.exports = {
    content: [
      "./src/**/*.{html,js,jsx,ts,tsx}", // Tailwind will purge unused styles from these files
    ],
    theme: {
      extend: {
        colors: {
          // You can add custom colors here if you want
        },
        // You can also extend other theme settings like spacing, fonts, etc.
      },
    },
    plugins: [],
  };
  