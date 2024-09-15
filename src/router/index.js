import HomeView from '@/views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: ()=> import('@/views/AboutView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: ()=> import('@/views/ContacView.vue')
    },
    {
      path: '/solarPV',
      name: 'solarPV',
      component: ()=> import('@/views/SolarPV.vue')
    },
    {
      path: '/projects',
      name: 'projects',
      component: ()=> import('@/views/Projects.vue')
    },
  ]
})

export default router
