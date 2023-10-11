import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'    // 首页
import TemplateSyntax from '../views/TemplateSyntax.vue'   // 模板语法

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/TemplateSyntax',
      name: 'TemplateSyntax',
      component: TemplateSyntax
    }
  ]
})

export default router
