<template>
  <div>
    <v-container fluid class="footerContainer">
      <v-row>
        <v-col cols="12" sm="12" md="6">
          <h2 class="white--text footer-title">
            Contáctame. <br />
            ¡Empecemos juntos algo grande!
          </h2>
        </v-col>
      </v-row>
      <v-row class="text-center">
        <v-col cols="12" sm="12" md="4">
          <h3 class="white--text pb-5">Teléfono</h3>
          <p class="white--text">{{companyPhone}}</p>
        </v-col>
        <v-col cols="12" sm="12" md="4">
          <h3 class="white--text pb-5">Email</h3>
          <p class="white--text">{{companyEmail}}</p></v-col
        >
        <v-col cols="12" sm="12" md="4">
          <h3 class="white--text">Sígueme</h3>
          <v-card flat tile width="100%" class="text-center">
            <v-card-text class="socialMediaContainer">
              <v-btn
                link
                class="mx-4 white--text"
                icon
                target="_blank"
                :href="twitter"
                v-if="twitter"
              >
                <v-icon size="24px">mdi-twitter</v-icon>
              </v-btn>
              <v-btn
                link
                class="mx-4 white--text"
                icon
                target="_blank"
                :href="linkedin"
                v-if="linkedin"
              >
                <v-icon size="24px">mdi-linkedin</v-icon>
              </v-btn>
              <v-btn
                link
                class="mx-4 white--text"
                icon
                target="_blank"
                :href="instagram"
                v-if="instagram"
              >
                <v-icon size="24px">mdi-instagram</v-icon>
              </v-btn>
              <v-btn
                link
                class="mx-4 white--text"
                icon
                target="_blank"
                :href="google"
                v-if="google"
              >
                <v-icon size="24px">mdi-google</v-icon>
              </v-btn>
              <v-btn
                link
                class="mx-4 white--text"
                icon
                target="_blank"
                :href="youtube"
                v-if="youtube"
              >
                <v-icon size="24px">mdi-youtube</v-icon>
              </v-btn>
              <v-btn
                link
                class="mx-4 white--text"
                icon
                target="_blank"
                :href="facebook"
                v-if="facebook"
              >
                <v-icon size="24px">mdi-facebook</v-icon>
              </v-btn>
            </v-card-text></v-card
          ></v-col
        >
      </v-row>
    </v-container>
    <v-footer class="justify-center" color="#292929" height="50">
      <div
        class="title font-weight-light grey--text text--lighten-1 text-center"
      >
        &copy; {{ new Date().getFullYear() }} — Made with
        <v-icon size="24px" class="white--text">mdi-cards-heart</v-icon> by
        Damián Guilisasti
      </div>
    </v-footer>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Footer",
  data: () => ({
    companyEmail: "",
    companyPhone: "",
    facebook: "",
    instagram: "",
    youtube: "",
    linkedin: "",
    twitter: "",
    google: ""
  }),
  created() {
    let me = this;
    axios
      .get("settings/list")
      .then(function (response) {
        me.companyPhone = response.data[0].companyPhone;
        me.companyEmail = response.data[0].companyEmail;
        me.facebook = response.data[0].socialMedia.facebook;
        me.instagram = response.data[0].socialMedia.instagram;
        me.youtube = response.data[0].socialMedia.youtube;
        me.linkedin = response.data[0].socialMedia.linkedin;
        me.twitter = response.data[0].socialMedia.twitter;
        me.google = response.data[0].socialMedia.google;
      })
      .catch(function (error) {
        console.log(error);
      });
    //.finally(() => console.log("termine"));
  },
};
</script>

<style scoped lang="scss">
.footerContainer {
  background-color: #000000;
  padding: 4% 4%;
}
.footer-title {
  font-size: 40px;
  padding: 6% 0 6% 6%;
}
.socialMediaContainer {
  background-color: #000 !important;
}
</style>