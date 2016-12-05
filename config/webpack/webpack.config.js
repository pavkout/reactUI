var _ = require('lodash');
var path = require('path');
var webpack = require('webpack');
var rucksack = require('rucksack-css');
var aliases = require('./aliases');
var postcss = require('postcss');

var isDebug = _.includes(process.argv, '--production') || _.includes(process.argv, '-p') ? false : true;

console.log(isDebug ? 'Building your stuff...' : 'Compiling for production...')
// webpack.config.js
if (process.env.NODE_ENV === 'development') {
  var loaders = ['react-hot','babel-loader']
} else {
  var loaders = ['babel-loader']
}

module.exports = {
  context: path.resolve(__dirname, '../../'),
  // Switch loaders to debug mode (not sure how this helps)
  debug: isDebug,

  // Better set this for development, because it creates source maps
  devtool: isDebug ? '#inline-source-map' : false,
  entry: 'index.js',
  output: {
    path: path.resolve(__dirname, '../../dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  resolve: {
     extensions: ['', '.js', '.jsx'],
     root: path.resolve(__dirname, '../../'),
     alias: aliases
  },
  devServer: {
    inline: true,
    port: 8080
  },
  module: {
    loaders: [{
      test: /.jsx?$/,
      loader: loaders,
      exclude: /node_modules/,
      query: {
        presets: ["es2015", "react", "stage-1"]
      },
      babelrc: false
    },
    {
      test: /\.css$/,
      loader: 'style-loader!css-loader!postcss-loader'
    }
  ]
  },
  // postcss([ rucksack({ autoprefixer: true }) ])
  // .process(css, { from: 'src/style.css', to: 'style.css' })
  // .then(function (result) {
  //     fs.writeFileSync('style.css', result.css);
  //     if ( result.map ) fs.writeFileSync('style.css.map', result.map);
  // });
  postcss: [
    rucksack({
      autoprefixer: true
    })
  ]
};
