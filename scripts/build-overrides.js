const rewire = require("rewire");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const defaults = rewire("react-scripts/scripts/build.js");
let config = defaults.__get__("config");

//disable splitting JS files into chunks in the production build
config.optimization.splitChunks = {
  cacheGroups: {
    default: false,
  },
};
config.optimization.runtimeChunk = false;

// JS
config.output.filename = "static/js/[name].js";

// CSS remove MiniCssPlugin
config.plugins = config.plugins.map((plugin) => {
  if (plugin instanceof MiniCssExtractPlugin) {
    return new MiniCssExtractPlugin({
      filename: "static/css/[name].css",
    });
  }
  return plugin;
});
