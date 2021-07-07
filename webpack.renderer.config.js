const rules = require('./webpack.rules');
const plugins = require('./webpack.plugins');
const nodeExternals = require('webpack-node-externals');

rules.push({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
});

module.exports = {
  module: {
    rules,
  },
  plugins: plugins,
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
    fallback: {
      "fs": false,
      "child_process": false,
      "path": false,
      "util": false
    },
  },
  target: 'node',
  externals: [nodeExternals()],

};
