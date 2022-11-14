import { ElMessage } from 'element-plus'
export const elMessage = (message, type) => {
  ElMessage({
    showClose: true,
    message: message || '成功',
    type: type || 'success',
    center: false
  })
}
export const sleepTimeout = (time) => {
  return new Promise((resolve) => {
    const timer = setTimeout(() => {
      clearTimeout(timer)
      resolve(null)
    }, time)
  })
}

export const useCommon = () => {
  const state = reactive({
    totalPage: 0,
    startEndArr: [],
    searchForm: {},
    dialogTitle: '',
    detailDialog: false
  })
  return {
    ...toRefs(state)
  }
}
