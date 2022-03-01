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
import VideoBackground from "vue-responsive-video-background-player";

Vue.config.productionTip = false;

Vue.use(CoolLightBox);
Vue.use(VueScrollactive);
Vue.use(VueSocialSharing);

Vue.component("video-background", VideoBackground);

const { NODE_ENV } = process.env;

const connectionString =
  NODE_ENV === "development" ? "http://localhost:4000/api" : "/api";

axios.defaults.baseURL = connectionString;

new Vue({
  router,
  store,
  vuetify,
  render: function(h) {
    return h(App);
  },
}).$mount("#app");


