<template>
  <ul class="brand-style-2">
    <li v-for="(brand, i) in logos" :key="i">
      <a :href="brand.url">
        <img :src="brand.logoImg.url" alt="Logo Images" />
      </a>
    </li>
  </ul>
</template>

<script>
import axios from "axios"
export default {
  data() {
    return {
      logos: [],
      brandImages: [
        {
          src: require("../../assets/images/brand/1.png"),
          url: "#",
        },
        {
          src: require("../../assets/images/brand/2.png"),
          url: "#",
        },
        {
          src: require("../../assets/images/brand/3.png"),
          url: "#",
        },
        {
          src: require("../../assets/images/brand/4.png"),
          url: "#",
        },
        {
          src: require("../../assets/images/brand/5.png"),
          url: "#",
        },
        {
          src: require("../../assets/images/brand/6.png"),
          url: "#",
        },
        {
          src: require("../../assets/images/brand/7.png"),
          url: "#",
        },
        {
          src: require("../../assets/images/brand/8.png"),
          url: "#",
        },
        {
          src: require("../../assets/images/brand/9.png"),
          url: "#",
        },
        {
          src: require("../../assets/images/brand/10.png"),
          url: "#",
        },
        {
          src: require("../../assets/images/brand/11.png"),
          url: "#",
        },
        {
          src: require("../../assets/images/brand/12.png"),
          url: "#",
        },
        {
          src: require("../../assets/images/brand/13.png"),
          url: "#",
        },
        {
          src: require("../../assets/images/brand/14.png"),
          url: "#",
        },
        {
          src: require("../../assets/images/brand/15.png"),
          url: "#",
        },
        {
          src: require("../../assets/images/brand/16.png"),
          url: "#",
        },
        {
          src: require("../../assets/images/brand/17.png"),
          url: "#",
        },
        {
          src: require("../../assets/images/brand/18.png"),
          url: "#",
        },
        {
          src: require("../../assets/images/brand/19.png"),
          url: "#",
        },
        {
          src: require("../../assets/images/brand/20.png"),
          url: "#",
        },
        {
          src: require("../../assets/images/brand/21.png"),
          url: "#",
        },
        {
          src: require("../../assets/images/brand/22.png"),
          url: "#",
        },
        {
          src: require("../../assets/images/brand/23.png"),
          url: "#",
        },
        {
          src: require("../../assets/images/brand/24.png"),
          url: "#",
        },
        {
          src: require("../../assets/images/brand/25.png"),
          url: "#",
        },
        {
          src: require("../../assets/images/brand/26.png"),
          url: "#",
        },
        {
          src: require("../../assets/images/brand/27.png"),
          url: "#",
        },
        {
          src: require("../../assets/images/brand/28.png"),
          url: "#",
        },
        {
          src: require("../../assets/images/brand/29.png"),
          url: "#",
        },
        {
          src: require("../../assets/images/brand/30.png"),
          url: "#",
        },
      ],
    };
  },
  methods: {
    getLogos() {
      let me = this;
      axios
        .get("logos/list")
        .then(function (response) {
          me.logos = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  created(){
    this.getLogos();
  }
};
</script>
