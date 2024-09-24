import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import ContactView from '@/views/ContactView.vue';
import TransformingLivesView from '@/views/TransformingLivesView.vue';

const router = createRouter({
history: createWebHistory(import.meta.env.BASE_URL),
routes: [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactView
  },
  {
    path: '/community',
    name: 'Community',
    component: TransformingLivesView
  }
]
// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: HomeView
//     },
//     {
//       path: '/about',
//       name: 'About',
//       component: () => import('@/views/AboutView.vue')
//     },
//     {
//       path: '/contact',
//       name: 'Contact',
//       component: () => import('@/views/ContacView.vue')
//     },
//     {
//       path: '/solarPV',
//       name: 'SolarPV',
//       component: () => import('@/views/SolarPV.vue')
//     },
//     {
//       path: '/projects',
//       name: 'Projects',
//       component: () => import('@/views/Projects.vue')
//     },
//     {
//       path: '/community',
//       name: 'Community',
//       component: () => import('@/views/TransformingLives.vue')
//     },
//   ];
  
  })
export default router
