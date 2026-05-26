import { createRouter, createWebHistory } from 'vue-router'
import PortadaView from '../views/2026/PortadaView.vue'
import ContenidosView from '../views/2026/contenidos/ContenidosView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'portada',
      component: PortadaView,
    },
    {
      path: '/contenidos/:key?',
      name: 'contenidos',
      component: ContenidosView,
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
