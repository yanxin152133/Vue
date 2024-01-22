import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue' // 首页
import TemplateSyntax from '../views/TemplateSyntax.vue' // 模板语法
import ConditionalRendering from '../views/ConditionalRendering.vue' // 条件渲染
import ListRendering from '../views/ListRendering.vue' //列表渲染
import FormInputBindings from "../views/FormInputBindings.vue"  //表单输入绑定

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
        },
        {
            path: '/ConditionalRendering',
            name: 'ConditionalRendering',
            component: ConditionalRendering
        },
        {
            path: '/ListRendering',
            name: 'ListRendering',
            component: ListRendering
        },
        {
            path: '/FormInputBindings',
            name: 'FormInputBindings',
            component: FormInputBindings
        }

    ]
})

export default router
