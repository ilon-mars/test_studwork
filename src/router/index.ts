import { createRouter, createWebHistory } from 'vue-router';

import { RouteName } from '@/enums/RouteName';
import StarshipListView from '@/views/StarshipListView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: RouteName.STARSHIP_LIST,
      component: StarshipListView
    },
    {
      path: '/:id',
      name: RouteName.STARSHIP,
      component: () => import('@/views/StarshipView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: RouteName.NOT_FOUND,
      component: () => import('@/views/NotFound.vue')
    }
  ]
});

export default router;
