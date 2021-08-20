<template>
  <div class="app-main">
    <router-view :key="key" v-slot="{ Component }">
      <transition name="fade-transform" mode="out-in">
        <!--此处是vue3.0的变化-->
        <div>
          <component :is="Component" />
        </div>
      </transition>
    </router-view>
  </div>

</template>

<script setup>
import {onMounted, getCurrentInstance, watch,ref,toRefs,computed,reactive} from "vue";
//获取store和router
// import {useRouter} from 'vue-router'
// import {useStore} from 'vuex'
let {proxy} = getCurrentInstance();
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

// string.instanceOf String
const key = computed(() => {
  return proxy.$route.path
 });

// const store = useStore()
// const router = useRouter()
// onMounted(()=>{
//   let string=[]
//   // console.log(proxy.$route)
// })
// let helloFunc = () => {
//   console.log("helloFunc");
// };
//导出给refs使用
// defineExpose({ helloFunc });
//导出属性到页面中使用
// let {levelList} = toRefs(state);
</script>


<style scoped>
  .app-main {
    /*50 = navbar  */
    min-height: calc(100vh - 50px);
    width: 100%;
    position: relative;
    overflow: hidden;
  }
  .fixed-header+.app-main {
    padding-top: 50px;
  }
</style>

<style lang="scss">
  // fix css style bug in open el-dialog
  .el-popup-parent--hidden {
    .fixed-header {
      padding-right: 15px;
    }
  }
</style>
