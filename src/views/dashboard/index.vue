<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ username }}</div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

let store = useStore()
const username = computed(() => {
  return store.state.user.username
})
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
