<template>
  <div>
    <!-- Start Slider Area  -->
    <div class="rn-slider-area">
      <div
        class="
          slide
          personal-portfolio-slider
          slider-paralax slider-style-3
          d-flex
          align-center
          justify-center
          bg_image bg_image--16
        "
      >
        <BannerThree>
          <span slot="designation">My portfolio</span>
          <h1 class="heading-title" slot="heading-title">
            <span>Quality, scalable, manageable and easy to use </span>
            software.
          </h1>
        </BannerThree>
      </div>
    </div>
    <!-- End Slider Area -->

    <!-- Start Gallery Area  -->
    <div class="rn-gallery-area rn-section-gap bg_color--1 position-relative">
      <div class="rn-masonary-wrapper">
        <div class="wrapper plr--70 plr_sm--30 plr_md--30">
          <div class="be-custom-gallery">
            <PortfolioThree />
          </div>
        </div>
      </div>
    </div>
    <!-- End Gallery Area  -->
  </div>
</template>
<script>
import BannerThree from "../../components/slider/BannerThree";
import PortfolioThree from "../../components/portfolio/PortfolioThree";
export default {
  components: {
    BannerThree,
    PortfolioThree,
  },
  data() {
    return {};
  },
};
</script>
