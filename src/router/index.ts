import { createRouter, createWebHashHistory } from 'vue-router'
import { constantRoute } from '@/router/route.ts'

// 暴露路由器

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoute,
  // 滚动行为
  scrollBehavior() {
    return {
      left: 0,
      right: 0,
    }
  },
})
export default router
