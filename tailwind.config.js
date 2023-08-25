const defaultTheme = require("tailwindcss/defaultTheme"); // eslint-disable-line

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.tsx",
    "./pages/**/*.tsx",
    "./public/posts/*.json",
  ],
  theme: {
    fontFamily: {
      mono: [
        "Menlo",
        "Monaco",
        '"Lucida Console"',
        "Consolas",
        '"Liberation Mono"',
        '"Courier New"',
        "monospace",
      ],
    },
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      width: {
        72: "18rem",
      },
    },
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active"],
  },
  plugins: [
    require("tailwindcss-hyphens")
  ],
};
