<template>
  <v-row>
    <v-col cols="12">
      <!-- Start Tab Content  -->
      <div class="rn-testimonial-content">
        <v-tabs-items v-model="tab">
          <v-tab-item v-for="item in testimonialContent" :key="item.id">
            <v-card flat v-for="(item, i) in item.content" :key="i">
              
              <v-card-text>
                <div class="inner">
                  <p>
                    {{ item.description }}
                  </p>
                </div>
                <div class="author-info">
                  <h6>
                    <span>{{ item.name }}</span> -
                    {{ item.designation }}
                  </h6>
                </div>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
        <!-- End .v-tabs-items -->
        <v-tabs v-model="tab" centered hide-slider center-active>
          <v-tab v-for="item in tabItems" :key="item.id">
            <div class="thumb">
              <img :src="item.src" alt="testimonial image" />
            </div>
          </v-tab>
        </v-tabs>
        <!-- End .v-tabs -->
      </div>
      <!-- End Tab Content  -->
      <!-- End .rn-testimonial-content -->
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    testimonialContent: Array,
    tabItems: Array,
  },
  data() {
    return {
      tab: null,
    };
  },
};
</script>
