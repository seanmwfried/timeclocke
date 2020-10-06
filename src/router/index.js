import Vue from 'vue';
import VueRouter from 'vue-router';
import TheLogin from '../views/TheLogin';
import TheDashboard from '../views/TheDashboard';
import TheMessages from '../views/TheMessages';
import TheRequests from '../views/TheRequests';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'TheLogin',
    component: TheLogin
  },
  {
    path: '/dashboard',
    name: 'TheDashboard',
    component: TheDashboard
  },
  {
    path: '/messages',
    name: 'TheMessages',
    component: TheMessages
  },
  {
    path: '/requests',
    name: 'TheRequests',
    component: TheRequests
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
