<template>
  <div>
    <!-- Start Slider Area -->
    <div class="slider-wrapper">
      <Sliders />
    </div>
    <!-- End Slider Area -->

    <!-- Start About Area  -->
    <div class="section about-area rn-section-gap bg_color--1" id="about">
      <div class="about-wrapper">
        <v-container>
          <About :about="about">
            <img slot="thum-img" class="w-100" :src="companyImg" />
          </About>
        </v-container>
      </div>
    </div>
    <!-- Start About Area  -->

    <!-- Start Service Area -->
    <div
      class="section service-area  bg_image bg_image--3  pl--15 pr--15 pt--80 pb--80"
      id="service"
    >
      <v-container class="container" fluid>
        <v-row>
          <v-col lg="4" cols="12" style="align-self: center;">
            <div
              class="
                section-title
                text-center
                mt_md--5
                mt_mobile--5
                mb_mobile--10
              "
            >
              <h2 class="heading-title">¿Qué hacemos?</h2>
              <p>
                Ayudamos a comercios y empresas a obtener nuevos clientes y
                promocionar sus productos o servicios en internet.
              </p>
              <div class="service-btn">
                <a class="btn-transparent rn-btn-dark" href="#contact"
                  ><span class="text">Solicitar presupuesto</span></a
                >
              </div>
            </div>
          </v-col>
          <v-col lg="8" cols="12" class="mt_md--50">
            <Services :services="services" />
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- End Service Area -->

    <!-- Start Portfolio Area -->
    <v-container fluid v-if="portfolios.length > 0">
      <div
        class="section rn-portfolio-area rn-section-gap bg_color--1"
        id="portfolio"
      >
        <div class="portfolio-sacousel-inner pb--30">
          <v-container>
            <v-row>
              <v-col lg="12">
                <div class="section-title text-center mb--20 mb_sm--0 mb_md--0">
                  <h2 class="heading-title">Nuestro trabajo</h2>
                  <p>Conozca algunas de las grandes cosas que hemos hecho.</p>
                </div>
              </v-col>
            </v-row>
          </v-container>
          <Portfolios :portfolios="portfolios" />
        </div>
        <div class="mt--50 text-center">
          <a class="rn-button-style--2 btn_solid" href="/portfolios"
            >Ver todos los proyectos</a
          >
        </div>
      </div>
    </v-container>
    <!-- End Portfolio Area -->

    <!-- Start Counterup Area -->
    <!--     <div class="rn-counterup-area pt--25 pb--110 bg_color--1">
      <v-container>
        <v-row>
          <v-col cols="12" class="mt-15">
            <div class="section-title text-center">
              <h3 class="fontWeight500">My funny stats</h3>
            </div>
          </v-col>
        </v-row>
        <Counter />
      </v-container>
    </div> -->
    <!-- End Counterup Area -->

    <!-- Start Testimonial Area  -->
    <div
      class="section rn-testimonial-area rn-section-gap bg_color--5"
      id="testimonial"
    >
      <v-container>
        <Testimonial
          :testimonialContent="testimonialContent"
          :tabItems="tabItems"
        />
      </v-container>
    </div>
    <!-- Start Testimonial Area  -->

    <!-- Start Brand Area -->
    <div class="rn-brand-area brand-separation" v-if="logos.length > 0">
      <v-container>
        <v-row>
          <v-col cols="12" class="mt-10">
            <div class="section-title text-center">
              <h3 class="fontWeight500">Clientes</h3>
            </div>
            <Brand :logos="logos" />
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- End Brand Area -->

    <!-- Start Blog Area  -->
    <!--     <div class="section rn-blog-area rn-section-gapTop bg_color--1 mb--50" id="blog">
      <v-container>
        <v-row align="end" class="mb--20">
          <v-col lg="6" md="6" sm="12" cols="12">
            <div class="section-title text-left">
              <h2>Blog</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration.
              </p>
            </div>
          </v-col>
          <v-col lg="6" md="6" sm="12" cols="12">
            <div class="blog-btn text-left text-md-right mt_sm--10 mt_md--10">
              <a class="btn-transparent rn-btn-dark" href="blog.html"
                ><span class="text">Ver todas las publicaciones</span></a
              >
            </div>
          </v-col>
        </v-row>
        <Blog />
      </v-container>
    </div> -->
    <!-- End Blog Area  -->

    <!-- Start Call to action Area  -->
    <CallToAction />
    <!-- End Call to action Area  -->

    <!-- Start Contact Area  -->
    <div
      class="rn-contact-area rn-section-gap bg_color--5 section"
      id="contact"
      v-if="phone || address || email"
    >
      <div class="contact-form--1">
        <v-container>
          <Contact :phone="phone" :address="address" :email="email" />
        </v-container>
      </div>
    </div>
    <!-- End Contact Area  -->
  </div>
</template>

<script>
import axios from "axios";
import Sliders from "../components/slider/SliderFive";
import About from "../components/about/AboutFour";
import Services from "../components/service/ServiceFive";
import Portfolios from "../components/portfolio/PortfolioSix";
import Counter from "../components/counter/CounterOne";
import Testimonial from "../components/testimonial/Testimonial";
import Blog from "../components/blog/Blog";
import Brand from "../components/brand/Brand";
import Contact from "../components/contact/ContactAddress";
import CallToAction from "../components/callto-action/CallToAction";

export default {
  components: {
    Sliders,
    About,
    Services,
    Portfolios,
    Counter,
    Testimonial,
    Blog,
    Brand,
    CallToAction,
    Contact,
  },
  data() {
    return {
      imageURL: "",
      email: "",
      address: "",
      phone: "",
      about: "",
      companyImg: "",
      logos: [],
      portfolios: [],
      services: [],

      testimonialContent: [],
      tabItems: [],
    };
  },
  methods: {
    getLogos() {
      let me = this;
      axios
        .get("logos")
        .then(function(response) {
          me.logos = response.data;
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
            console.log(review, index);
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
            console.log(review, index);
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
    getPortfolios() {
      let me = this;
      axios
        .get("portfolios/listActives")
        .then(function(response) {
          me.portfolios = response.data;
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
          me.imageURL = response.data[0].logoURL.imageURL;
          me.email = response.data[0].companyEmail;
          me.address = response.data[0].companyAddress;
          me.phone = response.data[0].companyPhone;
          me.about = response.data[0].aboutInfo;
          me.companyImg = response.data[0].companyImg.imageURL;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getServices() {
      let me = this;
      axios
        .get("services")
        .then(function(response) {
          me.services = response.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  },
  created() {
    this.getSettings();
    this.getLogos();
    this.getPortfolios();
    this.getServices();
    this.getReviews();
  },
};
</script>
