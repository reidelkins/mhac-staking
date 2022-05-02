import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Pond from '@/views/Pond.vue';
import Manager from '@/views/Manager.vue';
import Home from '@/views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/pond',
    name: 'Pond',
    component: Pond,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
