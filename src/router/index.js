import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

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
      name: 'About',
      component: () => import('@/views/AboutView.vue')
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('@/views/ContacView.vue')
    },
    {
      path: '/solarPV',
      name: 'SolarPV',
      component: () => import('@/views/SolarPV.vue')
    },
    {
      path: '/projects',
      name: 'Projects',
      component: () => import('@/views/Projects.vue')
    },
    {
      path: '/community',
      name: 'Community',
      component: () => import('@/views/TransformingLives.vue')
    },
  ];
  const: router = createRouter({
    history: createWebHistory(), // This enables history mode
    router
  })
});

export default router
