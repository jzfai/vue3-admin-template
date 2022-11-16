import { reactive, toRefs } from 'vue'

//复制文本
import useClipboard from 'vue-clipboard3'
import { ElMessage } from 'element-plus'

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
const { toClipboard } = useClipboard()
export const copyValueToClipboard = (value) => {
  toClipboard(JSON.stringify(value))
  ElMessage.success('复制成功')
}
