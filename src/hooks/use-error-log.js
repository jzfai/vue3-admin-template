//https://blog.csdn.net/weixin_34865745/article/details/113992767
import setting from '@/settings'
import bus from '@/utils/bus'
import pack from '../../package.json'
import { jsErrorCollection } from 'js-error-collection'
let reqUrl = '/integration-front/errorCollection/insert'
const errorLogReq = (errLog) => {
  axiosReq({
    url: reqUrl,
    data: {
      pageUrl: window.location.href,
      errorLog: errLog,
      browserType: navigator.userAgent,
      version: pack.version
    },
    method: 'post',
    bfLoading: false,
    isAlertErrorMsg: true
  }).then(() => {
    bus.emit('reloadErrorPage', {})
  })
}

export default function () {
  /*
   * type judge
   * base type  using 'type of'
   * Reference type using 'instance of'
   * recommend to reading https://www.jianshu.com/p/ddc7f189d130
   * */
  const checkNeed = () => {
    const env = import.meta.env.VITE_APP_ENV
    const { errorLog } = setting
    if (typeof errorLog === 'string') {
      return env === errorLog
    }
    if (Array.isArray(errorLog)) {
      return errorLog.includes(env)
    }
    return false
  }
  if (checkNeed()) {
    jsErrorCollection({ runtimeError: true, rejectError: true, consoleError: true }, (errLog) => {
      if (!errLog.includes(reqUrl)) errorLogReq(errLog)
    })
  }
}
