<template>
  <div>
    <!-- Start Header Area -->
    <Header class="section" id="home">
      <img class="shrink" contain width="200" slot="logo" :src="imageURL" />
    </Header>
    <!-- End Header Area -->
    <router-view />
    <!-- Start Footer Area  -->
    <Footer />
    <!-- End Footer Area  -->
    <Whatsapp />
  </div>
</template>

<script>
import axios from "axios";
import Header from "../components/header/HeaderOnePage";
import Footer from "../components/footer/FooterTwo";
import Whatsapp from "@/components/Whatsapp";

export default {
  name: "LayoutView",
  components: {
    Header,
    Footer,
    Whatsapp,
  },
  data: () => ({
    imageURL: "",
  }),
  methods: {
    getSettings() {
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
  },
  created() {
    this.getSettings();
  },
};
</script>
