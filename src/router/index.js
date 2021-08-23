import { createRouter, createWebHashHistory } from "vue-router";
import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/Login.vue'),
    hidden: true
  },
  {
    path: "/",
    component: Layout,
    redirect: "/test-index",
    meta: { title: "测试首页", icon: "dashboard" },
    alwaysShow: false,
    children: [
      {
        path: 'test-index',
        component: () => import('@/views/test-index.vue'),
        name: 'TestIndex',
        meta: { title: 'TestIndex', icon: 'dashboard' }
      }
    ]
  },
]


//此处将动态路由导出
export const asyncRoutes = [
  {
    path: "/demoTest",
    component: Layout,
    meta: { title: "demoTest", icon: "form" },
    code: 1,
    alwaysShow:true,
    children: [
      {
        path: 'demoTest',
        component: () => import('@/views/demoTest/DemoTest.vue'),
        name: 'demoTest',
        meta: { title: 'demoTest', icon: "form" },
        code: 2,
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: constantRoutes,
});

export default router;
