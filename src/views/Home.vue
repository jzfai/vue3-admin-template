<!--suppress HtmlUnknownAttribute, JSUnresolvedFunction, ES6UnusedImports -->
<template>
  <div class="home">
    <img alt="Vue logo"
         src="../assets/logo.png" />
    <el-button size="medium">elment相关</el-button>
    <HelloWorld ref="helloWorld"
                :name="'jzfai'" />
    <el-button @click="getRefComponent">getRefComponent</el-button>
    <input type="text"
           ref="refInput" />
  </div>
</template>

<script setup>
import HelloWorld from '@/components/HelloWorld.vue'
import {
  onMounted,
  getCurrentInstance,
  ref,
  defineExpose,
  unref,
} from 'vue'
// let props = defineProps({});
//proxy类似this
let { proxy } = getCurrentInstance()
console.log(
  'moment',
  proxy.$momentMini(new Date()).format('YYYY-MM-DD HH:mm:ss')
)
const ref1 = ref('1')
//https://www.zhihu.com/question/459995651/answer/1892234192
const helloWorld = ref(null)
defineExpose({ helloWorld })
onMounted(() => {
  console.log('refs', helloWorld.value.helloFunc())
  console.log(ref1.value)
  //axiosReqMethod();
  console.log('获取变量', process.env)
})
let axiosReqMethod = () => {
  proxy
    .$axiosReq({
      url: 'rxdrepairsaas-basiccenter/option/vehicleCategoryOption',
      method: 'get',
      bfLoading: true,
    })
    .then((res) => {
      console.log(res, '返回的数据')
    })
}
</script>
