<template>
  <v-container>
    <v-row align="center" class="row--35">
      <v-col lg="5" md="5" cols="12">
        <div class="thumbnail">
          <slot name="thum-img"></slot>
        </div>
      </v-col>
      <v-col lg="7" md="7" cols="12">
        <div class="about-inner inner">
          <div class="section-title">
            <h2 class="heading-title">About</h2>
            <p class="description">
              Soy un autodidacta que le encanta la tecnología y el desarrollo de
              software, trabajé para todo tipo de empresas, pequeñas, medias y
              grandes. Me encanta aprender todo el tiempo, desde idiomas, nuevas
              tecnologías, cosas relacionadas a Ingeniería, etc, siempre estoy
              realizando algún curso o capacitación, creo que las ganas lo son
              todo al momento de autosuperarse. Mi objetivo es el desarrollo de
              software escalable, seguro y confiable.
            </p>
          </div>
          <v-row class="mt--30 mt_sm--10">
            <v-col lg="6" md="6" sm="12" cols="12">
              <div class="about-us-list">
                <h3 class="heading-title">Who we are</h3>
                <p>
                  There are many vtions of passages of Lorem Ipsum available,
                  but the majority have suffered.
                </p>
              </div>
            </v-col>
            <v-col lg="6" md="6" sm="12" cols="12">
              <div class="about-us-list">
                <h3 class="heading-title">Who we are</h3>
                <p>
                  There are many vtions of passages of Lorem Ipsum available,
                  but the majority have suffered.
                </p>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
