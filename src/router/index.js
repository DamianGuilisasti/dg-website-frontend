import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "../views/Layout";
import Home from "../views/Home";
import PortfolioDetails from "../views/portfolio/PortfolioDetails";
import ServiceDetails from "../views/services/ServiceDetail";
import Portfolios from "../views/Portfolios";
import ErrorPath from "../views/404";
import Demo from "../views/Demo";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Layout,
    name: "Layout",
    children: [
      {
        path: "/demo",
        component: Demo,
        name: "Demo",
      },
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
        path: "/service-details/:slug",
        component: ServiceDetails,
        name: "ServiceDetails",
        props: true,
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
