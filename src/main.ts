import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// createApp(App).mount('#app')
//創建一個應用
const app = createApp(App)
//使用路由器
app.use(router)
//掛載整個應用到app容器中
app.mount('#app')
