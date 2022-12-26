const { theme } = require("@acme/app/theme/tailwind");

/** @type {import("tailwindcss").Config} */
module.exports = {
  // plugins: [require("nativewind/tailwind/css")],
  // important: "html",
  content: [
    "/index.ts",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./screens/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "../../packages/app/**/*.{js,jsx,ts,tsx}",
  ],
  important: "",
  theme: {
    ...theme,
  },
  plugins: [],
};
