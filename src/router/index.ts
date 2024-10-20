import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouterTypes } from '~/basic'
import Layout from '@/layout/index.vue'

export const constantRoutes: RouterTypes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404.vue'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401.vue'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/index',
    children: [
      {
        path: 'index',
        name: 'index',
        component: () => import('@/views/dashboard/index.vue'),
        //using el svg icon, the elSvgIcon first when at the same time using elSvgIcon and icon
        meta: { title: 'index', icon: 'dashboard', affix: true }
      }
    ]
  },

  {
    path: '/up',
    component: Layout,
    redirect: '/index-up',
    children: [
      {
        path: '/index-up',
        name: 'IndexUp',
        component: () => import('@/views/dashboard/index-up.vue'),
        //using el svg icon, the elSvgIcon first when at the same time using elSvgIcon and icon
        meta: { title: 'index-up', icon: 'index-up', affix: true }
      }
    ]
  },
  {
    path: '/indexs',
    component: Layout,
    redirect: '/indexs1',
    children: [
      {
        path: '/indexs1',
        name: 'indexs1',
        component: () => import('@/views/dashboard/index-s.vue'),
        //using el svg icon, the elSvgIcon first when at the same time using elSvgIcon and icon
        meta: { title: 'index-up', icon: 'index-up', affix: true }
      }
    ]
  },
  {
    path: '/all',
    component: Layout,
    redirect: '/index-all',
    children: [
      {
        path: '/index-all',
        name: 'IndexUp',
        component: () => import('@/views/dashboard/index-all.vue'),
        //using el svg icon, the elSvgIcon first when at the same time using elSvgIcon and icon
        meta: { title: 'index-up', icon: 'index-up', affix: true }
      }
    ]
  },

  { path: '/:pathMatch(.*)', redirect: '/404', hidden: true }
]

//角色和code数组动态路由
export const roleCodeRoutes: RouterTypes = []
/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes: RouterTypes = [
  // 404 page must be placed at the end !!!
]

const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: constantRoutes
})

export default router
