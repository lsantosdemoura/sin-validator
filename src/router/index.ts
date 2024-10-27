import { createRouter, createWebHistory } from 'vue-router'
import SINValidator from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: SINValidator,
    },
  ],
})

export default router
