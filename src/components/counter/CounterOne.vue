<template>
  <v-row>
    <!-- Start Single Counterup  -->
    <v-col
      lg="4"
      md="4"
      sm="4"
      cols="12"
      v-for="(counter, i) in counterUpContent"
      :key="i"
    >
      <div class="rn-counterup counterup_style--1">
        <h5 class="counter count">
          <VisibilitySensor @change="onChange">
            <countTo
              :endVal="status ? counter.endVal : 0"
              :autoplay="countUp"
              :duration="3000"
            ></countTo>
          </VisibilitySensor>
        </h5>
        <p class="description">
          {{ counter.desc }}
        </p>
      </div>
    </v-col>
    <!-- Start Single Counterup  -->
  </v-row>
</template>

<script>
import VisibilitySensor from "vue-visibility-sensor";
import countTo from "vue-count-to";

export default {
  components: {
    countTo,
    VisibilitySensor,
  },
  data() {
    return {
      countUp: true,
      status: false,
      counterUpContent: [
        {
          endVal: 3650,
          desc: `Tazas de café.`,
        },
        {
          endVal: 1825,
          desc: `Mates tomados.`,
        },
        {
          endVal: 30000,
          desc: `Líneas de código.`,
        },
      ],
    };
  },
  methods: {
    onChange(isVisible) {
      if (isVisible) {
        this.status = true;
      }
    },
  },
};
</script>
