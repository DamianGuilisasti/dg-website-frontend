<template>
  <v-app id="inspire">
    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="white"
      
    >
      <!--      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />-->

      <v-toolbar-title style="width: 200px">
      <v-avatar
        class="mr-3"
        color="grey lighten-5"
        size="70"
      >
        <v-img
          contain
          max-height="70%"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
        ></v-img>
      </v-avatar>
      </v-toolbar-title>

      <v-spacer />
      <v-btn small text to="/account/register">Crear cuenta</v-btn>&nbsp;
      <v-btn small text to="/account/login">Iniciar Sesion</v-btn>

    </v-app-bar>
    <router-view />
    <v-footer :padless="true">
      <v-card flat tile width="100%" class="secondary white--text text-center">
        <v-card-text>
          <v-btn
            v-if="
              configurationArray.socialMedia.facebook !== null &&
              configurationArray.socialMedia.facebook !== '' &&
              configurationArray.socialMedia.facebook !== undefined
            "
            link
            :href="configurationArray.socialMedia.facebook"
            class="mx-4 white--text"
            icon
            target="_blank"
          >
            <v-icon size="24px">mdi-facebook</v-icon>
          </v-btn>
          <v-btn
            v-if="
              configurationArray.socialMedia.instagram !== null &&
              configurationArray.socialMedia.instagram !== '' &&
              configurationArray.socialMedia.instagram !== undefined
            "
            link
            :href="configurationArray.socialMedia.instagram"
            class="mx-4 white--text"
            icon
            target="_blank"
          >
            <v-icon size="24px">mdi-instagram</v-icon>
          </v-btn>
          <v-btn
            v-if="
              configurationArray.socialMedia.twitter !== null &&
              configurationArray.socialMedia.twitter !== '' &&
              configurationArray.socialMedia.twitter !== undefined
            "
            link
            :href="configurationArray.socialMedia.twitter"
            class="mx-4 white--text"
            icon
            target="_blank"
          >
            <v-icon size="24px">mdi-twitter</v-icon>
          </v-btn>
          <v-btn
            v-if="
              configurationArray.socialMedia.google !== null &&
              configurationArray.socialMedia.google !== '' &&
              configurationArray.socialMedia.google !== undefined
            "
            link
            :href="configurationArray.socialMedia.google"
            class="mx-4 white--text"
            icon
            target="_blank"
          >
            <v-icon size="24px">mdi-google</v-icon>
          </v-btn>
          <v-btn
            v-if="
              configurationArray.socialMedia.youtube !== null &&
              configurationArray.socialMedia.youtube !== '' &&
              configurationArray.socialMedia.youtube !== undefined
            "
            link
            :href="configurationArray.socialMedia.youtube"
            class="mx-4 white--text"
            icon
            target="_blank"
          >
            <v-icon size="24px">mdi-youtube</v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text
          v-if="
            configurationArray.footerInfo !== null &&
            configurationArray.footerInfo !== '' &&
            configurationArray.footerInfo !== undefined
          "
          class="white--text pt-0"
          >{{ configurationArray.footerInfo }}</v-card-text
        >

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} —
          <strong>ProStore</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      categories: [],
      activeBtn: 1,
      configurationArray: [],
      configurationArray: {
        socialMedia: {
          facebook: null,
          instagram: null,
          twitter: null,
          youtube: null,
          google: null,
        },
      },
    };
  },
  created() {
    this.initialize();
    this.getCategories();
  },
  methods: {
    initialize() {
      let me = this;
      axios
        .get("publicaciones/list")
        .then(function (response) {
          console.log(me.configurationArray);
          me.configurationArray = response.data[0];
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    getCategories() {
      let me = this;
      axios
        .get("categoria/list")
        .then(function (response) {
          me.categories = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    goCategory(index, item) {
      this.$router.push(`/categoria/${item._id}`);
    },
  },
};
</script>

<style scoped>
.v-main .v-content {
  padding: 0px 0px 0px !important;
}
.pointercursor {
  cursor: pointer;
  height: 42px;
  width: 42px;
}
</style>
