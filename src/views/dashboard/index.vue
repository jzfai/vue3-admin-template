<template>
  <div class="scroll-y">
    <el-button @click="toggleHtmlClass('dark')">切换主题色(dark-theme)</el-button>
    <el-button @click="toggleHtmlClass('lighting-theme')">切换主题色(lighting-theme)</el-button>
    <el-button @click="toggleHtmlClass('base-theme')">切换主题色(base-theme)(default)</el-button>
    <el-button @click="toggleHtmlClass('china-red')">切换主题色(china-red)(default)</el-button>
    <p>
      See
      <a href="https://element-plus.org" target="_blank">element-plus</a>
      for more information.
    </p>
    <!-- example components -->
    <el-button @click="toast">El Message</el-button>
    <el-button type="primary" @click="count++">count is: {{ count }}</el-button>
    <el-button type="success" @click="count++">count is: {{ count }}</el-button>
    <el-button type="warning" @click="count++">count is: {{ count }}</el-button>
    <el-button type="danger" @click="count++">count is: {{ count }}</el-button>
    <el-button type="info" @click="count++">count is: {{ count }}</el-button>
    <br />
    <el-input v-model="input" style="width: 200px; margin: 20px" />
    <el-tag>Tag 1</el-tag>

    <br />
    <el-date-picker v-model="curDate" type="date" placeholder="Pick a day"></el-date-picker>

    <a
      href="https://element-plus.gitee.io/en-US/guide/theming.html"
      style="color: var(--el-color-primary)"
      target="_blank"
    >
      Doc of element-plus theme
    </a>
    <!--    <div class="dashboard-container mt-5">-->
    <!--      <div class="dashboard-text">name: {{ username }}</div>-->
    <!--    </div>-->
    <!--    <div>update element-plus to 1.2.+, add svg icon, icon-font is abandoned</div>-->
    <!--    <i class="el-icon-add-location">abandoned</i>-->
    <!--    <div>update element-plus version to 2.0.1 release version the size options change to "large default small"</div>-->
    <!--    <div class="mt-20px">global element svg
     icon</div>-->
    <!--    <ElSvgIcon name="Edit" :size="30" color="red" />-->
    <!--    <div class="mt-20px">this is var from vite.config.js define</div>-->
    <!--    <div>{{ showObj }},{{ showObjString }}</div>-->
    <!--    -->
    <div class="mt-5px text-18px font600">unocss</div>
    <!-- bg-#fff   -->
    <div class="mb-40px w-900px h-10px text-16px">
      <div>
        you can look
        <el-link class="text-red" href="https://uno.antfu.me/" target="_blank">https://uno.antfu.me/</el-link>
        to search you need such as "margin-left:10px" and then get the sortcut(ml-10px)
      </div>
    </div>

    <div class="mt-3px mb1">
      <div class="mb-1px">### How to migrate</div>
      <div class="mb-1px">See how to migrate from **ElementUI** to **Element Plus** in our dedicated discussion:</div>
      <div class="mb-1px">- For English: [#5658](https://github.com/element-plus/element-plus/discussions/5658)</div>
      <div class="mb-1px">- 简体中文: [#5657](https://github.com/element-plus/element-plus/discussions/5657)</div>
    </div>
  </div>
</template>
<script setup>
import { ElMessage } from 'element-plus'

const count = ref(0)
const input = ref('element-plus')

const curDate = ref('')

const toast = () => {
  ElMessage.success('Hello')
}
import { toggleHtmlClass } from '@/theme/utils'

import { useUserStore } from '@/store/user'

const userStore = useUserStore()
const username = computed(() => {
  return userStore.username
})

const showObj = ref(GLOBAL_VAR)
// eslint-disable-next-line no-undef
const showObjString = ref(GLOBAL_STRING)
</script>
