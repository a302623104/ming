module.exports = {
  publicPath:'./',
  devServer:{
    host:'0.0.0.0'
  },
    pages: {
        console: {
            entry: 'src/modules/console/console.js',
            template: 'public/console.html',
            filename: 'console.html',
            title: 'console page',
            chunks: ['console']
        },

        client: {
          entry: 'src/modules/client/client.js',
          template: 'public/index.html',
          filename: 'index.html',
          title: 'client page',
          chunks: ['client']
        },
        login:{
          entry: 'src/modules/login/login.js',
          template: 'public/login.html',
          filename: 'login.html',
          title: 'login page',
          chunks: ['login']
      }
    },
}
