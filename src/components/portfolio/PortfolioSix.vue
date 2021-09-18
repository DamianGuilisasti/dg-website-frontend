<template>
  <v-row>
    <!-- Start Single Portfolio  -->
    <v-col
      xl="3"
      lg="3"
      md="4"
      sm="6"
      cols="12"
      class="portfolio-tilthover"
      v-for="(item, i) in portfolios"
      :key="i"
    >
      <div class="Tilt-inner">
        <div class="portfolio">
          <div class="thumbnail-inner">
            <v-img class="thumbnail" :src="item.portfolioimages[0].url"></v-img>
            <v-img
              class="bg-blr-image"
              :src="item.portfolioimages[0].url"
            ></v-img>
          </div>
          <div class="content">
            <div class="inner">
              <p>{{ item.projectType }}</p>
              <h4>
                <a :href="`/portfolio-details/${item.slug}`">{{
                  item.client.lastname
                }}</a>
              </h4>
              <div class="portfolio-button">
                <router-link
                  class="rn-btn"
                  :to="`/portfolio-details/${item.slug}`"
                  >View project details</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </v-col>
    <!-- End Single Portfolio  -->
  </v-row>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      portfolios: [],
    };
  },
  methods: {
    initialize() {
      let me = this;
      axios
        .get("portfolio/list")
        .then(function (response) {
          me.portfolios = response.data;
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
