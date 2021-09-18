import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "../views/Layout";
import Home from "../views/Home";
import PortfolioDetails from "../views/portfolio/PortfolioDetails";
import Portfolios from "../views/portfolio/Portfolio";
import ErrorPath from "../views/404";

Vue.use(VueRouter);

const routes = [
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
        path: "/portfolio-details/:slug",
        component: PortfolioDetails,
        name: "PortfolioDetails",
      },
      {
        path: "/portfolios",
        component: Portfolios,
        name: "Portfolios",
      },
      {
        path: "*",
        component: ErrorPath,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
