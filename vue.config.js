const path = require('path');

function resolveSrc(_path) {
  return path.join(__dirname, _path);
}

module.exports = {
  devServer: {
  	open: true,
  	host: '0.0.0.0',
  	port: 8081,
  	hot: true,
  	https: false,
  	hotOnly: false,
  	/* proxy: {
  		'/': {
  			target: 'http://xxxx:8080',
  			secure: false,
  			changeOrigin: true,
  			pathRewrite: {
  				'^/API': '/'
  			}
  		}
  	}, */
  	before: app => {}
  },
  lintOnSave: true,
  productionSourceMap: false,
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
