<template>
  <v-app-bar fixed color="white" style="align-items: center">
    <v-container class="py-0 fill-height">
      <v-slide-x-transition>
        <v-img
          v-if="showLogo"
          :src="imageURL"
          class="shrink"
          contain
          height="50"
        />
      </v-slide-x-transition>

      <v-slide-x-transition>
        <v-img
          v-if="showStickyLogo"
          :src="imageURL"
          class="shrink"
          contain
          height="50"
        />
      </v-slide-x-transition>

      <v-spacer />

      <v-btn v-for="link in links" :key="link" text>
        {{ link }}
      </v-btn>
      
    </v-container>
  </v-app-bar>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    showLogo: true,
    showStickyLogo: false,
    logoHeight: "70px",
    imageURL: "",
    links: ["Home", "About", "Services", "Portfolio", "Blog"],
  }),
  mounted() {
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

<style lang="scss">
div.v-image__image--contain {
  background-position: left center !important;
}
header.v-toolbar {
  height: 100px !important;
}
.v-toolbar__content {
  height: 100px !important;
}
</style>