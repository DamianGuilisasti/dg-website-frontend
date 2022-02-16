import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import axios from "axios";
import CoolLightBox from "vue-cool-lightbox";
import VueScrollactive from "vue-scrollactive";
import VueSocialSharing from "vue-social-sharing";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "vue-cool-lightbox/dist/vue-cool-lightbox.min.css";
import "./assets/scss/main.scss";

Vue.config.productionTip = false;

Vue.use(CoolLightBox);
Vue.use(VueScrollactive);
Vue.use(VueSocialSharing);

const { APP_API_URL, NODE_ENV } = process.env;

const connectionString =
  NODE_ENV === "production" ? APP_API_URL : "http://localhost:4000/api";

axios.defaults.baseURL = connectionString;

new Vue({
  router,
  store,
  vuetify,
  render: function(h) {
    return h(App);
  },
}).$mount("#app");
