// 創建一個路由器並暴露出去
import {createRouter, createWebHistory} from 'vue-router'

//創建路由器
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: () => import('../views/FrontView.vue'),
            children: [
                {
                    path: '',
                    name: 'home',
                    component: () => import('../views/HomeView.vue'),
                },
                {
                    path: 'about',
                    name: 'about',
                    component: () => import('../views/AboutView.vue'),
                },
                {
                    path: 'podcaster',
                    name: 'podcaster',
                    component: () => import('../views/SearchPodcaster.vue'),
                },
                {
                    path: 'brand',
                    name: 'brand',
                    component: () => import('../views/SearchBrand.vue'),
                },
                {
                    path: 'podcasterpage',
                    name: 'podcasterpage',
                    component: () => import('../views/PodcasterPage.vue'),
                },
            ]
        },
    ]
})

//暴露出去router
export default router