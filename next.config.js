const path = require('path')

module.exports = {
  reactStrictMode: false,
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = {
      http: require.resolve('stream-http'),
      https: require.resolve('https-browserify'),
      "fs": false,
      "tls": false,
      "net": false,
      "path": false,
      "zlib": false,
      "os": false,
      "dns":false,
      "assert": require.resolve("assert"),
      "os-browserify": require.resolve('os-browserify'), //if you want to use this module also don't forget npm i crypto-browserify 
      crypto: require.resolve('crypto-browserify'),
      stream: require.resolve('stream-browserify'),
      buffer: require.resolve('buffer'),
    };

    return config;
  }
}