const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: ["./resources/js/app.js", "./resources/scss/app.scss"],
  output: {
    path: __dirname + "/public",
    publicPath: '',
    filename: "./js/app.bundle.js"
  },
  resolve: {
    alias: {
      bulma$: path.resolve(__dirname, 'node_modules/bulma/bulma.sass'),
      vue$: 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(sass|scss)$/,
        use: ExtractTextPlugin.extract({
          use: [{ loader: 'css-loader', options: {minimize: true}}, 'sass-loader'],
        }),
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(jpeg|jpg|png)$/,
        loader: 'url-loader?limit=100000&name=/imgs/[hash].[ext]'
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000&name=/webfonts/[hash].[ext]'
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      }
    ],
  },
  devServer: {
    historyApiFallback: true,
    port: 3000
  },
  plugins: [
    new ExtractTextPlugin({
      filename: './css/app.bundle.css',
      allChunks: true,
    }),
    new VueLoaderPlugin()
  ],
}
