<template>
  <div>
    <div>ref1:{{ ref1 }},ref2:{{ ref2 }}</div>
    <el-button @click="hookExample">执行hook方法</el-button>
  </div>
</template>

<script setup>
import testHooks from '@/hooks/useTest'
const { ref1, ref2, hooksFunc } = testHooks()
const hookExample = () => {
  hooksFunc()
}
</script>

<style scoped lang="scss"></style>
