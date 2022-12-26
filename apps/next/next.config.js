const withTM = require("next-transpile-modules")([
  "solito",
  "dripsy",
  "@dripsy/core",
  "@dripsy/gradient",
  "@acme/app",
  "@shopify/flash-list",
  "recyclerlistview",
  "moti",
  "three",
  'nativewind',
  // "expo-gl",
  // "react-native",
]);
const withSourceMaps = require("@zeit/next-source-maps");
const { withExpo } = require("@expo/next-adapter");
const withFonts = require("next-fonts");
const withImages = require("next-images");
const withPlugins = require("next-compose-plugins");
const { dirname } = require("path");
const { config } = require("dotenv");
config({ path: `../../.env` });

const env = {};

Object.keys(process.env).forEach((key) => {
  if (key.startsWith("NEXT_PUBLIC_")) {
    env[key] = process.env[key];
  }
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // reanimated (and thus, Moti) doesn't work with strict mode currently...
  // https://github.com/nandorojo/moti/issues/224
  // https://github.com/necolas/react-native-web/pull/2330
  // https://github.com/nandorojo/moti/issues/224
  // once that gets fixed, set this back to true
  productionBrowserSourceMaps: true,
  reactStrictMode: false,
  webpack5: true,
  experimental: {
    forceSwcTransforms: true,
    swcPlugins: [[require.resolve("./plugins/swc_plugin_reanimated.wasm")]],
  },
};

const transform = withPlugins([
  withSourceMaps(dirname),
  withTM,
  withFonts,
  withImages,
  [withExpo, { projectRoot: `../../` }],
]);

module.exports = function (name, { defaultConfig }) {
  return transform(name, {
    ...defaultConfig,
    ...nextConfig,
    env,
  });
};
