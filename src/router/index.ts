import Vue, { Component } from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Index from '../views/Index.vue'
import Contact from '../views/Contact.vue'
import Mobil from '../views/Mobil.vue'
import Stargazer from '../views/Stargazer.vue'
import Creta from '../views/Creta.vue'
import Ioniq from '../views/Ioniq.vue'
import Palisade from '../views/Palisade.vue'
import Santa from '../views/Santa.vue'
import Staria from '../views/Staria.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/index',
    name: 'Index',
    component: Index
  },
  {
    path: '/',
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
  },
  {
    path: '/mobil/ioniq',
    name: 'Ioniq',
    component: Ioniq
  },
  {
    path: '/mobil/creta',
    name: 'Creta',
    component: Creta
  },
  {
    path: '/mobil/palisade',
    name: 'Palisade',
    component: Palisade
  },
  {
    path: '/mobil/santa',
    name: 'Santa',
    component: Santa
  },
  {
    path: '/mobil/staria',
    name: 'Staria',
    component: Staria
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
