import Vue from 'vue'
import store from '@/store'
import { isString, isArray } from '@/utils/validate'
import settings from '@/settings'

// you can set in settings.js
// errorLog:'production' | ['production', 'development']
const { errorLog: needErrorLog } = settings

function checkNeed() {
  const env = process.env.NODE_ENV
  if (isString(needErrorLog)) {
    return env === needErrorLog
  }
  if (isArray(needErrorLog)) {
    return needErrorLog.includes(env)
  }
  return false
}

if (checkNeed()) {
  Vue.config.errorHandler = (err, vm, info, a)=> {
    Vue.nextTick(() => {
      //此处发送请求到后台保存
      // store.dispatch('errorLog/addErrorLog', {
      //   err,
      //   vm,
      //   info,
      //   url: window.location.href
      // })
      console.error("拦截到的错误信息",err, vm,info,a)
    })
  }
}
