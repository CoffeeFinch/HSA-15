import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/OuchyNumberView',
    name: 'ouchy',
    component: () => import('../views/OuchyNumberView.vue')
  },
  {
    path: '/BloodWheelScore',
    name: 'bloodWheel',
    component: () => import('../views/BloodWheelView.vue')
  },
  {
    path: '/MagnitudeView',
    name: 'magnitude',
    component: () => import('../views/MagnitudeView.vue')
  },
  {
    path: '/SpinalFluidPongView',
    name: 'spinePong',
    component: () => import('../views/SpinalFluidPongView.vue')
  },
  {
    path: '/PlinkoView',
    name: 'plinko',
    component: () => import('../views/PlinkoCounterView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
