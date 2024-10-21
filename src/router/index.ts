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
    redirect: 'limit',
    children: [
      {
        path: 'limit',
        name: 'limit',
        component: () => import('@/views/dashboard/limit.vue'),
        //using el svg icon, the elSvgIcon first when at the same time using elSvgIcon and icon
        meta: { title: 'limit', icon: 'limit', affix: true }
      },
      {
        path: '/limit-all',
        name: 'limit-all',
        component: () => import('@/views/dashboard/limit-all.vue'),
        //using el svg icon, the elSvgIcon first when at the same time using elSvgIcon and icon
        meta: { title: 'limit-all', icon: 'limit-all', affix: true }
      },
      {
        path: 'up',
        name: 'up',
        component: () => import('@/views/dashboard/up.vue'),
        //using el svg icon, the elSvgIcon first when at the same time using elSvgIcon and icon
        meta: { title: 'up', icon: 'up', affix: true }
      },
      {
        path: 'jh',
        name: 'jh',
        component: () => import('@/views/dashboard/jh.vue'),
        //using el svg icon, the elSvgIcon first when at the same time using elSvgIcon and icon
        meta: { title: 'jh', icon: 'jh', affix: true }
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
