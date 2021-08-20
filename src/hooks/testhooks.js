import { onBeforeUnmount, onMounted, ref } from 'vue'
export default  function() {
  const ref1 = ref(-1)
  const ref2 = ref(-1)
  onMounted(()=>{
    console.log("hooks执行了");
  })
  return {
    ref1,
    ref2
  }
}
