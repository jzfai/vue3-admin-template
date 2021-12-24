<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ username }}</div>
    <div>update element-plus to 1.2.+, add svg icon, icon-font is abandoned</div>
    <i class="el-icon-add-location">abandoned</i>
    <div>
      <el-icon>
        <Svg.Edit></Svg.Edit>
      </el-icon>
    </div>
    <div class="mt-2">this is var from vite.config.js define</div>
    <div>{{ showObj }},{{ showObjString }}</div>
  </div>
</template>

<script setup>
import * as Svg from '@element-plus/icons-vue'
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
let store = useStore()
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
