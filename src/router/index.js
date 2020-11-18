import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/Layout'
import Home from '../views/Home'
import Portfolio from '../views/Portfolio'
import Blog from '../views/Blog'
import About from '../components/About'
import Admin from '../views/Admin'
import ErrorPath from '../components/ErrorPath'
import Dashboard from '../components/Dashboard'
import Login from '../views/Login'
import AdminSettings from '../components/AdminSettings'
import AdminServices from '../components/AdminServices'
import AdminClients from '../components/AdminClients'
import BlogAdmin from '../components/BlogAdmin'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    component: ErrorPath
  },
  {
    path: '/Login',
    component: Login,
    name: 'Login'
  },
  {
    path: '/admin',
    component: Admin,
    name: 'Admin',
    redirect: '/admin/dashboard',
    children: [
      {
        path: 'Dashboard',
        component: Dashboard,
        name: 'Dashboard'
      },
      {
        path: 'Blog',
        component: BlogAdmin,
        name: 'BlogAdmin'
      },
      {
        path: 'Services',
        component: AdminServices,
        name: 'AdminServices'
      },
      {
        path: 'Clients',
        component: AdminClients,
        name: 'AdminClients'
      },
      {
        path: 'Settings',
        component: AdminSettings,
        name: 'AdminSettings'
      },
    ]
  },
  {
    path: '/',
    component: Layout,
    name: "Layout",
    children: [
      {
        path: '/',
        component: Home,
        name: 'Home'
      },
      {
        path: 'About',
        component: About,
        name: 'About'
      },
      {
        path: '/Portfolio',
        component: Portfolio,
        name: 'Portfolio'
      },
      {
        path: '/Blog',
        component: Blog,
        name: 'Blog'
      }
    ]
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
