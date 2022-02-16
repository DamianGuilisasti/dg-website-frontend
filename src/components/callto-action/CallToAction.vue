<template>
  <!-- Start Call To Action Area  -->
  <div
    class="call-to-action-wrapper call-to-action text-white-wrapper ptb--120 
          bg_image"
    data-black-overlay="7"
    :style="{ backgroundImage: 'url(' + calltoaction.backgroundImg.url + ')' }"
  >
    <v-container>
      <v-row>
        <v-col lg="12">
          <div class="inner text-center">
            <span>{{ calltoaction.subtitle }}</span>
            <h2>{{ calltoaction.title }}</h2>
            <a
              v-if="calltoaction.buttonText"
              class="rn-button-style--2"
              href="/#contact"
              ><span>{{ calltoaction.buttonText }}</span></a
            >
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
  <!-- End Call To Action Area  -->
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("calltoactions", ["calltoactions"]),
    calltoaction() {
      return this.calltoactions[0];
    },
  },
  async created() {
    await this.$store.dispatch("calltoactions/getCallToActions", null, {
      root: true,
    });
  },
};
</script>
