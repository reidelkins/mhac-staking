import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Plane from '@/views/Plane.vue';
import Manager from '@/views/Manager.vue';
import Home from '@/views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/plane',
    name: 'Plane',
    component: Plane,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
