const vuxLoader = require('vux-loader')

module.exports=(api,projectOptions)=>{
	api.chainWebpack(webpackConfig => {
    // 通过 webpack-chain 修改 webpack 配置
  })

  api.configureWebpack(webpackConfig => {
    // 修改 webpack 配置
    // 或返回通过 webpack-merge 合并的配置对象
      vuxLoader.merge(webpackConfig, {
    plugins: ['vux-ui', 'duplicate-style']
  })
  })

  api.registerCommand('test', args => {
    // 注册 `vue-cli-service test`
  })
}