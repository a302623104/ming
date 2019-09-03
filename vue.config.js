module.exports = {
  publicPath: './',
  devServer: {
    host: '0.0.0.0'
  },
    pages: {
        console: {
            entry: 'src/modules/console/console.js',
            template: 'public/console.html',
            filename: 'console.html',
            title: '分类',
            chunks: ['console']
        },
        client: {
          entry: 'src/modules/client/client.js',
          template: 'public/index.html',
          filename: 'index.html',
          title: '首页',
          chunks: ['client']
        },
        login: {
          entry: 'src/modules/login/login.js',
          template: 'public/login.html',
          filename: 'login.html',
          title: '用户',
          chunks: ['login']
      },
      shopcar: {
        entry: 'src/modules/shopcar/shopcar.js',
        template: 'public/shopcar.html',
        filename: 'shopcar.html',
        title: '购物车',
        chunks: ['shopcar']
      }
    }
}
