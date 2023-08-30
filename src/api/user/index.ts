import request from '@/utils/request.ts'
import { LoginForm, LoginResponse, userResponseData } from '@/api/user/type.ts'

// 统一管理接口
enum API {
  LOGIN_URL = '/user/login',
  USERINFO_URL = '/user/info',
}

// 暴露请求函数
export const reqLogin = (data: LoginForm) =>
  request.post<any, LoginResponse>(API.LOGIN_URL, data)
export const reqInfo = () =>
  request.get<any, userResponseData>(API.USERINFO_URL)
