#!/usr/bin/env node
require("../server.babel"); // babel registration (runtime transpilation for node)
var path = require("path");
var rootDir = path.resolve(__dirname, "..");

/**
 * Define isomorphic constants.
 */
global.__CLIENT__ = false;
global.__SERVER__ = true;
global.__DISABLE_SSR__ = false; // <----- DISABLES SERVER SIDE RENDERING FOR ERROR DEBUGGING
global.__DEVELOPMENT__ = process.env.NODE_ENV !== "production";

//Fork the process and supervise the child for hot-reloading code during development
if (__DEVELOPMENT__) {
  if (
    !require("piping")({
      hook: true,
      ignore: /(\/\.|~$|\.json|\.scss$)/i,
    })
  ) {
    return; //The parent process ends, and child process continues from below
  }
}

// Load the server
var WebpackIsomorphicTools = require("webpack-isomorphic-tools");
global.webpackIsomorphicTools = new WebpackIsomorphicTools(
  require("../webpack/webpack-isomorphic-tools")
)
  .development(__DEVELOPMENT__)
  .server(rootDir, function () {
    require("../src/server");
  });

require("../src/server");
