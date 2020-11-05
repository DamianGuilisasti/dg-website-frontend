<template>
  <div>
    <NavbarDG />
    <router-view />
    <FooterDG />
    <Whatsapp />
  </div>
</template>

<script>
import axios from "axios";
// @ is an alias to /src
import NavbarDG from "@/components/NavbarDG";
import FooterDG from "@/components/FooterDG";
import Whatsapp from "@/components/Whatsapp";
export default {
  name: "LayoutView",
  components: {
    NavbarDG,
    FooterDG,
    Whatsapp
  },
  data: () => ({
  }),
};
</script>
