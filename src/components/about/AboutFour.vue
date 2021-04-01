<template>
  <v-row class="row--35" align="center">
    <v-col lg="5" md="5" cols="12">
      <div class="thumbnail">
        <slot name="thum-img"></slot>
      </div>
    </v-col>
    <v-col lg="7" md="7" cols="12">
      <div class="about-inner inner pt--100 pt_sm--40 pt_md--40">
        <div class="section-title">
          <h2 class="heading-title">Sobre mi</h2>
          <p class="description">
            Soy un autodidacta que le encanta la tecnología y el desarrollo de
            software, trabajé para todo tipo de empresas, pequeñas, medias y
            grandes. Me encanta aprender todo el tiempo, desde nuevas tecnologías, idiomas, cosas relacionadas a Ingeniería, etc, siempre estoy
            realizando algún curso o capacitación, creo que las ganas lo son
            todo al momento de autosuperarse. <br><br>Mi objetivo es el desarrollo de
            software escalable, seguro y confiable.
          </p>
        </div>
        <!-- End .section-title -->
        <div class="tab-wrapper mt--30">
          <v-row>
            <TabTwo />
          </v-row>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import TabTwo from "../../components/tabs/TabTwo";
export default {
  components: { TabTwo },
  data() {
    return {};
  },
};
</script>
