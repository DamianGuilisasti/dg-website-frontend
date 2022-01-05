<template>
  <!-- Start Service Area  -->
  <v-row class="service-one-wrapper">
    <!-- Start Single Service  -->

    <!-- ACÁ PONER LO QUE ESTÁ EN LA BASE DE DATOS. -->
    <v-col
      lg="6"
      md="6"
      sm="6"
      cols="12"
      v-for="(service, i) in serviceContent"
      :key="i"
    >
      <div class="single-service service__style--4">
        <!--<router-link>
          to="/service-details" -->
        <div class="service">
          <div class="icon" v-html="iconSvg(service.icon)"></div>
          <div class="content">
            <h3 class="heading-title">{{ service.title }}</h3>
            <p>
              {{ service.desc }}
            </p>
          </div>
        </div>
        <!--</router-link> -->
      </div>
    </v-col>
    <!-- End Single Service  -->
  </v-row>
  <!-- Start Service Area  -->
</template>

<script>
import feather from "feather-icons";
import axios from "axios";
export default {
  data() {
    return {
      services: [],
      serviceContent: [
        {
          icon: "code",
          title: "Web Development",
          desc: ` Web Applications Development for all types businesses.`,
        },
        {
          icon: "shopping-cart",
          title: "eCommerce",
          desc: ` Online store solutions to sell your products efficiently.`,
        },
        /*         {
          icon: "smartphone",
          title: "Mobile apps",
          desc: ` Hybrid Mobile Apps.`,
        },
        {
          icon: "file-text",
          title: "Dapps",
          desc: ` Secure, trustless, rapid, scalable, and stable Decentralized Applicactions.`,
        }, */
      ],
    };
  },
  methods: {
    iconSvg(icon) {
      return feather.icons[icon].toSvg();
    },
    initialize() {
      let me = this;
      axios
        .get("services")
        .then(function (response) {
          me.services = response.data;
          console.log(me.services);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  created() {
    this.initialize();
  },
};
</script>
