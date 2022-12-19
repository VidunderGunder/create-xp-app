// Learn more: https://docs.expo.dev/guides/monorepos/
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { getDefaultConfig } = require("expo/metro-config");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

const projectRoot = __dirname;
const workspaceRoot = path.resolve(projectRoot, "../..");

// Create the default Metro config
const config = getDefaultConfig(projectRoot);

// Add the additional `cjs` extension to the resolver
config.resolver.sourceExts.push("cjs");

// 1. Watch all files within the monorepo
config.watchFolders = [workspaceRoot];
// 2. Let Metro know where to resolve packages and in what order
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, "node_modules"),
  path.resolve(workspaceRoot, "node_modules"),
];
// 3. Force Metro to resolve (sub)dependencies only from the `nodeModulesPaths`
config.resolver.disableHierarchicalLookup = true;

// Support for three.js assets (using `new Set` only to avoid duplicates)
config.resolver.assetExts = Array.from(
  new Set([...config.resolver.assetExts, "glb", "gltf", "png", "jpg"]),
);

module.exports = config;
