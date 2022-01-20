<template>
  <div>
    <v-tabs v-model="tab" centered flat hide-slider color="primary">
      <v-tab :ripple="false" v-for="item in tabItems" :key="item.id">{{
        item.name
      }}</v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in tabContent" :key="item.id">
        <!--         <CoolLightBox
          :items="item.content"
          :index="index"
          :fullScreen="true"
          :effect="'fade'"
          @close="index = null"
        >
        </CoolLightBox> -->
        <div
          class="gallery-wrapper gallery-grid mesonry-list grid-metro3"
          id="animated-thumbnials"
        >
          <div
            v-for="(item, i) in item.content"
            :key="i"
            @click="index = i"
            class="image masonry_item portfolio-33-33"
          >
            <div class="item-portfolio-static">
              <div class="portfolio-static">
                <div class="thumbnail-inner">
                  <div class="thumbnail">
                    <a :href="`/portfolio-details/${item.slug}`">
                      <v-img
                        :src="item.portfolioimages[0].url"
                        height="500px"
                        width="auto"
                        alt="portfolio image"
                      />
                    </a>
                  </div>
                </div>

                <div class="content">
                  <div class="inner">
                    <p :href="`/portfolio-details/${item.slug}`">
                      {{ item.category }}
                    </p>
                    <a :href="`/portfolio-details/${item.slug}`">
                      <h4>
                        {{ item.name }}
                      </h4>
                    </a>
                    <div class="portfolio-button">
                      <router-link
                        class="rn-btn"
                        :to="`/portfolio-details/${item.slug}`"
                        >Ver detalles</router-link
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
export default {
  props: {
    portfolios: Array,
    tabItems: Array,
    tabContent: Array,
  },
  data() {
    return {
      tab: null,
      index: null,
    };
  },
};
</script>
