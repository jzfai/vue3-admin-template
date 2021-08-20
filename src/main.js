import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)
//引入路由
import router from "./router";
//引入样式
import '@/styles/index.scss' // global css
//引入vuex
import store from "./store";
app.use(store)
//引入element-plus
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
app.use(ElementPlus, { size: "mini" })

//引入路由拦截器
import "./permission"

app.use(router).mount("#app");
