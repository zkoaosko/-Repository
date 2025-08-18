import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login.vue'
import BarChart from '@/views/BarChart.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
  { path: '/', name: 'Login', component: Login },
  { path: '/bar-chart', name: 'BarChart', component: BarChart },
  ],
})

export default router
