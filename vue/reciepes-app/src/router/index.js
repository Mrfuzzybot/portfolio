import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import New from '@/views/New'
import Recipe from '@/views/Recipe'
import Edit from '@/views/Edit'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/new',
    name: 'New',
    component: New
  },
  {
    path: '/recipe/:id',
    name: 'Recipe',
    component: Recipe
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    component: Edit
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
