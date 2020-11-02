const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const HtmlWebpackExternalsPlugin = require("html-webpack-externals-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },
  externals: {},
  plugins: [
    new HtmlWebpackExternalsPlugin({
      externals: [],
    }),
  ],
});
