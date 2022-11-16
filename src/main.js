import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

import router from './router'
import '@/styles/index.scss' // global css

//svg-icon
//import svg-icon doc in  https://github.com/anncwb/vite-plugin-svg-icons/blob/main/README.zh_CN.md
import 'virtual:svg-icons-register'
import svgIcon from '@/icons/SvgIcon.vue'

//global mount moment-mini
// import $momentMini from 'moment-mini'
// app.config.globalProperties.$momentMini = $momentMini
//import global directive（unplugin-vue-components auto scan）
import directive from '@/directives'
//import router intercept
import './permission'
//element svg icon(unplugin-vue-components auto scan)
// import ElSvgIcon from '@/components/ElSvgIcon.vue'
// app.component('ElSvgIcon', ElSvgIcon)

//import theme
import './theme/index.scss'
//import unocss
import 'uno.css'

//pinia
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

//import element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
app.use(ElementPlus)
//按需导入
// import ElementPlus from '@/lib/element-plus'
// ElementPlus(app)

app.component('SvgIcon', svgIcon)
directive(app)

//axios cancel req
window.__axiosPromiseArr = []
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router).mount('#app')
