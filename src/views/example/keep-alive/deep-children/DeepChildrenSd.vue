<template>
  <div class="mt-2">DeepChildrenSd.vue third router render</div>
  <el-input v-model="testInput" placeholder="input test keepAlive(DeepChildren)" class="widthPx-300" />
</template>

<script setup name="DeepChildrenSd">
const $store = useStore()
let testInput = ref('')
//$store.commit('app/M_ADD_CACHED_VIEW_DEEP', 'DeepChildren')
</script>

<style scoped lang="scss"></style>
