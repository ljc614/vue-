import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
import router from './router'


createApp(App).use(ElementPlus).use(router).use(store).mount('#app')


