const path = require('path')
const Webpack = require('webpack')
const glob = require('glob')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')


const webpackConfig = {
  entry: {},
  output: {
    filename: '[name].[hash:6].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  devtool: 'source-map',
  devServer: {
    contentBase: 'public',
    inline: true
  },
  plugins:[
    new Webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('[name].[hash:6].less'),
    new CleanWebpackPlugin(
      ['dist'],
      {
        root: __dirname,
        verbose: true,
        dry: false
      }
    ),
    new HtmlWebpackPlugin({
      filename: 'home.html',
      template: './public/index.html',
      title: 'Inwecrypto',
      inject: true,
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        use: ['babel-loader']
      },
      {
        test: /\.(css|less)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'less-loader']
        })
      },

    ]
  }
}

function getEntries(globpath) {
  const files = glob.sync(globpath);
  let entries = {};
  files.forEach((filepath) => {
    let split = filepath.split('/');
    let name = split[split.length - 2 ];
    entries[name] = './' + filepath;
  })
  return entries;
}

let allEntries = getEntries('./src/**/main.js');


Object.keys(allEntries).forEach(name => {
  webpackConfig.entry[name] = allEntries[name];
  let plugin = new HtmlWebpackPlugin({
    filename: name + '.html',
    template: './public/index.html',
    inject: true,
    chunks: [name]
  });
  webpackConfig.plugins.push(plugin);
})



module.exports = webpackConfig