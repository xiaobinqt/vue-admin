<template>
  <div class="login-container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form class="login-form">
          <h1>Hello</h1>
          <h2>欢迎来到硅谷甄选</h2>
          <el-form-item>
            <el-input :prefix-icon="User" v-model="loginForm.username" />
          </el-form-item>
          <el-form-item>
            <el-input
              type="password"
              :prefix-icon="Lock"
              v-model="loginForm.password"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              class="login-btn"
              type="primary"
              size="default"
              @click="login"
              :loading="loading"
            >
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped lang="scss">
.login-container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;

  .login-form {
    padding: 40px;
    position: relative;
    width: 70%;
    top: 30vh;
    background: url('@/assets/images/login_form.png') no-repeat;
    background-size: cover;

    h1 {
      color: white;
      font-size: 40px;
    }

    h2 {
      font-size: 20px;
      color: white;
      margin: 20px 0;
    }

    .login-btn {
      width: 100%;
    }
  }
}
</style>
<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'
import useUserStore from '@/store/modules/user.ts'
import { useRouter } from 'vue-router'
import { ElNotification } from 'element-plus'

// 获取路由器
let $router = useRouter()

// 定义变量控制按钮加载效果
let loading = ref(false)

// 收集表单数据
let loginForm = reactive({
  username: 'admin',
  password: '111111',
})

let useStore = useUserStore()

const login = async () => {
  loading.value = true // 开始加载效果
  // 可以使用 .then 语法，这里使用 try catch
  try {
    await useStore.userLogin(loginForm)
    // console.log(result)
    // 编程式导航跳到首页
    $router.push('/')
    ElNotification({
      type: 'success',
      message: '登录成功',
    })
    loading.value = false
  } catch (error) {
    // 登录失败
    loading.value = false
    ElNotification({
      type: 'error',
      message: (error as Error).message,
    })
  }
}
</script>
