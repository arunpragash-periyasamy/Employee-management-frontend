/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      backgroundColor: {
        "ant-select": "transparent",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".ant-select-custom": {
          "& .ant-select-selector": {
            "@apply bg-white dark:bg-slate-500 border border-gray-300 dark:border-slate-400 rounded-md p-1 !important":
              {},
          },
          "& .ant-select-selection-item": {
            "@apply text-black dark:text-white !important": {},
          },
          "& .ant-select-selection-placeholder": {
            "@apply text-gray-400 dark:text-slate-300 !important": {},
          },
          "& .ant-select-arrow": {
            "@apply text-gray-400 dark:text-slate-300 !important": {},
          },
        },
        ".ant-select-item-option-active": {
          "@apply bg-gray-100 dark:bg-slate-700 !important": {},
        },
        ".ant-select-item-option-selected": {
          "@apply bg-blue-100 dark:bg-blue-800 !important": {},
        },
      });

    },
  ],
};

