<template>
  <router-view v-slot="{ Component }">
    <div>
      <el-alert :closable="false" title="menu 1">
        <component :is="Component" />
      </el-alert>
    </div>
  </router-view>
</template>
