module.exports = {
  devtool: 'cheap-module-source-map',
  entry: "./js/app.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
          plugins: ["jsx-control-statements"]
         }
      }
    ]
  },
};
