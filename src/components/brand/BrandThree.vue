<template>
  <ul class="brand-style-2">
    <li v-for="(brand, i) in brandImages" :key="i">
      <a :href="brand.url">
        <img :src="brand.src" alt="Logo Images" />
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      brandImages: [
        {
          src: require("../../assets/images/technologies/nuxt.png"),
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
      ],
    };
  },
};
</script>
