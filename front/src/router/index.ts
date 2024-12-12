import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import BrowserView from '../views/BrowserView.vue'
import ProtectedView from '@/views/ProtectedView.vue';
import NotFoundView from '@/views/NotFoundView.vue';

const publicRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/browser',
    meta: { requiresAuth: false },
    children: [
      {
        path: '/browser',
        name: 'Browser',
        component: BrowserView,
        meta: { requiresAuth: false },
      }
    ],
  },
];

const protectedRoutes: Array<RouteRecordRaw> = [
  {
    path: '/app',
    redirect: '/protected',
    meta: { requiresAuth: true },
    children: [
      {
        path: '/protected',
        name: 'Protected',
        component: ProtectedView,
        meta: { requiresAuth: true },
      }
    ],
  },
];

const fallbackRoute: RouteRecordRaw = {
  path: '/:pathMatch(.*)*',
  name: 'NotFound',
  component: NotFoundView,
};

const routes: Array<RouteRecordRaw> = [
  ...publicRoutes,
  ...protectedRoutes,
  fallbackRoute,
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token') || sessionStorage.getItem('token');

  if (to.meta.requiresAuth && !token) {
    next('/browser');
  } else if (!to.meta.requiresAuth && token && to.path === '/') {
    next('/app');
  } else {
    next();
  }
});

export default router;
