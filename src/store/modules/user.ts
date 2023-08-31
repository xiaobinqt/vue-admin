import { defineStore } from 'pinia'

// 引入类型

import type { LoginForm, LoginResponse } from '@/api/user/type.ts'
import { reqLogin } from '@/api/user'

// 用户仓库
const useUserStore = defineStore('User', {
  // 数据存储
  state: () => {
    return {
      token: localStorage.getItem('TOKEN'), // 用户唯一标识
    }
  },
  // 处理异步，数据处理等
  actions: {
    async userLogin(data: LoginForm) {
      const result: LoginResponse = await reqLogin(data)
      // console.log(result)
      if (result.code == 200) {
        // 登录成功存储 token
        this.token = result.data.token
        // 本地储存持久化
        localStorage.setItem('TOKEN', result.data.token)
        return 'OK' // 保证 async 函数返回一个成功的 Promise
      } else {
        return Promise.reject(new Error(result.data.message))
      }
    },
  },
  // 计算属性
  getters: {},
})

export default useUserStore
