const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const isBuildDemo = !!process.env.BUILD_DEMO

module.exports = {
  output: {
    library: "VueRouterProgressBar",
    path: isBuildDemo ? path.resolve('./demo-build') : undefined,
    publicPath: isBuildDemo ? '' : undefined
  },
  entry: isBuildDemo ? {
    'index': './demo/index.js'
  } : undefined,
  plugins: isBuildDemo ? [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'demo/index.html')
    })
  ] : [],
  resolve: { alias: { vue: 'vue/dist/vue.esm.js' } },
}
