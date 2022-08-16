<template>
  <div class="mt-20px">DeepChildren.vue third router render</div>
  <el-input v-model="testInput" placeholder="input test keepAlive(DeepChildren)" class="w300" />
</template>

<script setup>
defineOptions({ name: 'DeepChildren' })
let testInput = ref('')

onMounted(() => {
  console.log('DeepChildren')
})
</script>

<style scoped lang="scss"></style>
