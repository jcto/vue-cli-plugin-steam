const fs = require('fs')

module.exports = (api, options, rootOptions) => {
  console.log('test')
  const appVueContent = readAppVue()
  rootOptions.appVueContent = appVueContent
if(appVueContent.indexOf('~vux/src/styles/reset.less')>-1){
  console.log('已经有~vux/src/styles/reset.less样式')
}else{
  api.render({
    './template/src/App.vue':'./template/src/App.vue'
  })
}


  // 修改 `package.json` 里的字段
  api.extendPackage({
    dependencies: {
      'vux': '^2.9.2'
    },
    devDependencies: {
      'less': '^3.8.1',
      'less-loader': '^4.1.0',
      'vue-loader': '14.2.3',
      'vue-template-compiler': '^2.5.17',
      'vux-loader': '^1.2.9'
    }
  })
}

function readAppVue () {
  const content = fs.readFileSync('src/views/om/App.vue', { encoding: 'utf-8' })
  return content
}