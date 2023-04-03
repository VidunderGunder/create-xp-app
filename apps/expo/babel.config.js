module.exports = function (api) {
  api.cache(true);

  const envPath = path.resolve(__dirname, `../../`, `.env`);

  require("dotenv").config({ path: envPath });

  return {
    plugins: [
      [
        "module:react-native-dotenv",
        {
          moduleName: "@env",
          path: "../../.env",
          allowlist: [
            "NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY",
          ],
          safe: false,
          allowUndefined: true,
        },
      ],
      "@babel/plugin-proposal-export-namespace-from",
      "react-native-reanimated/plugin",
      "nativewind/babel",
    ],
    presets: ["babel-preset-expo"],
  };
};

const path = require("path");
