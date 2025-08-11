import { createWebHistory, createRouter } from 'vue-router'

// 定义路由
const routes = [
  {
    name: '首页',
    path: '/', 
    component: () => import('@/views/HomeView.vue')
  }
]

// 创建路由实例
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

// 导出路由实例
export default router