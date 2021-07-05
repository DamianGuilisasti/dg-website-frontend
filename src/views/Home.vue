<template>
  <div>
    <!-- Start Header Area -->
    <Header class="section" id="home">
      <img class="shrink" contain width="250" slot="logo" :src="imageURL" />
    </Header>
    <!-- End Header Area -->

    <!-- Start Slider Area -->
    <div class="slider-wrapper">
      <SliderFive />
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
    <div class="section service-area ptb--80 bg_image bg_image--3" id="service">
      <v-container>
        <v-row>
          <v-col lg="4" cols="12">
            <div
              class="
                section-title
                text-left
                mt--30
                mt_md--5
                mt_mobile--5
                mb_mobile--10
              "
            >
              <h2 class="heading-title">Servicios</h2>
              <p>Calidad - Atención - Velocidad - Relaciones a largo plazo.</p>
              <div class="service-btn">
                <a class="btn-transparent rn-btn-dark" href="#contact"
                  ><span class="text">Solicitar presupuesto</span></a
                >
              </div>
            </div>
          </v-col>
          <v-col lg="8" cols="12" class="mt_md--50">
            <ServiceTwo />
          </v-col>
        </v-row>
        <!--         <v-row class="mt-15">
          <v-col lg="8" cols="12" class="mt_md--50">
            <Technologies />
          </v-col>
          <v-col lg="4" cols="12">
            <div
              class="section-title text-left mt--30 mt_md--5 mt_mobile--5 mb_mobile--10"
            >
              <h2 class="heading-title">Tecnologías</h2>
              <p>Últimas tecnologías del mercado.</p>
            </div>
          </v-col>
        </v-row> -->
      </v-container>
    </div>
    <!-- End Service Area -->

    <!-- Start Technologies Area -->
    <div class="rn-brand-area brand-separation">
      <v-container> </v-container>
    </div>
    <!-- End Technologies Area -->

    <!-- Start Portfolio Area -->
    <!--     <v-container fluid>
      <div
        class="section rn-portfolio-area rn-section-gap bg_color--1"
        id="portfolio"
      >
        <div class="portfolio-sacousel-inner pb--30">
          <v-container>
            <v-row>
              <v-col lg="12">
                <div class="section-title text-center mb--20 mb_sm--0 mb_md--0">
                  <h2 class="heading-title">Proyectos realizados</h2>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available,
                    <br />
                    but the majority have suffered alteration.
                  </p>
                </div>
              </v-col>
            </v-row>
          </v-container>
          <Portfolio />
        </div>
        <div class="mt--50 text-center">
          <a class="rn-button-style--2 btn_solid" href="about.html"
            >Ver más proyectos</a
          >
        </div>
      </div>
    </v-container> -->
    <!-- End Portfolio Area -->

    <!-- Start Counterup Area -->
    <div class="rn-counterup-area pt--25 pb--110 bg_color--1">
      <v-container>
        <v-row>
          <v-col cols="12" class="mt-15">
            <div class="section-title text-center">
              <h3 class="fontWeight500">Mis estadísticas divertidas</h3>
            </div>
          </v-col>
        </v-row>
        <CounterOne />
      </v-container>
    </div>
    <!-- End Counterup Area -->

    <!-- Start Testimonial Area  -->
    <div
      class="section rn-testimonial-area rn-section-gap bg_color--5"
      id="tesimonial"
    >
      <v-container>
        <Testimonial />
      </v-container>
    </div>
    <!-- Start Testimonial Area  -->

    <!-- Start Blog Area  -->
    <!-- <div class="section rn-blog-area rn-section-gapTop bg_color--1" id="blog">
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

    <!-- Start Brand Area -->
    <div class="rn-brand-area brand-separation" v-if="logos.length > 0">
      <v-container>
        <v-row>
          <v-col cols="12" class="mt-10">
            <div class="section-title text-center">
              <h3 class="fontWeight500">Algunos clientes</h3>
            </div>
            <Brand />
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- End Brand Area -->

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
          <Contact :phone="phone" :address="address" :email="email">
            <!--             <img
              slot="contact-img"
              class="w-100"
              src="../assets/images/about/about-6.jpg"
              alt="trydo"
            /> -->
          </Contact>
        </v-container>
      </div>
    </div>
    <!-- End Contact Area  -->

    <!-- Start Footer Area  -->
    <Footer />
    <!-- End Footer Area  -->
  </div>
</template>

<script>
import axios from "axios";
import Header from "../components/header/HeaderOnePage";
import SliderFive from "../components/slider/SliderFive";
import About from "../components/about/AboutFour";
import ServiceTwo from "../components/service/ServiceTwo";
import Portfolio from "../components/portfolio/PortfolioSix";
import CounterOne from "../components/counter/CounterOne";
import Testimonial from "../components/testimonial/Testimonial";
import Blog from "../components/blog/Blog";
import Brand from "../components/brand/Brand";
import Contact from "../components/contact/ContactAddress";
import Footer from "../components/footer/FooterTwo";
import CallToAction from "../components/callto-action/CallToAction";
import Technologies from "../components/brand/BrandThree";

export default {
  components: {
    Header,
    SliderFive,
    About,
    ServiceTwo,
    Portfolio,
    CounterOne,
    Testimonial,
    Blog,
    Brand,
    Footer,
    CallToAction,
    Contact,
    Technologies,
  },
  data() {
    return {
      imageURL: "",
      email: "",
      address: "",
      phone: "",
      about: "",
      sliders: [],
      companyImg: "",
      logos: [],
    };
  },
  methods: {
    getLogos() {
      let me = this;
      axios
        .get("logos/list")
        .then(function (response) {
          me.logos = response.data;
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
    getSliders() {
      let me = this;
      axios
        .get("sliders/list")
        .then(function (response) {
          me.sliders = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  created() {
    this.getSettings();
    this.getSliders();
    this.getLogos();
  },
};
</script>
