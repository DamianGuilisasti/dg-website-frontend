<template>
  <v-row align="start" class="row--35">
    <v-col lg="6" md="6" sm="12" cols="12" order="2" order-md="1">
      <div class="section-title text-left mb--50 mb_sm--30 mb_md--30">
        <h2 class="heading-title">Contact Us.</h2>
        <p class="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          cupiditate aperiam neque
        </p>
      </div>
      <div class="form-wrapper">
        <form @submit.prevent>
          <label>
            <input type="text" v-model="name" placeholder="Your Name *" />
          </label>

          <label>
            <input type="text" v-model="email" placeholder="Your email *" />
          </label>

          <label>
            <input
              type="text"
              v-model="subject"
              placeholder="Write a Subject"
            />
          </label>
          <label>
            <textarea v-model="message" placeholder="Your Message"></textarea>
          </label>
          <button
            class="rn-button-style--2 btn_solid"
            type="submit"
            value="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </v-col>
    <v-col lg="6" md="6" sm="12" cols="12" order="1" order-md="2">
      <div class="thumbnail mb_md--40 mb_sm--40">
        <img src="../../assets/images/about/about-6.jpg" alt="trydo" />
      </div>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    data() {
      return {
        name: "",
        email: "",
        subject: "",
        message: "",
      };
    },
  };
</script>
