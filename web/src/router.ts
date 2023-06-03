import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
// 路由记录，这个跟vue2中用法一致，就不做过多解释了
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '首页',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/login',
    name: '登录 / 注册',
    component: () => import('@/views/Login.vue'),
  },
  {
    path: '/*',
    name: '404',
    component: () => import('@/views/Error.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
export default router
