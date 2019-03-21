const path = require('path');

function resolve(dir) {
  return path.resolve(__dirname, dir);
}

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@components': resolve('src/components/'),
        '@assets': resolve('src/assets/'),
        '@api': resolve('src/api/'),
        '@base': resolve('src/base/'),
        '@pages': resolve('src/pages/')
      }
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3000',
        pathRewrite: {'^/api' : ''},
      },
    }
  }
};
