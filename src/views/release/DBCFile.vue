<template>
  <div>release</div>
</template>

<script setup>
import { onMounted, getCurrentInstance, watch, ref, toRefs, reactive, computed } from 'vue'
/*
  composition-api
 * 一般根据页面层次来排序 如页面 表格查询和筛选->table的操作
 * 每个模块按：响应数据定义->公用方法->请求方法->页面按钮操作方法 进行排序
 * */

//获取store和router
// import {useRouter} from 'vue-router'
// import {useStore} from 'vuex'
let { proxy } = getCurrentInstance()
// const props = defineProps({
//   name: {
//     require: true,
//     default: "fai",
//     type:String,
//   },
// });
// const state = reactive({
//   levelList: null
// });

//const routes = computed(() => {
//    return proxy.$store.state.permission.routes;
//  });
// watch(() => props.name, (oldValue,newValue) => {
//
//   },
//   { immediate: true }
// );

// const store = useStore()
// const router = useRouter()
// onMounted(()=>{
//   console.log("页面挂载了")
// })
// let helloFunc = () => {
//   console.log("helloFunc");
// };
//导出给refs使用
// defineExpose({ helloFunc });
//导出属性到页面中使用
// let {levelList} = toRefs(state);
</script>

<style scoped lang="scss"></style>
