// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [

  // RUTA DE LA PAGINA DE LOGIN
  
  {
    path: '/',
    component: () => import('@/layouts/login/Default.vue'),
    children: [
      {
        path: '',
        name: 'Login',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Login.vue'),
      }
    ],
  },

  // RUTA DE LA PAGINA DE HOME

  {
    path: '/home',
    component: () => import('@/layouts/home/Default.vue'),
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: '/users',
        name: 'Users',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: '/tools',
        name: 'Tools',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Login.vue'),
      },
      {
        path: '/preview',
        name: 'Preview',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      }
    ],
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
