<template>
  <el-config-provider :locale="locale" namespace="el" size="small">
    <router-view />
  </el-config-provider>
</template>
<script setup>
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
const locale = $ref(zhCn) //中文
// import en from 'element-plus/lib/locale/lang/en'
// let locale = $ref(en) //english
const basicStore = useBasicStore()
const settings = computed(() => {
  return basicStore.settings
})

onBeforeMount(() => {
  //set tmp token when setting isNeedLogin false
  if (!settings.value.isNeedLogin) useBasicStore().setToken(settings.value.tmpToken)
})
onMounted(() => {
  //lanch the errorLog collection
  useErrorLog()
})
</script>
