import { createRouter, createWebHistory } from 'vue-router'
import Snake from '../pages/Snake.vue'
import Menu from '../pages/Menu.vue'
import Auth from '../pages/Auth.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'menu',
      path: '/',
      component: Menu
    },
    {
      name: 'auth',
      path: '/auth',
      component: Auth
    },
    {

      name: 'games',
      path: '/games',
      component: Snake
    }
    
  ],
  linkActiveClass: 'activeLink',
  linkExactActiveClass: 'activeLink',
})

export default router
