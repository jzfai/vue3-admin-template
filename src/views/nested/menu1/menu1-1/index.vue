<template>
  <div style="padding: 15px">
    <router-view v-slot="{ Component }">
      <el-alert :closable="false" title="menu 1-1" type="success">
        <component :is="Component" />
      </el-alert>
    </router-view>
  </div>
</template>
