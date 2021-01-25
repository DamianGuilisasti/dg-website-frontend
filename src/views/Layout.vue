<template>
  <div>
    <Navbar />
    <router-view />
    <Footer />
    <Whatsapp />
  </div>
</template>

<script>
import axios from "axios";
// @ is an alias to /src
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Whatsapp from "@/components/Whatsapp";
export default {
  name: "LayoutView",
  components: {
    Navbar,
    Footer,
    Whatsapp
  },
  data: () => ({
  }),
};
</script>
