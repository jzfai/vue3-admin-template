<template>
  <div class="mt-20px">DeepChildrenSd.vue third router render</div>
  <el-input v-model="testInput" placeholder="input test keepAlive(DeepChildren)" class="w300" />
</template>

<script setup>
defineOptions({ name: 'DeepChildrenSd' })
let testInput = ref('')
</script>

<style scoped lang="scss"></style>
