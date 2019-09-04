module.exports = {
  publicPath: './',
  devServer: {
    host: '0.0.0.0'
  },
    pages: {
        list: {
            entry: 'src/modules/list/list.js',
            template: 'public/list.html',
            filename: 'list.html',
            title: '分类',
            chunks: ['list']
        },
        index: {
          entry: 'src/modules/index/index.js',
          template: 'public/index.html',
          filename: 'index.html',
          title: '首页',
          chunks: ['index']
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
