<template>
  <div class="mt-10px">
    <div class="mb-10px">roles 页面权限控制</div>
    <div>{{ roles }}</div>
    <el-button @click="freshRoles(['editor'])">roles切换为editor</el-button>
    <el-button @click="freshRoles(['admin'])">roles切换为admin</el-button>

    <div class="mb-10px">codes 页面权限控制</div>
    <div>{{ codes }}</div>
    <el-button @click="freshCodes([1])">Codes切换为[1]</el-button>
    <el-button @click="freshCodes([16, 9, 10, 11, 12, 13, 15])">C odes切换为[16]</el-button>
  </div>
</template>

<script setup>
const { codes, roles } = useBasicStore()

const freshRoles = (rolesArr) => {
  roles.value = rolesArr
  freshRouter({ roles: rolesArr })
}

const freshCodes = (codesArr) => {
  codes.value = codesArr
  freshRouter({ codes: codesArr })
}
</script>

<style scoped lang="scss"></style>
