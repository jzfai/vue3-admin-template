import Layout from '@/layout/index.vue'
const BasicDemo = {
  path: '/basic-demo',
  component: Layout,
  meta: { title: 'Basic Demo', icon: 'eye-open' },
  alwaysShow: true,
  children: [
    {
      path: 'hook',
      component: () => import('@/views/basic-demo/hook/index.vue'),
      name: 'Hook',
      meta: { title: 'Hook' }
    },
    {
      path: 'pinia',
      component: () => import('@/views/basic-demo/pinia/index.vue'),
      name: 'Pinia',
      meta: { title: 'Pinia' }
    },
    {
      path: 'mock',
      component: () => import('@/views/basic-demo/mock/index.vue'),
      name: 'Mock',
      meta: { title: 'Mock' }
    },
    {
      path: 'svg-icon',
      component: () => import('@/views/basic-demo/svg-icon/index.vue'),
      name: 'SvgIcon',
      meta: { title: 'Svg Icon' }
    },
    {
      path: 'parent-children',
      component: () => import('@/views/basic-demo/parent-children/index.vue'),
      name: 'Parent',
      meta: { title: 'Parent Children' }
    },
    {
      path: 'second-keep-alive',
      component: () => import('@/views/basic-demo/keep-alive/second-keep-alive.vue'),
      name: 'SecondKeepAlive',
      //cachePage: cachePage when page enter, default false
      //leaveRmCachePage: remove cachePage when page leave, default false
      meta: { title: 'Send KeepAlive', cachePage: true, closeTabRmCache: false }
    },
    {
      path: 'keep-alive-group',
      component: () => import('@/views/basic-demo/keep-alive/index.vue'),
      name: 'KeepAliveGroup',
      //cachePage: cachePage when page enter, default false
      //leaveRmCachePage: remove cachePage when page leave, default false
      meta: { title: 'KeepAlive Group', cacheGroup: ['KeepAliveGroup', 'SecondChild', 'ThirdChild'] }
    },
    {
      path: 'second-child',
      name: 'SecondChild',
      hidden: true,
      component: () => import('@/views/basic-demo/keep-alive/second-child.vue'),
      meta: { title: 'SecondChild', activeMenu: '/basic-demo/second-keep-alive' }
    },
    {
      path: 'third-child',
      name: 'ThirdChild',
      hidden: true,
      component: () => import('@/views/basic-demo/keep-alive/third-child.vue'),
      meta: { title: 'ThirdChild', activeMenu: '/basic-demo/second-keep-alive' }
    },
    //tab-keep-alive
    {
      path: 'tab-keep-alive',
      component: () => import('@/views/basic-demo/keep-alive/tab-keep-alive.vue'),
      name: 'TabKeepAlive',
      //closeTabRmCache: remove cachePage when tabs close, default false
      meta: { title: 'Tab KeepAlive', cachePage: true, closeTabRmCache: true }
    },
    {
      path: 'worker',
      component: () => import('@/views/basic-demo/worker/index.vue'),
      name: 'Worker',
      meta: { title: 'Worker' }
    }
  ]
}

export default BasicDemo
