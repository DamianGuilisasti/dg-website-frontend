<template>
  <div>
    <Header class="section" id="home">
      <img class="shrink" contain width="200" slot="logo" :src="imageURL"
    /></Header>
    <router-view />
    <Footer />
    <Whatsapp :phone="phone" :text="text" :dataId="dataId" />
    <VFabTransition />
    <Snackbar />
    <LoadingOverlay />
  </div>
</template>

<script>
import axios from "axios";
import Header from "../components/header/HeaderOnePage";
import Footer from "../components/footer/FooterTwo";
import Whatsapp from "@/components/Whatsapp";
import VFabTransition from "@/components/VFabTransition";
import Snackbar from "@/components/Snackbar";
import LoadingOverlay from "@/components/LoadingOverlay";

export default {
  name: "LayoutView",
  components: {
    Header,
    Footer,
    Whatsapp,
    VFabTransition,
    Snackbar,
    LoadingOverlay,
  },
  data: () => ({
    imageURL: "",
    phone: "",
    text: "",
    dataId: "",
  }),
  methods: {
    getSettings() {
      let me = this;
      axios
        .get("settings")
        .then(function (response) {
          me.imageURL = response.data[0].logoURL.imageURL;
          me.phone = response.data[0].whatsapp.phone;
          me.text = response.data[0].whatsapp.text;
          me.dataId = response.data[0]._id;
          if (response.data.length == 0) {
            axios
              .post("settings/add", {
                aboutInfo: "",
                companyName: "",
                companyPhone: "",
                companyAddress: "",
                companyEmail: "",
                socialMedia: {
                  facebook: "",
                  instagram: "",
                  twitter: "",
                  google: "",
                  youtube: "",
                  linkedin: "",
                },
                logoURL: {
                  public_id: "",
                  imageURL: "",
                },
                whatsapp: {
                  phone: "",
                  text: "",
                },
                companyImg: {
                  public_id: "",
                  imageURL: "",
                },
              })
              .then(function () {})
              .catch(function (error) {
                console.log(error);
              });
          }
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

