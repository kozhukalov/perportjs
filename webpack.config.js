var path = require('path');
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    './src/js/app.js'
  ],
  output: {
    path: path.join(__dirname, 'build/static'),
    publicPath: '/static',
    filename: 'bundle.js',
    sourceMapFilename: 'bundle.js.map'
  },
  resolve: {
    modules: [path.resolve('src'), 'node_modules'],
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
          plugins: [
            ['transform-es2015-classes', {loose: true}],
            'transform-runtime',
            'transform-es2015-modules-commonjs'
          ],
          presets: ['es2015']
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader']
        })
      },
      {
        test: /\.html$/,
        use: ['raw-loader']
      },
      {
        test: /\.json$/,
        use: ['json-loader']
      },
      {
        test: /\.(gif|png|jpg)$/,
        use: ['file-loader']
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    // new webpack.optimize.DedupePlugin(),
    // new webpack.optimize.UglifyJsPlugin()
  ],
  devtool: 'cheap-eval-source-map',
  // devServer: {
  //   contentBase: path.join(__dirname, 'build'),
  //   compress: true,
  //   port: 8080,
  //   host: '127.0.0.1',
  //   hot: true,
  //   stats: 'verbose'
  // }
};
