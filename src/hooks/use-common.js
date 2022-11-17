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

//深拷贝
export function cloneDeep(source, hash = new WeakMap()) {
  if (typeof source !== 'object' || source === null) {
    return source
  }
  if (hash.has(source)) {
    return hash.get(source)
  }
  const target = Array.isArray(source) ? [] : {}
  Reflect.ownKeys(source).forEach((key) => {
    const val = source[key]
    if (typeof val === 'object' && val != null) {
      target[key] = cloneDeep(val, hash)
    } else {
      target[key] = val
    }
  })
  return target
}

const { toClipboard } = useClipboard()
export const copyValueToClipboard = (value) => {
  toClipboard(JSON.stringify(value))
  ElMessage.success('复制成功')
}
