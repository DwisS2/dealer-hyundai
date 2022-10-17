import Vue, { Component } from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Index from '../views/Index.vue'
import Contact from '../views/Contact.vue'
import Mobil from '../views/Mobil.vue'
import Stargazer from '../views/Stargazer.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/index',
    name: 'Index',
    component: Index
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/mobil',
    name: 'Mobil',
    component: Mobil,
  },
  {
    path: '/mobil/stargazer',
    name: 'Stargazer',
    component: Stargazer
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
