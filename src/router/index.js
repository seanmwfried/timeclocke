import Vue from 'vue'
import VueRouter from 'vue-router'
import TheLogin from '../views/TheLogin.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'TheLogin',
    component: TheLogin
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
