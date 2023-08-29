import { createApp } from 'vue'
// import App from './App.vue'
import App from '@/App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// @ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

import 'virtual:svg-icons-register'

// 引入自定义插件对象，注册整个项目的全局组件
import GlobalComponent from '@/components/index.ts'

// 引入模版全局样式
import '@/styles/index.scss'
// 测试接口

const app = createApp(App)

app.use(GlobalComponent)
// console.log(GlobalComponent)

app.use(ElementPlus, {
  locale: zhCn,
})

// axios({
//   url: '/api/user/login',
//   method: 'post',
//   data: {
//     username: 'admin',
//     password: '11122111',
//   },
// })

// 这是最后一步
app.mount('#app')
