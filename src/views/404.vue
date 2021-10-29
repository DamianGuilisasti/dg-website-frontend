<template>
  <div>
    <!-- Start 404 Page  -->
    <div class="error-page-inner bg_color--4">
      <v-container>
        <v-row>
          <v-col cols="12">
            <div class="inner">
              <h1 class="heading-title theme-gradient">404!</h1>
              <h3 class="sub-title">Page Not Found</h3>
              <span>This page that you are looking for is not found.</span>
              <div class="error-button">
                <router-link class="rn-button-style--2 btn_solid" to="/"
                  >Go to Home</router-link
                >
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- End 404 Page  -->
    <!-- Start Call to action Area  -->
    <!-- <CallToAction /> -->
    <!-- End Call to action Area  -->
  </div>
</template>

<script>
import CallToAction from "../components/callto-action/CallToAction";
export default {
  components: {
    CallToAction,
  },
  data() {
    return {};
  },
  methods: {},
  created() {},
};
</script>
