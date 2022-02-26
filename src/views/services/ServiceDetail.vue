<template>
  <div>
    <!-- Start Breadcrump Area  -->
    <div
      v-if="service.servicesimages.length > 0"
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

    <div
      class="rn-service-details rn-section-gap bg_color--1"
      v-if="service.description.length > 0"
    >
      <v-container>
        <v-row>
          <v-col lg="12">
            <div class="service-details-inner">
              <div class="inner">
                <!-- Start Single Content  -->
                <v-row
                  class="sercice-details-content pb--80 align-items-center"
                >
                  <!--                   <v-col lg="6" md="6" cols="12">
                    <div class="thumb">
                      <img
                        v-if="service.servicesimages.length > 0"
                        class="w-100"
                        :src="service.servicesimages[1].url"
                        alt="Service Images"
                      />
                    </div>
                  </v-col> -->
                  <v-col lg="12" md="12" cols="12">
                    <div class="details mt_md--30 mt_sm--30">
                      <p v-html="service.description"></p>
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

    <!-- Start Testimonial Area  -->
    <div
      class="section rn-testimonial-area rn-section-gap bg_color--5"
      id="testimonial"
      v-if="testimonialContent.length > 0"
    >
      <v-container>
        <Testimonial
          :testimonialContent="testimonialContent"
          :tabItems="tabItems"
        />
      </v-container>
    </div>
    <!-- Start Testimonial Area  -->

    <!-- Start Call to action Area  -->
    <CallToAction v-if="calltoactions[0].backgroundImg.url > 0" />
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
import Testimonial from "../../components/testimonial/Testimonial";
export default {
  components: {
    CallToAction,
    Contact,
    Testimonial,
  },
  data() {
    return {
      calltoactions: [],
      testimonialContent: [],
      tabItems: [],
      index: null,
      phone: "",
      email: "",
      address: "",
      service: {
        servicesimages: ([0].url = ""),
        servicesimages: ([1].url = ""),
        name: "",
        shortdescription: "",
        description: "",
        description2: "",
      },
    };
  },

  methods: {
    getCallToActions() {
      let me = this;
      axios
        .get("calltoactions")
        .then(function(response) {
          me.calltoactions = response.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getReviews() {
      let me = this;
      axios
        .get("reviews")
        .then(function(response) {
          me.reviews = response.data;

          me.reviews.forEach(function(review, index) {
            me.testimonialContent.push({
              id: index,
              content: [
                {
                  name: review.author,
                  description: review.text,
                  designation: review.company,
                },
              ],
            });
          });

          me.reviews.forEach(function(review, index) {
            me.tabItems.push({
              id: index,
              src: review.logo.url,
            });
          });
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getSettings() {
      let me = this;
      axios
        .get("settings")
        .then(function(response) {
          me.email = response.data[0].companyEmail;
          me.address = response.data[0].companyAddress;
          me.phone = response.data[0].companyPhone;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    initialize() {
      let me = this;
      axios
        .get("services/service", { params: this.$route.params.slug })
        .then(function(response) {
          me.service = response.data;
          console.log(me.service);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  },
  created() {
    window.scrollTo(0, 0);
    this.initialize();
    this.getSettings();
    this.getReviews();
    this.getCallToActions();
  },
};
</script>
<style>
.ql-align-right {
  text-align: right;
}
.ql-align-center {
  text-align: center;
}
.ql-align-left {
  text-align: left;
}
</style>
