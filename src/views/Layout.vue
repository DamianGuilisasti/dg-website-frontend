<template>
  <div>
    <router-view />
    <Whatsapp />
  </div>
</template>

<script>
import Whatsapp from "@/components/Whatsapp";
export default {
  name: "LayoutView",
  components: {
    Whatsapp
  },
  data: () => ({
  }),
};
</script>
