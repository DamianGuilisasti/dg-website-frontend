<template>
  <!-- Start Footer Style Two  -->
  <div
    class="footer-style-2 ptb--30 bg_image bg_image--1"
    data-black-overlay="6"
  >
    <div class="wrapper plr--50 plr_sm--20">
      <v-row align="center">
        <v-col lg="4" md="4" sm="6" cols="12">
          <div class="inner">
            <div class="logo text-center text-sm-left mb_sm--20">
              <router-link to="/"
                ><img contain width="250" :src="imageURL"
              /></router-link>
            </div>
          </div>
        </v-col>
        <!-- End .col -->
        <v-col lg="4" md="4" sm="6" cols="12" class="d-flex">
          <div class="inner">
            <ul class="social-share rn-lg-size">
              <li class="d-inline" v-if="socialMedia.facebook">
                <a
                  :href="socialMedia.facebook"
                  target="_blank"
                  class="d-inline-block"
                  ><i class="fab fa-facebook"></i
                ></a>
              </li>
              <li class="d-inline" v-if="socialMedia.instagram">
                <a
                  :href="socialMedia.instagram"
                  target="_blank"
                  class="d-inline-block"
                  ><i class="fab fa-instagram"></i
                ></a>
              </li>
              <li class="d-inline" v-if="socialMedia.youtube">
                <a
                  :href="socialMedia.youtube"
                  target="_blank"
                  class="d-inline-block"
                  ><i class="fab fa-youtube"></i
                ></a>
              </li>
              <li class="d-inline" v-if="socialMedia.google">
                <a
                  :href="socialMedia.google"
                  target="_blank"
                  class="d-inline-block"
                  ><i class="fab fa-google"></i
                ></a>
              </li>
              <li class="d-inline" v-if="socialMedia.twitter">
                <a
                  :href="socialMedia.twitter"
                  target="_blank"
                  class="d-inline-block"
                  ><i class="fab fa-twitter"></i
                ></a>
              </li>
              <li class="d-inline" v-if="socialMedia.linkedin">
                <a
                  :href="socialMedia.linkedin"
                  target="_blank"
                  class="d-inline-block"
                  ><i class="fab fa-linkedin-in"></i
                ></a>
              </li>
            </ul>
          </div>
        </v-col>
        <!-- End .col -->
        <v-col lg="4" md="4" sm="12" cols="12">
          <div class="inner text-center mt_md--20 mt_sm--20">
            <div class="text">
              <p>
                © {{ new Date().getFullYear() }}
                <a target="_blank" href="https://damianguilisasti.com.ar">Damián Guilisasti</a>.
              </p>
            </div>
          </div>
        </v-col>
        <!-- End .col -->
      </v-row>
    </div>
  </div>
  <!-- End Footer Style Two  -->
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      socialMedia: [],
      imageURL: "",
    };
  },
  methods: {
    getSettings() {
      let me = this;
      axios
        .get("settings/list")
        .then(function (response) {
          me.socialMedia = response.data[0].socialMedia;
          me.imageURL = response.data[0].logoURL.imageURL;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  created() {
    this.getSettings();
  },
};
</script>
