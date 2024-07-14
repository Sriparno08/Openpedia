let path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './client/appBFR.js'),
  output: {
    path: path.resolve(__dirname, './client'),
    filename: 'bundle.js'
  },
  devServer: {
    static: path.resolve(__dirname, './client')
  }
};