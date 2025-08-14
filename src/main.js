import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 引入本地下载的 Mapbox Directions 插件
import './assets/css/mapbox-gl-directions-4.1.1.css'
import './assets/js/mapbox-gl-directions-4.1.1'
import './assets/less/reset.less'

export const app = createApp(App)
app.use(router)
app.use(ElementPlus)

app.mount('#app')
