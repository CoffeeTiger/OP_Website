const path = require('path');

function resolveSrc(_path) {
  return path.join(__dirname, _path);
}
module.exports = {
  lintOnSave: false,
  productionSourceMap: true,
  configureWebpack: {
    resolve: {
      alias: {
        assets: resolveSrc('src/assets')
      }
    }
  },
  css: {
    //sourceMap: process.env.NODE_ENV !== 'production'
    sourceMap: false
  }
};
