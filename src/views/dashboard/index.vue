<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ username }}</div>
    <div>update element-plus to 1.2.+, add svg icon, icon-font is abandoned</div>
    <i class="el-icon-add-location">abandoned</i>
    <div>update element-plus version to 2.0.1 release version the size options change to "large default small"</div>
    <div>
      <el-icon>
        <Svg.Edit></Svg.Edit>
      </el-icon>
    </div>
    <div class="mt-2">this is var from vite.config.js define</div>
    <div>{{ showObj }},{{ showObjString }}</div>

    <div class="mt-3 mb-1">
      <div class="mb-1">### How to migrate</div>
      <div class="mb-1">See how to migrate from **ElementUI** to **Element Plus** in our dedicated discussion:</div>
      <div class="mb-1">- For English: [#5658](https://github.com/element-plus/element-plus/discussions/5658)</div>
      <div class="mb-1">- 简体中文: [#5657](https://github.com/element-plus/element-plus/discussions/5657)</div>
    </div>
  </div>
</template>

<script setup>
import * as Svg from '@element-plus/icons-vue'
let store = useStore()
// useTest()
const username = computed(() => {
  return store.state.user.username
})
const showObj = ref(GLOBAL_VAR)
// eslint-disable-next-line no-undef
const showObjString = ref(GLOBAL_STRING)
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    //margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
