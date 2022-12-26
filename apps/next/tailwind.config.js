const { theme } = require("@acme/app/theme/tailwind");

/** @type {import("tailwindcss").Config} */
module.exports = {
  plugins: [require("nativewind/tailwind/css")],
  important: "html",
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "../../packages/app/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    ...theme,
  },
};
