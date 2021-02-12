<template>
  <a v-if="phone" :href="whatsappLink" class="whatsapp" target="_blank">
    <v-icon color="#fff" large class="whatsapp-icon">mdi-whatsapp</v-icon></a
  >
</template>
<script>
import axios from "axios";
export default {
  data: () => ({
    phone: "",
    text: "",
  }),
  mounted() {
    let me = this;
    axios
      .get("settings/list")
      .then(function (response) {
        me.phone = response.data[0].whatsapp.phone;
        me.text = response.data[0].whatsapp.text;
        me.dataId = response.data[0]._id;
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  computed: {
    whatsappLink() {
      return "https://wa.me/" + this.phone + "?text=" + this.text;
    },
  },
};
</script>
<style scoped lang="scss">
.whatsapp {
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 40px;
  right: 40px;
  background-color: #25d366;
  border-radius: 50px;
  text-align: center;
  font-size: 30px;
  z-index: 100;
}

.whatsapp-icon {
  margin-top: 5px;
}
</style>