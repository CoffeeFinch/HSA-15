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
    path: '/SpinalFluidPongView',
    name: 'spinePong',
    component: () => import('../views/SpinalFluidPongView.vue')
  },
  {
    path: '/PlinkoCounterView',
    name: 'plinko',
    component: () => import('../views/PlinkoCounterView.vue')
  },
  {
    path: '/TwoTruthsOneDieView',
    name: 'TwoTruthsOneDie',
    component: () => import('../views/TwoTruthsOneDieView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
