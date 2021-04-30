<template>
  <div>
    <VueSlickCarousel
    v-if="sliders"
      v-bind="settings"
      class="rn-slider-area slider-activation rn-slick-dot dot-light mb--0"
    >
      <div
        class="slide slide-style-2 align-center justify-center fullscreen bg_image"
        data-black-overlay="5"
        v-for="slider in sliders"
        :key="slider._id"
        :style="{ backgroundImage: 'url(' + slider.sliderImg.url + ')' }"
      >
        <v-container>
          <v-row>
            <v-col cols="12">
              <div class="inner text-center">
                <h1 class="heading-title theme-gradient">{{ slider.title }}</h1>
                <p class="description">
                  {{ slider.subtitle }}
                </p>
                <div class="slide-btn">
                  <a
                    class="rn-button-style--2 btn-primary-color"
                    href="
                    #contact"
                    >Contáctame</a
                  >
                </div>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
      <!-- End Single Slide  -->
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import axios from "axios";

export default {
  components: { VueSlickCarousel },
  data() {
    return {
      sliderContent: [
        {
          src: require("../../assets/images/bg/dg-bg.jpg"),
          title: "Web Development.",
          desc: ` Posiciona tu negocio con un Sitio Web desarrollado con las mejores y útlimas tecnologías del mercado. Competí inteligentemente.`,
        },
        {
          src: require("../../assets/images/bg/dg-bg-slider-2.jpg"),
          title: "Ecommerce.",
          desc: ` Vendé tus productos de manera digital y ofrecé la mejor experiencia a tus clientes. `,
        },
      ],
      sliders: [
        {
          title: "",
          subtitle: ""
        }
      ],
      settings: {
        fade: true,
        dots: true,
        arrows: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        margin: 20,
      },
    };
  },
  created() {
    let me = this;
    axios
      .get("sliders/list")
      .then(function (response) {
        me.sliders = response.data;
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>

<style lang="scss">
.slick-slide {
  img {
    display: block;
    width: 100%;
  }
}
/* .slick-slide {
    float: initial !important;
} */
</style>
