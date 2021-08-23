<template>
  <!--<svg-icon icon-class="assign"-->
            <!--class="icon-class" />-->
  <div>
    icon
    <svg-icon icon-class="assign" style="color:red;"/>
  </div>
  <!--<el-button type="primary">element-btn1111111111111111111111111</el-button>-->
</template>

<script  setup>
import { onMounted } from 'vue'
import testhooks from '@/hooks/testhooks'
onMounted(() => {
  let { ref1 } = testhooks()
  console.log(ref1)
})
</script>

<style lang="scss">
#test-index {
}
.icon-class {
  font-size: 100px;
  color: red;
}
</style>

