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
        '@pages': resolve('src/pages/'),
        '@utils': resolve('src/utils/')
      }
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'https://luohuidong.cn/api/cloudmusic',
        pathRewrite: {'^/api' : ''},
      },
    }
  }
};
