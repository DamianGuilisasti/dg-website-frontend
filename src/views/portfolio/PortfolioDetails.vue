<template>
  <div>
    <!-- Start Breadcrump Area  -->
    <div
      v-if="portfolio"
      class="rn-page-title-area pt--120 pb--190 bg_image"
      :style="{ backgroundImage: `url(${portfolio.portfolioimages[0].url})` }"
      data-black-overlay="5"
    >
      <v-container>
        <v-row>
          <v-col cols="12">
            <div class="rn-page-title text-center pt--100">
              <h2 class="heading-title theme-gradient">
                {{ portfolio.client.lastname }} Project
              </h2>
              <p>
                {{ portfolio.description }}
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- End Breadcrump Area  -->

    <!-- Start Portfolio Details Area  -->
    <div class="rn-portfolio-details ptb--120 bg_color--1">
      <v-container>
        <v-row>
          <v-col>
            <div class="portfolio-details">
              <div class="inner">
                <h2 v-if="portfolio">Project Details</h2>
                <p class="subtitle"></p>
                <h3>Challenge</h3>
                <p>
                  {{ portfolio.problem }}
                </p>
                <h3>Solution</h3>
                <p>
                  {{ portfolio.solution }}
                </p>
                <div class="portfolio-view-list d-flex flex-wrap">
                  <div class="port-view">
                    <h3>Project Type</h3>
                    <p>{{ portfolio.projectType }}</p>
                  </div>
                  <div class="port-view">
                    <h3>Project Link</h3>
                    <p>
                      <a :href="`${portfolio.projectLink}`" target="_blank">{{
                        portfolio.projectLink
                      }}</a>
                    </p>
                  </div>
                  <div class="port-view">
                    <h3>Client Review</h3>
                    <p>{{ portfolio.clientReview }}</p>
                  </div>

                  <div class="port-view">
                    <h3>Share on</h3>
                    <div
                      class="portfolio-share-link mt--20 pb--70 pb_sm--40"
                      v-if="portfolio"
                    >
                      <ul
                        class="
                          social-share
                          rn-lg-size
                          d-flex
                          justify-start
                          liststyle
                          mt--15
                        "
                      >
                        <li>
                          <ShareNetwork
                            network="facebook"
                            :url="website"
                            :title="portfolio.client.lastname"
                            :description="portfolio.description"
                            v-html="iconSvg('facebook')"
                          >
                          </ShareNetwork>
                        </li>
                        <li>
                          <ShareNetwork
                            network="twitter"
                            :url="website"
                            :title="portfolio.client.lastname"
                            :description="portfolio.description"
                            v-html="iconSvg('twitter')"
                          >
                          </ShareNetwork>
                        </li>
                        <li>
                          <ShareNetwork
                            network="linkedin"
                            :url="website"
                            :title="portfolio.client.lastname"
                            :description="portfolio.description"
                            v-html="iconSvg('linkedin')"
                          >
                          </ShareNetwork>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="portfolio-thumb-inner">
                <div
                  class="thumb mb--30"
                  v-for="(image, imageIndex) in portfolio.portfolioimages"
                  :key="imageIndex"
                >
                  <img :src="image.url" alt="Portfolio Images" />
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- End Portfolio Details Area  -->

    <!-- Start Related Work  -->
    <div
      class="portfolio-related-work pb--120 bg_color--1"
      v-if="relatedProjects.length > 0"
    >
      <v-container>
        <v-row>
          <v-col>
            <div class="section-title text-center">
              <span class="theme-color font--18 fontWeight600"
                >Related Work</span
              >
              <h2>More Projects</h2>
            </div>
          </v-col>
        </v-row>
        <v-row class="mt--10">
          <!-- Start Single Work  -->
          <v-col
            lg="6"
            md="6"
            cols="12"
            v-for="(project, i) in computedArray"
            :key="i"
          >
            <div class="related-work text-center mt--30">
              <div class="thumb">
                <a :href="project.slug">
                  <img
                    :src="project.portfolioimages[0].url"
                    alt="Portfolio-images"
                  />
                </a>
              </div>
              <div class="inner">
                <h4>
                  <a :href="project.slug">{{ project.client.lastname }}</a>
                </h4>
                <span class="category">{{ project.projectType }}</span>
              </div>
            </div>
          </v-col>
          <!-- End Single Work  -->
        </v-row>
<!--         <div class="mt--50 text-center">
          <a class="rn-button-style--2 btn_solid" href="/portfolios"
            >More projects</a
          >
        </div> -->
      </v-container>
    </div>
    <!-- End Related Work  -->
  </div>
</template>

<script>
import axios from "axios";
import feather from "feather-icons";

export default {
  components: {
  },
  data() {
    return {
      limit: 4,
      relatedProjects: [],
      portfolio: "",
      imageURL: "",
      email: "",
      address: "",
      phone: "",
      about: "",
      companyImg: "",
    };
  },
  methods: {
    iconSvg(icon) {
      return feather.icons[icon].toSvg();
    },
    initialize() {
      let me = this;
      axios
        .get("portfolio/query", { params: this.$route.params.slug })
        .then(function (response) {
          me.portfolio = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    getMoreProjects() {
      let me = this;
      console.log(this.portfolio);
      axios
        .post("portfolio/relatedprojects", { slug: this.$route.params.slug })
        .then(function (response) {
          me.relatedProjects = response.data;
          console.log(me.relatedProjects);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    getSettings() {
      let me = this;
      axios
        .get("settings/list")
        .then(function (response) {
          me.imageURL = response.data[0].logoURL.imageURL;
          me.email = response.data[0].companyEmail;
          me.address = response.data[0].companyAddress;
          me.phone = response.data[0].companyPhone;
          me.about = response.data[0].aboutInfo;
          me.companyImg = response.data[0].companyImg.imageURL;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  computed: {
    website() {
      return window.location.href;
    },
    computedArray() {
      return this.limit
        ? this.relatedProjects.slice(0, this.limit)
        : this.relatedProjects;
    },
  },
  created() {
    window.scrollTo(0, 0);
    this.initialize();
    this.getSettings();
    this.getMoreProjects();
  },
};
</script>
