<template>
  <div class="app-main" :class="{ 'show-tag-view': settings.showTagsView }">
    <router-view v-slot="{ Component }">
      <!--has transition  setting by settings.mainNeedAnimation-->
      <transition v-if="settings.mainNeedAnimation" name="fade-transform" mode="out-in">
        <keep-alive :include="cachedViews">
          <component :is="Component" :key="key" />
        </keep-alive>
      </transition>
      <!-- no transition -->
      <keep-alive v-else :include="cachedViews">
        <component :is="Component" :key="key" />
      </keep-alive>
    </router-view>
  </div>
</template>

<script setup>
import settings from "@/settings"
import { watch } from 'vue'
import { storeToRefs } from 'pinia/dist/pinia'
import { useRoute } from 'vue-router'
import { useBasicStore } from '@/store/basic'
const { cachedViews } = storeToRefs(useBasicStore())
const route = useRoute()
let oldRoute = {}
let cacheGroup = []
const basicStore = useBasicStore()

watch(
    () => route.name,
    () => {
      //缓存组处理
      //first judge cacheGroup and then remove
      if (cacheGroup.length) {
        if (!cacheGroup.includes(route.name)) {
          cacheGroup.forEach((item) => {
            basicStore.delCachedView(item)
          })
        }
      }
      //and then cache the current router config page
      if (route.meta?.cacheGroup) {
        cacheGroup = route.meta?.cacheGroup || []
        cacheGroup.forEach((fItem) => {
          basicStore.addCachedView(fItem)
        })
      }
      //二级路由处理
      if (oldRoute?.name) {
        if (oldRoute.meta?.leaveRmCachePage && oldRoute.meta?.cachePage) {
          basicStore.delCachedView(oldRoute.name)
        }
      }
      if (route.name) {
        if (route.meta?.cachePage) {
          basicStore.addCachedView(route.name)
        }
      }
      oldRoute = JSON.parse(JSON.stringify({ name: route.name, meta: route.meta }))
    },
    { immediate: true }
)
</script>

<style scoped lang="scss">
.app-main {
  padding: var(--app-main-padding);
  /*50 = navbar  */
  position: relative;
  overflow: hidden;
  background-color: var(--app-main-background);
}
.show-tag-view {
  height: calc(100vh - #{var(--nav-bar-height)} - #{var(--tag-view-height)}) !important;
}
.fixed-header + .app-main {
  padding-top: 50px;
}
</style>
