<template>
  <div>
    <!-- Start Slider Area -->
    <div class="slider-wrapper">
      <PortfolioSlider />
    </div>
    <!-- End Slider Area -->
    <!-- Start Slider Area  -->
    <!--     <div class="rn-slider-area">
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
    </div> -->
    <!-- End Slider Area -->

    <!-- Start Gallery Area  -->
    <div class="rn-gallery-area rn-section-gap bg_color--1 position-relative">
      <div class="rn-masonary-wrapper">
        <div class="wrapper plr--70 plr_sm--30 plr_md--30">
          <div class="be-custom-gallery">
            <Portfolios
              :portfolios="portfolios"
              :tabItems="tabItems"
              :tabContent="tabContent"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- End Gallery Area  -->
  </div>
</template>
<script>
import PortfolioSlider from "../components/slider/PortfolioSlider";
import Portfolios from "../components/portfolio/PortfolioThree";
import axios from "axios";
export default {
  components: {
    PortfolioSlider,
    Portfolios,
  },
  methods: {
    getPortfolios() {
      let me = this;
      axios
        .get("portfolios/listActives")
        .then(function(response) {
          me.portfolios = response.data;
          me.getTabContent();
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getTabItems() {
      let me = this;
      axios
        .get("portfoliocategories")
        .then(function(response) {
          me.portfoliocategories = response.data;
          me.portfoliocategories.forEach((item, i) => {
            me.tabItems.push({
              id: item.name,
              name: item.name,
            });
          });
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getTabContent() {
      this.portfolios.forEach((item, i) => {
        this.portfolios[i].category = item.category.name;
      });

      function groupBy(key) {
        return function group(array) {
          return array.reduce((acc, obj) => {
            const property = obj[key];
            acc[property] = acc[property] || [];
            acc[property].push(obj);
            return acc;
          }, {});
        };
      }

      const groupByCategory = groupBy("category");
      const projectsSortedByCategory = groupByCategory(this.portfolios);

      for (const groupByCategory in projectsSortedByCategory) {
        this.tabContent.push({
          id: groupByCategory,
          name: groupByCategory,
          content: projectsSortedByCategory[groupByCategory],
        });
      }
    },
  },
  created() {
    this.getPortfolios();
    this.getTabItems();
  },
  data() {
    return {
      portfolios: [],
      tabItems: [],
      tabContent: [],
      portfoliocategories: [],
    };
  },
};
</script>
