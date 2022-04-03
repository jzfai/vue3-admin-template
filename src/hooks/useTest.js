export default function () {
  const ref1 = ref('hook数据')
  const ref2 = ref('hook数据ref2')
  onMounted(() => {
    console.log('hooks onMounted')
  })
  const hooksFunc = () => {
    alert('我是hook里的方法')
    return 'hook方法执行了'
  }
  return {
    ref1,
    ref2,
    hooksFunc
  }
}
