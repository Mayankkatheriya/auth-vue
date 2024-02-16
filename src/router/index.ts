// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router';
import { auth } from '../firebase';
import Login from '../components/Login.vue';
import Signup from '../components/Signup.vue';
import Dashboard from '../components/Dashboard.vue';

const routes = [
  { path: '/', component: Login },
  { path: '/signup', component: Signup },
  { path: '/dashboard', component: Dashboard, meta: { requiresAuth: true } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = Boolean(auth.currentUser || sessionStorage.getItem('user'));
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

  if (requiresAuth && !isAuthenticated) {
    next('/'); // Redirect to login if authentication is required but not authenticated
  } else {
    next();
  }
});

export default router;
