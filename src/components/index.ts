// 安装自定义全局组件

import SvgIcon from './SvgIcon/index.vue'
import { App } from 'vue'
import { Component } from 'vue'

interface GlobalComponents {
  [key: string]: Component // 这里是字符串类型索引签名
}

const _globalComponents: GlobalComponents = { SvgIcon }

// 对外暴露插件对象
export default {
  // 必须叫做 install 方法
  // 会把 app 注入进来
  install(app: App<Element>) {
    // console.log('1111', app)
    Object.keys(_globalComponents).forEach((key) => {
      // 注册为全局组件
      app.component(key, _globalComponents[key])
    })
  },
}
