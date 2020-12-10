<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
    <div class="text-center ma-2">
      <v-snackbar v-model="snackbar.showing" :color="snackbar.color">
        <p>{{ snackbar.text }}</p>
        <template v-slot:action="{ attrs }">
          <v-btn dark text v-bind="attrs" @click="snackbar.showing = false"
            >Cerrar</v-btn
          >
        </template>
      </v-snackbar>
    </div>
  </v-app>
</template>

<script>
import axios from "axios";
import Vuex, { mapState } from "vuex";
export default {
  data: () => ({}),
  computed: {
    ...mapState(["snackbar"]),
  },
  mounted() {
    axios
      .get("settings/list")
      .then(function (response) {
        if (response.data.length == 0) {
          axios
            .post("settings/add", {
              aboutInfo: "",
              companyName: "",
              companyPhone: "",
              socialMedia: {
                facebook: "",
                instagram: "",
                twitter: "",
                google: "",
                youtube: "",
                linkedin: "",
              },
              contactInfo: {
                phone: "",
                email: "",
              },
              logoURL: {
                public_id: "",
                imageURL: "",
              },
              whatsapp: {
                phone: "",
                text: "",
              },
            })
            .then(function (response) {})
            .catch(function (error) {
              console.log(error);
            });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>