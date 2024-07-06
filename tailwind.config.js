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

        // Ant Design Table styles
        ".ant-table-wrapper": {
          "@apply bg-white dark:bg-gray-800": {},
          "& .ant-table": {
            "@apply bg-white dark:bg-gray-800 rounded-xl": {},
          },
          "& .ant-table-thead > tr > th": {
            "@apply bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white border-b border-gray-200 dark:border-gray-600":
              {},
          },
          "& .ant-table-tbody > tr > td": {
            "@apply border-b border-gray-200 dark:border-gray-600 text-gray-800 dark:text-white":
              {},
          },
          "& .ant-table-tbody > tr:hover > td": {
            "@apply bg-gray-50 dark:bg-gray-700": {},
          },
          "& .ant-table-cell": {
            "@apply text-gray-800 dark:text-white": {},
          },
          "& .ant-table-row-expand-icon": {
            "@apply border-gray-300 dark:border-gray-600": {},
          },
          "& .ant-table-column-sorter": {
            "@apply text-gray-400 dark:text-gray-500": {},
          },
          "& .ant-table-filter-trigger": {
            "@apply text-gray-400 dark:text-gray-500": {},
          },
          "& .ant-pagination-item": {
            "@apply bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600":
              {},
            "&-active": {
              "@apply border-blue-500 dark:border-blue-400": {},
              a: {
                "@apply text-blue-500 dark:text-blue-400": {},
              },
            },
          },
          "& .ant-pagination-prev, & .ant-pagination-next": {
            "@apply text-gray-600 dark:text-gray-400": {},
            "&:hover": {
              "@apply text-blue-500 dark:text-blue-400": {},
            },
          },
        },

        // Ant Design Button styles (for the action buttons in the table)
        ".ant-btn-primary": {
          "@apply bg-blue-500 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-500 text-white border-transparent":
            {},
        },
        ".ant-btn-dangerous": {
          "@apply bg-red-500 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-500 text-white border-transparent":
            {},
        },
      });

    },
  ],
};

