import axios from 'axios'
import { ElMessageBox } from 'element-plus'

//使用axios.create()创建一个axios请求实例
const service = axios.create()

//请求前拦截
service.interceptors.request.use(
  (req) => {
    //收集请求
    req.cancelToken = new axios.CancelToken((cancel) => {
      //__axiosPromiseArr收集请求地址
      window.__axiosPromiseArr.push({
        url: req.url,
        cancel
      })
    })
    //设置token到header
    req.headers['AUTHORIZE_TOKEN'] = useBasicStore().token
    return req
  },
  (err) => {
    //发送请求失败
    Promise.reject(err)
  }
)
//请求后拦截
service.interceptors.response.use(
  (res) => {
    const { code } = res.data
    const successCode = '0,200,20000'
    const noAuthCode = '401,403'
    if (successCode.includes(code)) {
      return res.data
    } else {
      if (noAuthCode.includes(code)) {
        ElMessageBox.confirm('请重新登录', {
          confirmButtonText: '重新登录',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          useBasicStore().resetStateAndToLogin()
        })
      }
      return Promise.reject(res.data)
    }
  },
  //响应报错
  (err) => {
    return Promise.reject(err)
  }
)
//导出service实例给页面调用 config->页面的配置
export default function axiosReq(config) {
  return service({
    baseURL: import.meta.env.VITE_APP_BASE_URL,
    ...config
  })
}
