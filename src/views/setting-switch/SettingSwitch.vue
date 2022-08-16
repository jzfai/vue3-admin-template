<template>
  <div class="scroll-y">
    <h3 class="mb-20px">props operate demo of settings.js</h3>
    <div class="rowSS">
      <div class="mb-10px">
        page layout related
        <div class="mt-20px">
          sidebarLogo：
          <el-switch v-model="appStore.settings.sidebarLogo" />
        </div>
        <div class="mt-30px">
          showNavbarTitle：
          <el-switch v-model="appStore.settings.showNavbarTitle" />
        </div>
        <div class="mt-30px">
          ShowDropDown：
          <el-switch v-model="appStore.settings.ShowDropDown" />
        </div>
        <div class="mt-30px">
          showHamburger：
          <el-switch v-model="appStore.settings.showHamburger" />
        </div>
        <div class="mt-30px">
          showLeftMenu：
          <el-switch v-model="appStore.settings.showLeftMenu" />
        </div>
        <div class="mt-30px">
          showTagsView：
          <el-switch v-model="appStore.settings.showTagsView" />
        </div>
        <div class="mt-30px">
          showTopNavbar：
          <el-switch v-model="appStore.settings.showTopNavbar" />
        </div>
      </div>

      <div class="mb-10px ml-60px">
        page animation related
        <div class="mt-20px">
          mainNeedAnimation：places to "settings file" for setting
          <!-- <el-switch v-model="appStore.settings.mainNeedAnimation" />-->
        </div>
        <div class="mt-30px">
          isNeedNprogress：
          <el-switch v-model="appStore.settings.isNeedNprogress" />
        </div>
      </div>
    </div>
    <div class="mt-20px mb-10px">store.commit to change</div>
    <el-button type="primary" @click="testChangeSettings">testChangeSettings</el-button>
  </div>
</template>

<script setup>
import { useAppStore } from '@/store/app'

const settings = computed(() => {
  return appStore.settings || {}
})

const appStore = useAppStore()
const testChangeSettings = () => {
  appStore.M_settings({ sidebarLogo: !settings.value.sidebarLogo })
}

const source = ref(false)
const sourceFun = () => {
  source.value = !source.value
}
const handle = () => {
  new Promise((resolve, reject) => {
    reject('reject promise')
  }).then((res) => {
    console.log('ok')
  })
}

const flag = ref(null)

const consoleErrorFun = () => {
  console.error('console.error')
}

const normalError = () => {
  throw new Error(' throw new Error("")\n')
}
const { proxy } = getCurrentInstance()
const updateReq = () => {
  return proxy
    .$axiosReq({
      // baseURL: 'https://github.jzfai.top/micro-service-test',
      url: '/integration-front/brand/updateBy',
      data: { id: 'fai' },
      method: 'put',
      isParams: true,
      bfLoading: true
    })
    .then(() => {})
  // .catch((err) => {
  //   console.log('接口catch', err)
  // })
}
</script>

<style scoped lang="scss"></style>
