<template>
  <div>
    <!-- Start Header Area -->
    <Header>
      <img slot="logo" class="shrink" contain width="250" :src="imageURL" />
    </Header>
    <!-- End Header Area -->
    <!-- Start 404 Page  -->
    <div class="error-page-inner bg_color--4">
      <v-container>
        <v-row>
          <v-col cols="12">
            <div class="inner">
              <h1 class="heading-title theme-gradient">404!</h1>
              <h3 class="sub-title">Página no encontrada</h3>
              <span>La página que estabas buscando no existe.</span>
              <div class="error-button">
                <router-link class="rn-button-style--2 btn_solid" to="/"
                  >Volver al Inicio</router-link
                >
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- End 404 Page  -->
    <!-- Start Call to action Area  -->
    <CallToAction />
    <!-- End Call to action Area  -->

    <!-- Start Footer Area  -->
    <FooterTwo />
    <!-- End Footer Area  -->
  </div>
</template>

<script>
import axios from "axios";
import Header from "../components/header/HeaderOnePage";
import FooterTwo from "../components/footer/FooterTwo";
import CallToAction from "../components/callto-action/CallToAction";
export default {
  components: {
    Header,
    FooterTwo,
    CallToAction,
  },
  data() {
    return { imageURL: "" };
  },
  created() {
    let me = this;
    axios
      .get("settings/list")
      .then(function (response) {
        me.imageURL = response.data[0].logoURL.imageURL;
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>
