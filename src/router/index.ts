import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/home-view.vue'
import ErrorView from '@/views/error-view.vue'
import TeamView from '@/views/team-view.vue'
import ShopView from '@/views/shop-view.vue'
import TracksView from '@/views/tracks-view.vue'
import CartView from '@/views/cart-view.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/team',
      name: 'team',
      component: TeamView,
    },
    {
      path: '/shop',
      name: 'shop',
      component: ShopView,
    },
    {
      path: '/tracks',
      name: 'tracks',
      component: TracksView,
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView,
    },
    {
      path: '/error',
      name: 'error',
      component: ErrorView,
    },
  ]
})

export default router
