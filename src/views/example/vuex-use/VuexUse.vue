<template>
  <div>
    <div>getter</div>
    <el-button @click="getterFunc">获取getter:{{ getterValue }}</el-button>
    <div class="mt-20px">commit</div>
    <el-button @click="c_openSideBar">c_openSideBar</el-button>
    <el-button @click="c_closeSideBar">c_closeSideBar</el-button>
    <div class="mt-20px">action</div>
    <el-button @click="openSideBar">openSideBar</el-button>
    <el-button @click="closeSideBar">closeSideBar</el-button>
  </div>
</template>

<script setup>
const basicStore = useBasicStore()
/*getter*/
const getterValue = ref(null)
const getterFunc = () => {
  getterValue.value = basicStore.cachedViews
}

/*mutations*/
/*建议commit用M_开头 action用A_开头*/

const c_openSideBar = () => {
  basicStore.setSidebarOpen(true)
}
const c_closeSideBar = () => {
  basicStore.setSidebarOpen(false)
}
/*actions*/
const openSideBar = () => {
  basicStore.A_sidebar_opened(true)
}
const closeSideBar = () => {
  basicStore.A_sidebar_opened(false)
}
</script>

<style scoped lang="scss"></style>
