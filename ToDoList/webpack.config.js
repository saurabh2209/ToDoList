var webpack = require('webpack');
module.exports = {
  entry: [
     'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './public/app.jsx'],
    externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname+'/public',
    filename: 'bundle.js'
  },
  resolve: {
      root:__dirname,
      modulesDirectories:[
        'node_modules',
        './public/components',
        './api',
        './actions'
        ],
      alias:{


      },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-2']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
};
