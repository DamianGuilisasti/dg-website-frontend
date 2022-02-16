<template>
  <v-row class="row--35" align="center">
    <v-col lg="5" md="5" cols="12">
      <div class="thumbnail">
        <slot name="thum-img"></slot>
      </div>
    </v-col>
    <v-col lg="7" md="7" cols="12">
      <div class="about-inner inner pt_sm--40 pt_md--40">
        <div class="section-title">
          <h2 class="heading-title">Sobre mi</h2>
          <p style="align-self: center;" v-html="about"></p>
        </div>
        <!-- End .section-title -->
        <!--         <div class="tab-wrapper mt--30">
          <v-row>
            <TabTwo />
          </v-row>
        </div> -->
      </div>
    </v-col>
  </v-row>
</template>

<script>
import TabTwo from "../../components/tabs/TabTwo";
export default {
  components: { TabTwo },
  props: {
    about: String,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.section-title p {
  padding: 0 !important;
  font-weight: 200 !important;
}
</style>
