<template>
  <ul class="brand-style-2">
    <li v-for="(brand, i) in logos" :key="i">
      <a :href="brand.url">
        <img :src="brand.logoImg.url" />
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    logos: Array,
  },
};
</script>
