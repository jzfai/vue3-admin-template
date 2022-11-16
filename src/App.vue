<template>
  <el-config-provider :locale="locale" namespace="el" size="small">
    <router-view />
  </el-config-provider>
</template>
<script setup>
import { onBeforeMount, onMounted } from 'vue'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import { storeToRefs } from 'pinia/dist/pinia'
import { useBasicStore } from '@/store/basic'
import { useErrorLog } from '@/hooks/use-error-log'
const locale = $ref(zhCn) //中文
// import en from 'element-plus/lib/locale/lang/en'
// let locale = $ref(en) //english
const { settings } = storeToRefs(useBasicStore())
onBeforeMount(() => {
  //set tmp token when setting isNeedLogin false
  if (!settings.value.isNeedLogin) useBasicStore().setToken(settings.value.tmpToken)
})
onMounted(() => {
  //lanch the errorLog collection
  useErrorLog()
})
</script>
<style lang="scss">
//修改进度条样式
#nprogress .bar {
  background: var(--sidebar-logo-color) !important;
}
</style>
