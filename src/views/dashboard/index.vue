<template>
  <div class="scroll-y">
    <div class="mt-10px mb-10px font-bold">switch theme</div>
    <el-button @click="setTheme('base-theme')">切换主题色(base-theme)(default)</el-button>
    <el-button @click="setTheme('lighting-theme')">切换主题色(lighting-theme)</el-button>
    <el-button @click="setTheme('china-red')">切换主题色(china-red)(default)</el-button>
    <el-button @click="setTheme('dark')">切换主题色(dark-theme)</el-button>

    <div class="mt-10px mb-10px font-bold">switch size</div>
    <el-button @click="setSize('large')">large</el-button>
    <el-button @click="setSize('default')">default</el-button>
    <el-button @click="setSize('small')">small</el-button>

    <div class="mt-10px mb-10px font-bold">switch language</div>
    <el-button @click="setLanguage('zh')">zh</el-button>
    <el-button @click="setLanguage('en')">en</el-button>

    <!--example components -->
    <div class="mb-10px font-bold mt-20px">按钮组</div>
    <el-button type="primary" @click="count++">count is: {{ count }}</el-button>
    <el-button type="success" @click="count++">count is: {{ count }}</el-button>
    <el-button type="warning" @click="count++">count is: {{ count }}</el-button>
    <el-button type="danger" @click="count++">count is: {{ count }}</el-button>
    <el-button type="info" @click="count++">count is: {{ count }}</el-button>

    <div class="mt-30px font-bold mb-10px">unocss使用</div>
    <div class="mb-40px w-900px h-10px text-16px">
      <div>
        you can look
        <el-link class="text-red" href="https://uno.antfu.me/" target="_blank">https://uno.antfu.me/</el-link>
        to search you need such as "margin-left:10px" and then get the sortcut(ml-10px)
      </div>
    </div>

    <div class="mt-30px font-bold mb-10px">global var</div>
    {{ showObj }}
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useConfigStore } from '@/store/config'
const { setTheme, theme, setSize, size, setLanguage, language } = useConfigStore()
setTheme(theme)
setSize(size)
setLanguage(language)
const count = ref(0)
const showObj = ref(GLOBAL_VAR)
</script>
