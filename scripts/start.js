/**
 * Created by za-sumeng on 2018/7/8.
 */
const path = require("path");
const config = require("../config/webpack.config.dev");
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

var compiler = webpack(config);
var server = new WebpackDevServer(compiler, {
  contentBase: path.resolve(__dirname, "../public"),
  publicPath: path.resolve(__dirname, "../"),
  watchContentBase: true,
});
server.listen(8080);