import { createPinia } from 'pinia'
import { createApp } from 'vue'

const app = createApp()

// 创建和导出 Pinia 实例
const store = createPinia()

app.use(store)

export default store