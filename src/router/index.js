import { createRouter, createWebHistory } from 'vue-router'
// import home from '../components/home.vue'
import main from '../views/main.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'main',
      component: main,
      children:[

      ]
    },
    // 添加其他路由规则
  ]
})

export default router