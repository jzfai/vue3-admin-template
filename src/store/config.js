import { defineStore } from 'pinia'
import settings from '@/settings'
import { toggleHtmlClass } from '@/theme/utils'
import { i18n } from '@/lang'
const { locale } = i18n.global
export const useConfigStore = defineStore('config', {
  state: () => {
    return {
      language: settings.defaultLanguage,
      theme: settings.defaultTheme,
      size: settings.defaultSize
    }
  },
  persist: {
    storage: localStorage,
    paths: ['language', 'theme', 'size']
  },
  actions: {
    setTheme(data) {
      this.theme = data
      toggleHtmlClass(data)
    },
    setSize(data) {
      this.size = data
    },
    setLanguage(lang) {
      this.language = lang
      locale.value = lang
    }
  }
})
