import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'

if (import.meta.env.VITE_USE_MOCK === 'true') {
  import('./service/mock')
}

//創建一個應用
const app = createApp(App)
//使用路由器
app.use(router)

app.use(ElementPlus)
app.component('VueLoading', Loading)
//掛載整個應用到app容器中
app.mount('#app')
