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
                    path: 'profileAndDealPage',
                    name: 'ProfileAndDealPage',
                    component: () => import('../views/ProfileAndDealPage.vue'),
                    children: [
                        {
                            path: '',
                            name: 'AdvertorialList',
                            component: () => import('../components/AdvertorialList.vue'),
                        },
                        {
                            path: 'advertorial/:id',
                            name: 'Advertorial',
                            component: () => import('../components/Advertorial.vue'),
                            props: route => ({
                                id: route.params.id
                            })
                        }
                    ]
                }
            ]
        },
    ],

    scrollBehavior(to, from, savedPosition) {
        // 1. 前進/後退時保留原本位置
        if (savedPosition) {
            return savedPosition
        }
        // 2. 只有在 name 為 'Advertorial' 的頁面才滾到頂端
        if (to.name === 'Advertorial') {
            return { left: 0, top: 0 }
        }
        // 3. 其他情況不做任何改動（維持目前滾動）
            return false
    }
})

//暴露出去router
export default router