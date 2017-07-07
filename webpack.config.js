const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: [
    './src/index.js',
    './src/stylesheets/app.scss'
],

 output: {
   filename: 'index.js',
   chunkFilename: "[id].js",
   path: __dirname + '/public/',
   libraryTarget: 'umd'
},

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets:['react', 'es2015']
        }
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.jpe?g$|\.ico$|\.gif$|\.png$|\.svg$|\.eot$|\.otf$|\.woff$|\.woff2$|\.wav$|\.mp3$/,
        loader: 'file-loader?name=[name].[ext]'  // <-- retain original file name
      }
    ]
  },

  plugins: [

  ],

  resolve: {
    extensions: ['', '.js', '.jsx', '.scss']
  },

  devtool: "#source-map"
}
