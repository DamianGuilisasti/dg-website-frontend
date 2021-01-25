<template>
  <div>
    <div class="fixedNavbar">
      <v-card color="grey lighten-4" flat fixed tile>
        <v-toolbar dense color="#333333" dark>
          <v-img
            v-if="showLogo"
            :src="imageURL"
            class="shrink"
            contain
            height="20"
            width="250"
          />

          <v-spacer></v-spacer>

          <v-btn text> Home </v-btn>
          <v-btn text> Home </v-btn>
          <v-btn text> Home </v-btn>
          <v-btn text> Home </v-btn>
          <v-btn text> Home </v-btn>

          <!--           <v-app-bar-nav-icon
            @click.stop="drawer = !drawer"
          ></v-app-bar-nav-icon> -->

          <v-spacer></v-spacer>

          <v-btn text color="red"> Contact us </v-btn>

          <!--           <v-btn icon>
            <v-icon>mdi-theme-light-dark</v-icon>
          </v-btn> -->

          <v-select
            width="250"
            :items="languages"
            label="Seleccionar idioma"
            solo
          ></v-select>
        </v-toolbar>
      </v-card>
    </div>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      class="fixedNavigation"
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title
            ><v-img
              v-if="showLogo"
              :src="imageURL"
              class="shrink"
              contain
              height="50"
          /></v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon color="red">mdi-home-variant-outline</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title color="red">Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
          <v-list-item-icon>
            <v-icon color="red">mdi-account</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
          <v-list-item-icon>
            <v-icon color="red">mdi-briefcase</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Projects</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
          <v-list-item-icon>
            <v-icon color="red">mdi-currency-usd</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Get a quote</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
          <v-list-item-icon>
            <v-icon color="red">mdi-phone</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
  <!-- <v-app-bar  color="white" style="align-items: center">
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
  </v-app-bar> -->
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    languages: ["Español", "Inglés"],
    drawer: false,
    group: null,
    showLogo: true,
    showStickyLogo: false,
    logoHeight: "70px",
    imageURL: "",
    links: ["Home", "About", "Services", "Portfolio", "Blog"],
  }),
  watch: {
    group() {
      this.drawer = false;
    },
  },

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
.fixedNavbar {
  position: sticky;
  top: 0;
  z-index: 500 !important;
}
.fixedNavigation {
  z-index: 999 !important;
}
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