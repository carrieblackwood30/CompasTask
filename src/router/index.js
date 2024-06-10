import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/:name/',
      component: () => import('@/views/DescriptionPath.vue')
    },{
      path:'/agreement',
      name: 'agreement',
      component: () => import("@/views/agreement.vue")
    }
  ]
})

export default router
