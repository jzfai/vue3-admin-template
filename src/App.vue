<template>
  <el-config-provider :locale="locale" namespace="el" size="small">
    <router-view />
  </el-config-provider>
</template>
<script setup>
import { setToken } from '@/utils/auth'

import zhCn from 'element-plus/lib/locale/lang/zh-cn'
let locale = $ref(zhCn) //中文

// import en from 'element-plus/lib/locale/lang/en'
// let locale = $ref(en) //english

const appStore = useBasicStore()
const settings = computed(() => {
  return appStore.settings
})
onBeforeMount(() => {
  //set tmp token when setting isNeedLogin false
  if (!settings.value.isNeedLogin) setToken(settings.value.tmpToken)
})
</script>
