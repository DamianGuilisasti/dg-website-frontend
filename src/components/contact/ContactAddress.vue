<template>
  <v-row justify="center">
    <!-- Start Single Address  -->
    <v-col lg="4" md="4" sm="6" cols="12" class="mt--40" v-if="phone">
      <div class="rn-address">
        <div class="icon">
          <i class="fas fa-phone"></i>
        </div>
        <div class="inner">
          <h4 class="title">Teléfono</h4>
          <p>
            <a :href="`tel:${phone}`">{{ phone }}</a>
          </p>
        </div>
      </div>
    </v-col>
    <!-- End Single Address  -->

    <!-- Start Single Address  -->
    <v-col lg="4" md="4" sm="6" cols="12" class="mt--40" v-if="email">
      <div class="rn-address">
        <div class="icon">
          <i class="fas fa-envelope"></i>
        </div>
        <div class="inner">
          <h4 class="title">Email</h4>
          <p>
            <a :href="`mailto:${email}`">{{ email }}</a>
          </p>
        </div>
      </div>
    </v-col>
    <!-- End Single Address  -->

    <!-- Start Single Address  -->
    <v-col lg="4" md="4" sm="6" cols="12" class="mt--40" v-if="address">
      <div class="rn-address">
        <div class="icon">
          <i class="fas fa-map-marker-alt"></i>
        </div>
        <div class="inner">
          <h4 class="title">Dirección</h4>
          <p>{{ address }}</p>
        </div>
      </div>
    </v-col>
    <!-- End Single Address  -->
  </v-row>
</template>

<script>
export default {
  props: {
    phone: String,
    email: String,
    address: String,
  },
};
</script>
