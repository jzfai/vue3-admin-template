<template>
  <el-config-provider :locale="zhCn" size="small">
    <router-view />
  </el-config-provider>
</template>
<script setup>
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import { setToken } from '@/utils/auth'
import { onBeforeMount, computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
let settings = computed(() => {
  return store.state.app.settings
})
onBeforeMount(() => {
  //set tmp token when setting isNeedLogin false
  if (!settings.value.isNeedLogin) setToken(settings.value.tmpToken)
})
</script>
