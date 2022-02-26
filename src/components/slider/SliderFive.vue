<template>
  <div>
    <video-background
      v-if="
        settings[0].isBackgroundVideoActivated &&
          settings[0].videobackground.url
      "
      class="video-background"
      :src="settings[0].videobackground.url"
      :poster="settings[0].backgroundVideoImage.url"
      overlay="linear-gradient(180deg,#0000009b,#0000009b)"
    >
      <img
        width="400"
        :src="settings[0].logoURL.imageURL"
        class="logoImg"
        v-if="settings[0]"
      />
    </video-background>

    <VueSlickCarousel
      v-if="sliders.length > 0 && !settings[0].isBackgroundVideoActivated"
      v-bind="carouselSettings"
      class="rn-slider-area slider-activation rn-slick-dot dot-light mb--0"
    >
      <div
        class="
          slide slide-style-2
          align-center
          justify-center
          fullscreen
          bg_image
        "
        :data-black-overlay="settings[0].sliderOverlayLevel"
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
                <div
                  class="slide-btn"
                  v-if="slider.buttonText && slider.buttonURL"
                >
                  <a
                    class="rn-button-style--2 btn-primary-color"
                    :href="slider.buttonURL"
                    >{{ slider.buttonText }}</a
                  >
                </div>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import VueSlickCarousel from "vue-slick-carousel";

export default {
  components: { VueSlickCarousel },
  data() {
    return {
      carouselSettings: {
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
  computed: {
    ...mapGetters("sliders", ["sliders"]),
    ...mapGetters("settings", ["settings"]),
  },
  async created() {
    await this.$store.dispatch("sliders/getSliders", null, {
      root: true,
    });
    await this.$store.dispatch("settings/getSettings", null, {
      root: true,
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
.logoImg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.video-background {
  width: 100vw;
  height: 100vh;
}
</style>
