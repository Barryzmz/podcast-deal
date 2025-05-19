import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

//創建一個應用
const app = createApp(App)
//使用路由器
app.use(router)

app.use(ElementPlus)
//掛載整個應用到app容器中
app.mount('#app')
