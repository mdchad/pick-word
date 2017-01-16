module.export = {
  devtool: 'source-map',
  entry: `${__dirname}/src/app.js`,
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2105', 'react']
        }
      }
    ]
  }
}
