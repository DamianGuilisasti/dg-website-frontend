<template>
  <div>
    <VueSlickCarousel
      v-bind="settings"
      class="slider-activation rn-slick-dot dot-light"
    >
      <div
        class="slide slide-style-2 slider-box-content without-overlay d-flex align-center bg_image"
        data-black-overlay="1"
        v-for="(slider, i) in sliders"
        :key="i"
        
      >
        <v-container>
          <div class="inner" :class="slider.text_position">
            <h1 class="heading-title">{{ slider.title }}</h1>
            <p class="description">
              {{ slider.desc }}
            </p>
            <div class="slide-btn">
              <router-link class="rn-button-style--2 btn_solid" to="/contact"
                >Contact Us</router-link
              >
            </div>
          </div>
        </v-container>
      </div>
      <!-- End Single Slide  -->
    </VueSlickCarousel>
  </div>
</template>

<script>
import axios from "axios"
import VueSlickCarousel from "vue-slick-carousel";

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
          subtitle: "",
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
        adaptiveHeight: true,
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
</style>
