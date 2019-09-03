import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login.html/',
      name: 'login',
      component: () => import(/* webpackChunkName: "about" */ './components/no-login.vue')
    },
    {
      path: '/login.html/register',
      name: 'register',
      component: () => import('./register.vue')
    }
  ]
})
