<template>
  <div>
    <div class="mb-10px">DeepRouterKeepAlive.vue</div>
    <el-input v-model="testInput" class="w300 mb-3" placeholder="input test keepAlive(DeepRouterKeepAlive)" />
    <!--  three router   -->
    <router-view v-slot="{ Component }">
      <keep-alive :include="cachedViewsDeep">
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<script setup>
defineOptions({ name: 'DeepRouterKeepAlive' })

const testInput = ref('')
const basicStore = useBasicStore()
const cachedViewsDeep = computed(() => {
  return basicStore.cachedViewsDeep
})
</script>

<style scoped lang="scss"></style>
