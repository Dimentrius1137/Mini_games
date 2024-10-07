import { createRouter, createWebHistory } from 'vue-router'
import Snake from '../pages/Snake.vue'
import Menu from '../pages/Menu.vue'
import Auth from '../pages/Auth.vue'
import JournalUpdates from '../pages/JournalUpdates.vue'
import Page404 from '../pages/Page404.vue'
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
    },
    {
      name: 'updates',
      path: '/updates',
      component: JournalUpdates
    },
    {
      path: '/:pathMatch(.*)*',
      component: Page404
    }
  ],
  linkActiveClass: 'activeLink',
  linkExactActiveClass: 'activeLink',
})

export default router
