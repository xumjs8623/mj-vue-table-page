module.exports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
      config.entry = {
        app: './src/index.js'
      }
    } else {
      // 为开发环境修改配置...
      config.entry = {
        app: './template/main.js'
      }
    }
  }
}
