import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/Login.vue'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/test-index',
    meta: { title: '测试首页', icon: 'dashboard' },
    alwaysShow: false,
    children: [
      {
        path: 'test-index',
        component: () => import('@/views/test-index.vue'),
        name: 'TestIndex',
        meta: { title: 'TestIndex', icon: 'dashboard' }
      }
    ]
  }
]

//此处将动态路由导出
export const asyncRoutes = [
  {
    path: '/release',
    component: Layout,
    meta: { title: '发布', icon: 'form' },
    alwaysShow: true,
    code: 1,
    redirect: '/release/dbc-file',
    children: [
      {
        path: 'dbc-file',
        component: () => import('@/views/release/DBCFile.vue'),
        name: 'DBCFile',
        code: 1,
        meta: { title: 'DBC文件', icon: 'form' }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: constantRoutes
})

export default router
