import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)
import router from './router'
import '@/styles/index.scss' // global css
//import element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
app.use(ElementPlus)

//svg-icon
//import svg-icon doc in  https://github.com/anncwb/vite-plugin-svg-icons/blob/main/README.zh_CN.md
import 'virtual:svg-icons-register'
import svgIcon from '@/icons/SvgIcon.vue'
app.component('SvgIcon', svgIcon)

//global mount moment-mini
// import $momentMini from 'moment-mini'
// app.config.globalProperties.$momentMini = $momentMini
//import global directive（unplugin-vue-components auto scan）
import directive from '@/directives'
directive(app)
//import router intercept
import './permission'
//element svg icon(unplugin-vue-components auto scan)
// import ElSvgIcon from '@/components/ElSvgIcon.vue'
// app.component('ElSvgIcon', ElSvgIcon)

//import theme
import './theme/index.scss'

//axios cancel req
window.__axiosPromiseArr = []
//import unocss
import 'uno.css'

//pinia
import { createPinia } from 'pinia'
const pinia = createPinia()
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router).mount('#app')
