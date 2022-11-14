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
