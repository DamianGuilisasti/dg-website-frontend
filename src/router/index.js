import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "../views/Layout";
import Home from "../views/Home";
import Portfolio from "../views/Portfolio";
import Blog from "../views/Blog";
import About from "../components/About";
import Admin from "../views/Admin";
import ErrorPath from "../components/ErrorPath";
import Dashboard from "../components/Dashboard";
import Login from "../views/Login";
import AdminSettings from "../components/AdminSettings";
import AdminServices from "../components/AdminServices";
import AdminClients from "../components/AdminClients";
import BlogAdmin from "../components/BlogAdmin";
import AdminBudgets from "../components/AdminBudgets";
import AdminExpenses from "../components/AdminExpenses";
import AdminEmails from "../components/AdminEmails";
import AdminUsers from "../components/AdminUsers";
import AdminEditAccount from "../components/AdminEditAccount";

import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    component: ErrorPath,
  },
  {
    path: "/Login",
    component: Login,
    name: "Login",
  },
  {
    path: "/admin",
    component: Admin,
    name: "Admin",
    meta: {
      AdminRol: true,
    },
    redirect: "/admin/dashboard",
    children: [
      {
        path: "Dashboard",
        component: Dashboard,
        name: "Dashboard",
      },
      {
        path: "Blog",
        component: BlogAdmin,
        name: "BlogAdmin",
      },
      {
        path: "Services",
        component: AdminServices,
        name: "AdminServices",
      },
      {
        path: "Clients",
        component: AdminClients,
        name: "AdminClients",
      },
      {
        path: "EditAccount",
        component: AdminEditAccount,
        name: "AdminEditAccount",
      },
      {
        path: "Users",
        component: AdminUsers,
        name: "AdminUsers",
      },
      {
        path: "Emails",
        component: AdminEmails,
        name: "AdminEmails",
      },
      {
        path: "Budgets",
        component: AdminBudgets,
        name: "AdminBudgets",
      },
      {
        path: "Settings",
        component: AdminSettings,
        name: "AdminSettings",
      },
      {
        path: "Expenses",
        component: AdminExpenses,
        name: "AdminExpenses",
      },
    ],
  },
  {
    path: "/",
    component: Layout,
    name: "Layout",
    children: [
      {
        path: "/",
        component: Home,
        name: "Home",
      },
      {
        path: "About",
        component: About,
        name: "About",
      },
      {
        path: "/Portfolio",
        component: Portfolio,
        name: "Portfolio",
      },
      {
        path: "/Blog",
        component: Blog,
        name: "Blog",
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const rutaProtegida = to.matched.some((record) => record.meta.AdminRol);
  if (rutaProtegida && store.state.token === "") {
    next({ name: "Login" });
  } else {
    next();
  }
  next();
});

export default router;
