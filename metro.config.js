const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

// Add path alias support
config.resolver.alias = {
  "@": __dirname,
};

// Ensure the resolver can handle the alias
config.resolver.platforms = ["ios", "android", "native", "web"];

module.exports = config;
