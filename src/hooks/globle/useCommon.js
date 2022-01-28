import { getToken } from '@/utils/auth'
import { ref } from 'vue'
import momentMini from 'moment-mini'
export const useCommon = () => {
  let state = reactive({
    /* 文件上传相关*/
    fileListMixin: [],
    chooseFileNameMixin: '',
    /* 多环境配置及token信息*/
    commonValueMixin: '',
    modalShowTitleMixin: '',
    VITE_APP_IMAGE_URL_PRE: '', // 图片前缀地址
    VITE_APP_BASE_URL: '', // 请求的url地址
    VITE_APP_BASE_WS_URL: '', // 请求的url地址
    accessTokenMixin: '', // 请求头的token
    userBaseInfoMixin: {}, // 用户信息
    /* 时间点相关*/
    todayTimeMixin: '',
    currentTimeMixin: '',
    todayTimeMixinLast: '',
    yesterdayTimeMixin: null,
    beforeThreeDateTimeMixin: ''
  })
  onBeforeMount(() => {
    // 读取.env 多坏境里的数据
    state.VITE_APP_IMAGE_URL_PRE = import.meta.env.VITE_APP_BASE_URL
    state.VITE_APP_BASE_URL = import.meta.env.VITE_APP_BASE_URL
    // 获取token和个人基本信息
    state.accessTokenMixin = getToken()
    /* 获取时间点*/
    state.todayTimeMixin = momentMini().startOf('day').format('YYYY-MM-DD HH:mm:ss')
    state.currentTimeMixin = momentMini(new Date()).format('YYYY-MM-DD HH:mm:ss')
    state.todayTimeMixinLast = momentMini().endOf('day').format('YYYY-MM-DD HH:mm:ss')
    state.beforeThreeDateTimeMixin = momentMini().add(-3, 'days').format('YYYY-MM-DD HH:mm:ss')
    state.yesterdayTimeMixin = momentMini().add(-1, 'days').format('YYYY-MM-DD HH:mm:ss')
  })

  /*
   * 清空空的参数项
   * objParam：传入的参数
   * */
  const clearParamsIsNullMixin = (objParam) => {
    const obj = Object.keys(objParam)
    obj.forEach((fItem) => {
      if (objParam[fItem] === '' || objParam[fItem] === null || objParam[fItem] === undefined) delete objParam[fItem]
    })
    return objParam
  }

  /*文件上传*/
  const handleChangeMixin = (file, fileListMixin) => {
    state.fileListMixin = fileListMixin
  }

  const refSettingFile = ref()
  const goUploadFileMixin = () => {
    refSettingFile.value.click()
  }

  const sleepMixin = (time) => {
    return new Promise((resolve) => {
      const timer = setTimeout(() => {
        clearTimeout(timer)
        resolve()
      }, time)
    })
  }

  return {
    clearParamsIsNullMixin,
    handleChangeMixin,
    goUploadFileMixin,
    sleepMixin,
    ...state
  }
}
