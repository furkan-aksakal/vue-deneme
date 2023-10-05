// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/components/TabBar.vue'),
    children: [
      {
        path: '',

        component: () => import('@/views/Home.vue'),
      },
      {
        path: 'i18n',
        component: () => import('@/views/i18n.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
