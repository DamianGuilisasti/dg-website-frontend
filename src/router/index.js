import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/Layout'
import Home from '../views/Home'
import About from '../components/About'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    name: 'Layout',
    children: [
      {
        path: '/',
        component: Home,
        name: 'Home'
      },
      {
        path: '/nosotros',
        component: About,
        name: 'About'
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
