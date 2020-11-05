<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({}),
  mounted() {
    axios
      .get("settings/list")
      .then(function (response) {
        if (response.data.length == 0) {
          axios
            .post("settings/add", {
              aboutInfo: "",
              companyName: "",
              socialMedia: {
                facebook: "",
                instagram: "",
                twitter: "",
                google: "",
                youtube: "",
                linkedin: ""
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