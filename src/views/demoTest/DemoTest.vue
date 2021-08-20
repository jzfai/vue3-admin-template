<template>
  <div id="DemoTest">
     我是一个yemian
  </div>
</template>

<script setup>
import { defineComponent,reactive,toRefs} from 'vue'
// import validMixins from '@/mixins/validMixins.js'
// let state = reactive({stateDemo:1})

//无效
// ...toRefs(state)

//有效
// let {stateDemo}  =state
</script>

<style lang="scss">
  #DemoTest {

  }
</style>

