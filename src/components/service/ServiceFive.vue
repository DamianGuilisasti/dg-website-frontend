<template>
  <v-row>
    <v-col
      md="4"
      sm="6"
      cols="12"
      class="mt--30"
      v-for="(service, i) in services"
      :key="i"
    >
      <div class="standard-service">
        <div class="thumbnail">
          <router-link :to="`/service-details/${service.slug}`"
            ><img width="100%" :src="service.servicesimages[0].url" />
          </router-link>
        </div>
        <div class="content">
          <h3>
            <router-link :to="`/service-details/${service.slug}`">{{
              service.name
            }}</router-link>
          </h3>
          <p>
            {{ service.shortdescription }}
          </p>
          <router-link
            class="btn-transparent rn-btn-dark"
            :to="`/service-details/${service.slug}`"
            >Me interesa</router-link
          >
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    services: Array,
  },
};
</script>
<style scoped>
.thumbnail img {
  width: 100%;
  background-size: cover;
  object-fit: cover;
  height: 400px;
}
</style>
