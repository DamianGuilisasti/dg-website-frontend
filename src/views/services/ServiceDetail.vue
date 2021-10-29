<template>
  <div>
    <!-- Start Breadcrump Area  -->
    <div
      class="rn-page-title-area pt--120 pb--190 bg_image"
      :style="{ backgroundImage: `url(${service.servicesimages[0].url})` }"
      data-black-overlay="5"
    >
      <v-container>
        <v-row>
          <v-col cols="12">
            <div class="rn-page-title text-center pt--100">
              <h2 class="headingtitle theme-gradient">{{ service.name }}</h2>
              <p>{{ service.shortdescription }}</p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- End Breadcrump Area  -->

    <div class="rn-service-details rn-section-gap bg_color--1">
      <v-container>
        <v-row>
          <v-col lg="12">
            <div class="service-details-inner">
              <div class="inner">
                <!-- Start Single Content  -->
                <v-row
                  class="sercice-details-content pb--80 align-items-center"
                >
                  <v-col lg="6" md="6" cols="12">
                    <div class="thumb">
                      <img
                        class="w-100"
                        :src="service.servicesimages[1].url"
                        alt="Service Images"
                      />
                    </div>
                  </v-col>
                  <v-col lg="6" md="6" cols="12">
                    <div class="details mt_md--30 mt_sm--30">
                      <p id="description1"></p>
                      <!--                       <p>
                        {{ service.description1 }}
                      </p> -->
                    </div>
                  </v-col>
                </v-row>
                <!-- End Single Content  -->

                <!-- Start Single Content  -->
                <v-row class="sercice-details-content align-items-center">
                  <v-col lg="6" md="6" cols="12" order="2" order-md="1">
                    <div class="details mt_md--30 mt_sm--30">
                      <p id="description2"></p>
                    </div>
                  </v-col>
                  <v-col lg="6" md="6" cols="12" order="1" order-md="2">
                    <div class="thumb position-relative">
                      <CoolLightBox
                        :items="items"
                        :index="index"
                        @close="index = null"
                      >
                      </CoolLightBox>

                      <div class="thumbnail position-relative">
                        <img
                          class="w-100"
                          :src="service.servicesimages[1].url"
                          alt="About Images"
                        />
                      </div>
                    </div>
                  </v-col>
                </v-row>
                <!-- End Single Content  -->
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <!-- Start Call to action Area  -->
    <CallToAction />
    <!-- End Call to action Area  -->

    <!-- Start Contact Area -->
    <div
      v-if="phone || address || email"
      class="rn-contact-area rn-section-gap bg_color--5 section"
      id="contact"
    >
      <div class="contact-form--1">
        <v-container>
          <Contact :phone="phone" :address="address" :email="email"> </Contact>
        </v-container>
      </div>
    </div>
    <!-- End Contact Area  -->
  </div>
</template>

<script>
import axios from "axios";
import CallToAction from "../../components/callto-action/CallToAction";
import Contact from "../../components/contact/ContactAddress";
export default {
  components: {
    CallToAction,
    Contact,
  },
  data() {
    return {
      index: null,
      service: "",
      phone: "",
      email: "",
      address: "",
    };
  },

  methods: {
    getSettings() {
      let me = this;
      axios
        .get("settings/list")
        .then(function (response) {
          me.email = response.data[0].companyEmail;
          me.address = response.data[0].companyAddress;
          me.phone = response.data[0].companyPhone;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    convert() {
      let description1 = document.getElementById("description1");
      let description2 = document.getElementById("description2");

      description1.insertAdjacentHTML("afterbegin", this.service.description1);
      description2.insertAdjacentHTML("afterbegin", this.service.description2);
    },
    initialize() {
      let me = this;
      axios
        .get("services/query", { params: this.$route.params.slug })
        .then(function (response) {
          me.service = response.data;
          console.log(me.service);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  created() {
    window.scrollTo(0, 0);
    this.initialize();
    this.getSettings();
  },
  updated() {
    this.convert();
  },
};
</script>
