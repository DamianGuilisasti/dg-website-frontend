<template>
  <v-app>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  methods: {
    setColor() {
      document.documentElement.style.setProperty(
        "--primary-color",
        this.settings[0].primaryColor
      );
      document.documentElement.style.setProperty(
        "--secondary-color",
        this.settings[0].secondaryColor
      );
      this.$vuetify.theme.themes.light.primary = this.settings[0].primaryColor;
    },
  },
  async created() {
    await this.$store.dispatch("settings/getSettings", null, { root: true });
    this.setColor();
  },
  computed: {
    ...mapGetters("settings", ["settings"]),
  },
};
</script>
