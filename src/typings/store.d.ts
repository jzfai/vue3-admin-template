// the ts file of vuex
import { RouterTy } from '@/types/router'
import { ObjTy } from '@/types/common'
export interface StateTy {
  app: AppTy
  permission: PermissionTy
  user: UserTy
}
export interface UserTy {
  username: string
  avatar: string
  roles: Array<string>
}
export interface AppTy {
  sidebar: {
    opened: boolean
    //opened: Cookies.get('sidebarStatus') ? !!+Cookies.get('sidebarStatus') : true,
    // withoutAnimation: false
  }
  device: string
  settings: ObjTy
  cachedViews: Array<string>
  cachedViewsDeep: Array<string>
}
export interface PermissionTy {
  isGetUserInfo: boolean //是否已经设置了权限
  routes: RouterTy //将过滤后的异步路由和静态路由集合
  addRoutes: RouterTy //过滤后的异步路由
}
