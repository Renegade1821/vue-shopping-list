import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import List from '@/views/List.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'List',
    component: List,
  },
  {
    path: '/history',
    name: 'History',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/History.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
