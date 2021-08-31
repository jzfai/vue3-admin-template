//https://blog.csdn.net/weixin_34865745/article/details/113992767
import { onMounted, ref } from 'vue'
export default function () {
  const ref1 = ref(-1)
  const ref2 = ref(-1)
  onMounted(() => {
    console.log('hooks执行了')
  })
  const hooksFunc = () => {
    return 'hook方法执行了'
  }
  return {
    ref1,
    ref2,
    hooksFunc
  }
}
