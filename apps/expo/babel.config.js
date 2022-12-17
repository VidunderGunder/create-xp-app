module.exports = function (api) {
  api.cache(true);

  const envPath = path.resolve(__dirname, `../../`, `.env`);

  require("dotenv").config({ path: envPath });

  return {
    plugins: [
      "nativewind/babel",
      [
        "module:react-native-dotenv",
        {
          moduleName: "@env",
          path: "../../.env",
          allowlist: [
            "NEXT_PUBLIC_OPEN_WEATHER_MAP_API_KEY",
            "NEXT_PUBLIC_CLERK_FRONTEND_API",
          ],
          safe: false,
          allowUndefined: true,
        },
      ],
      "@babel/plugin-proposal-export-namespace-from",
      "react-native-reanimated/plugin",
    ],
    presets: ["babel-preset-expo"],
  };
};

const path = require("path");
