import store from '@/store'
import axios from 'axios'
import { getToken } from '@/utils/auth'
let requestData
let loadingE

const service = axios.create({
  // baseURL: process.env.VUE_APP_BASE_URL,
  // timeout: 30000 // 超时时间
})
// 请求拦截
service.interceptors.request.use(
  request => {
    console.log('request', request)
    // token配置
    request.headers['access_token'] = '70a5bf8f853c4eba9077513191d89a21'
    /* 下载文件*/
    if (request.isDownLoadFile) {
      request.responseType = 'blob'
    }
    if (request.isUploadFile) {
      console.log('上传的是文件', request)
      request.headers['Content-Type'] = 'multipart/form-data'
    }
    requestData = request
    if (request.bfLoading) {
      // loadingE = Loading.service({
      //   lock: true,
      //   text: '数据载入中',
      //   spinner: 'el-icon-loading',
      //   background: 'rgba(0, 0, 0, 0.1)'
      // })
    }
    /*
    *params会拼接到url上
    * */
    if (request.isParams) {
      request.params = request.data
      request.data = {}
    }
    return request
  },
  err => {
    Promise.reject(err)
  }
)
// 响应拦截
service.interceptors.response.use(
  res => {
    console.log('res', res)
    if (requestData.afHLoading && loadingE) {
      loadingE.close()
    }
    // 如果是下载文件直接返回
    if (requestData.isDownLoadFile) {
      return res.data
    }
    if (res.code === 401 || res.data.code == 200 || res.data.status || res.data.code == 0 || res.data.reasonCode === 200) {
      return res.data
    } else {
      // 异常
      const { msg, data, message } = res
      Message.error(msg || message || data && data.msg || data && data.message)
      return Promise.reject('error')
    }
  },
  err => {
    if (loadingE) {
      loadingE.close()
    }
    if (err && err.response && err.response.status) {
      if (err.response.status === 403) {
        // MessageBox.confirm('请重新登录', {
        //   confirmButtonText: '重新登录',
        //   cancelButtonText: '取消',
        //   type: 'warning'
        // }).then(() => {
        //   store.dispatch('user/resetToken').then(() => {
        //     location.reload()
        //   })
        // })
      } else {

      }
    } else {
      // Message({
      //   message: err,
      //   type: 'error',
      //   duration: 2 * 1000
      // })
    }
    return Promise.reject(err)
  }
)

export default function khReqMethod({ url, data, method, isParams, bfLoading, afHLoading, isUploadFile, isDownLoadFile, baseURL, timeout }) {
  return service({
    url: url,
    method: method || 'post',
    data: data || {},
    isParams: isParams || false,
    bfLoading: bfLoading || false,
    afHLoading: afHLoading || true,
    isUploadFile: isUploadFile || false,
    isDownLoadFile: isDownLoadFile || false,
    baseURL: baseURL || process.env.VUE_APP_BASE_URL, // 设置基本基础url
    timeout: timeout || 15000 // 配置默认超时时间
  })
}
