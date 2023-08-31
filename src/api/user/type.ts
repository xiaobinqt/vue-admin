// 登录接口需要携带的 ts 类型

export interface LoginForm {
  username: string
  password: string
}

interface dataType {
  token: string
  message: string
}

// 登录接口返回数据类型
export interface LoginResponse {
  code: number
  data: dataType
}

// 用户信息相关
interface userInfo {
  userId: number
  avatar: string
  username: string
  password: string
  desc: string
  roles: string[]
  buttons: string[]
  routes: string[]
  token: string
}

interface user {
  checkUser: userInfo
}

export interface userResponseData {
  code: number
  data: user
}
