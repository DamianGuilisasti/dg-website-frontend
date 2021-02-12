<template>
  <div id="app">
    <v-app>
      <v-main>
        <section id="presentation" class="container">
          <v-row align="center" justify="space-around" class="mt-5">
            <v-col cols="12" md="6">
              <v-card
                class="elevation-24 mx-auto"
                style="height: 400px; max-width: 100%; width: 700px"
              >
                <v-img src="../assets/damian.png"> </v-img>
              </v-card>
            </v-col>
            <v-col cols="auto">
              <h1 class="font-weight-bold display-4">
                Guilisasti <span class="font-weight-light">Damián</span>
              </h1>
              <div class="grey--text mb-md-12 mb-6 display-1">
                Full Stack <em>Web Developer</em>
              </div>
              <v-btn
                x-large
                dark
                color="secondary"
                block
                class="mt-3 elevation-6"
                >Contáctame</v-btn
              >
            </v-col>
            <v-col cols="12"> </v-col>
          </v-row>
        </section>

        <section id="about-me">
          <div class="py-12"></div>

          <v-container class="text-center">
            <h2 class="display-2 font-weight-bold mb-3">ABOUT ME</h2>

            <v-responsive class="mx-auto mb-8" width="56">
              <v-divider class="mb-1"></v-divider>

              <v-divider></v-divider>
            </v-responsive>

            <v-row>
              <v-col cols="6">
                <v-avatar class="elevation-12 mb-12" size="400">
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/john.png"
                  ></v-img> </v-avatar
              ></v-col>
              <v-col cols="6">
                <v-responsive
                  class="mx-auto title font-weight-light mb-8"
                  max-width="720"
                >
                  {{ aboutInfo }}asd
                </v-responsive>
              </v-col>
            </v-row>
          </v-container>

          <div class="py-12"></div>
        </section>

        <section id="features" class="grey lighten-3">
          <div class="py-12"></div>

          <v-container class="text-center">
            <h2 class="display-2 font-weight-bold mb-3">SERVICIOS</h2>

            <v-responsive class="mx-auto mb-12" width="56">
              <v-divider class="mb-1"></v-divider>

              <v-divider></v-divider>
            </v-responsive>

            <v-row>
              <v-col
                v-for="({ icon, title, text }, i) in features"
                :key="i"
                cols="12"
                md="4"
              >
                <v-card class="py-12 px-4" color="grey lighten-5 service" flat>
                  <v-theme-provider dark>
                    <div>
                      <v-avatar color="primary" size="88">
                        <v-icon large v-text="icon"></v-icon>
                      </v-avatar>
                    </div>
                  </v-theme-provider>

                  <v-card-title
                    class="justify-center font-weight-black text-uppercase"
                    v-text="title"
                  ></v-card-title>

                  <v-card-text class="subtitle-1" v-text="text"> </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-container>

          <div class="py-12"></div>
        </section>

        <section id="reviews" class="grey lighten-3">
          <v-slide-group v-model="model" class="pa-4" show-arrows>
            <v-slide-item v-for="n in 8" :key="n" v-slot="{ active, toggle }">
              <v-card class="elevation-3 ma-4" width="300">
                <v-card-title class="headline">
                  Rate Our Framework
                </v-card-title>
                <v-card-text>
                  If you enjoy using Vuetify, please take a few seconds to rate
                  your experience with the framework. It really helps!

                  <div class="text-center mt-12">
                    <v-rating
                      readonly
                      value="5"
                      color="yellow darken-3"
                      background-color="grey darken-1"
                      empty-icon="$ratingFull"
                      half-increments
                      hover
                      large
                    ></v-rating>
                  </div>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                  <p class="ml-2">Ruben Farina</p>
                </v-card-actions>
              </v-card>
            </v-slide-item>
          </v-slide-group>
          <div class="py-12"></div>
        </section>

        <section id="stats">
          <v-parallax
            :height="$vuetify.breakpoint.smAndDown ? 700 : 500"
            src="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
          >
            <v-container fill-height>
              <v-row class="mx-auto">
                <v-col
                  v-for="[value, title] of stats"
                  :key="title"
                  cols="12"
                  md="3"
                >
                  <div class="text-center">
                    <div
                      class="display-3 font-weight-black mb-4"
                      v-text="value"
                    ></div>

                    <div
                      class="title font-weight-regular text-uppercase"
                      v-text="title"
                    ></div>
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </v-parallax>
        </section>

        <section id="clients">
          <div class="py-12"></div>

          <v-container>
            <h2
              class="display-2 font-weight-bold mb-3 text-uppercase text-center"
            >
              Clients
            </h2>

            <v-responsive class="mx-auto mb-12" width="56">
              <v-divider class="mb-1"></v-divider>

              <v-divider></v-divider>
            </v-responsive>

            <v-slide-group v-model="model" class="pa-4" show-arrows>
              <v-slide-item v-for="n in 8" :key="n" v-slot="{ active, toggle }">
                <v-card
                  :color="active ? 'primary' : 'grey lighten-1'"
                  class="ma-4"
                  height="200"
                  width="200"
                  @click="toggle"
                >
                  <v-row class="fill-height" align="center" justify="center">
                    <v-scale-transition>
                      <v-icon
                        v-if="active"
                        color="white"
                        size="48"
                        v-text="'mdi-close-circle-outline'"
                      ></v-icon>
                    </v-scale-transition>
                  </v-row>
                </v-card>
              </v-slide-item>
            </v-slide-group>

            <v-expand-transition>
              <v-sheet v-if="model != null" height="200" tile>
                <v-row class="fill-height" align="center" justify="center">
                  <h3 class="title">Selected {{ model }}</h3>
                </v-row>
              </v-sheet>
            </v-expand-transition>
          </v-container>

          <div class="py-12"></div>
        </section>

        <section id="budget">
          <v-container class="mb-4">
            <v-stepper v-model="e1">
              <v-stepper-header>
                <template v-for="n in steps">
                  <v-stepper-step
                    :key="`${n}-step`"
                    :complete="e1 > n"
                    :step="n"
                    editable
                  >
                    Step {{ n }}
                  </v-stepper-step>

                  <v-divider v-if="n !== steps" :key="n"></v-divider>
                </template>
              </v-stepper-header>

              <v-stepper-items>
                <v-stepper-content
                  v-for="n in steps"
                  :key="`${n}-content`"
                  :step="n"
                >
                  <v-card
                    class="mb-12"
                    color="grey lighten-1"
                    height="200px"
                  ></v-card>

                  <v-btn color="primary" @click="nextStep(n)"> Continuar </v-btn>

                  <v-btn text> Cancelar </v-btn>
                </v-stepper-content>
              </v-stepper-items>
            </v-stepper>
          </v-container>
        </section>

        <section id="blog">
          <v-container>
            <h2
              class="display-2 font-weight-bold mb-3 text-uppercase text-center"
            >
              Blog
            </h2>

            <v-responsive class="mx-auto mb-12" width="56">
              <v-divider class="mb-1"></v-divider>

              <v-divider></v-divider>
            </v-responsive>

            <v-row>
              <v-col
                v-for="({ src, text, title }, i) in articles"
                :key="i"
                cols="12"
                md="4"
              >
                <v-img
                  :src="src"
                  class="mb-4"
                  height="275"
                  max-width="100%"
                ></v-img>

                <h3
                  class="font-weight-black mb-4 text-uppercase"
                  v-text="title"
                ></h3>

                <div class="title font-weight-light mb-5" v-text="text"></div>

                <v-btn class="ml-n4 font-weight-black" text>
                  Continue Reading
                </v-btn>
              </v-col>
            </v-row>
          </v-container>

          <div class="py-12"></div>
        </section>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    e1: 1,
    steps: 2,
    aboutInfo: "",
    articles: [
      {
        src:
          "https://images.unsplash.com/photo-1423784346385-c1d4dac9893a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        title: "Mobile first & Responsive",
        text:
          "Phasellus lorem enim, luctus ut velit eget, convallis egestas eros. Sed ornare ligula eget tortor tempor, quis porta tellus dictum.",
      },
      {
        src:
          "https://images.unsplash.com/photo-1475938476802-32a7e851dad1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        title: "Think outside the box",
        text:
          "Nam ut leo ipsum. Maecenas pretium aliquam feugiat. Aenean vel tempor est, vitae tincidunt risus. Sed sodales vestibulum nibh.",
      },
      {
        src:
          "https://images.unsplash.com/photo-1416339442236-8ceb164046f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1892&q=80",
        title: "Small changes, big difference",
        text:
          "Vestibulum in dictum velit, in rhoncus nibh. Maecenas neque libero, interdum a dignissim in, aliquet vitae lectus. Phasellus lorem enim, luctus ut velit eget.",
      },
    ],
    features: [
      {
        icon: "mdi-account-group-outline",
        title: "Web Development",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate sint possimus quidem atque harum excepturi nemo velit tempora! Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores nam",
      },
      {
        icon: "mdi-update",
        title: "Ecommerce",
        text:
          "Sed ut elementum justo. Suspendisse non justo enim. Vestibulum cursus mauris dui, a luctus ex blandit. Lorem ipsum dolor sit amet consectetur adipisicing elit. qui ipsum eveniet facilis obcaecati corrupti consectetur adipisicing elit.",
      },
      {
        icon: "mdi-shield-outline",
        title: "Long-term Support",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate sint possimus quidem atque harum excepturi nemo velit tempora! Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores nam",
      },
    ],
    stats: [
      ["24k", "Github Stars"],
      ["330+", "Releases"],
      ["1m", "Downloads/mo"],
      ["5m", "Total Downloads"],
    ],
    model: 0,
    colors: ["primary", "secondary", "yellow darken-2", "red", "orange"],
  }),
  methods: {
    nextStep(n) {
      if (n === this.steps) {
        this.e1 = 1;
      } else {
        this.e1 = n + 1;
      }
    },
  },
  mounted() {
    let me = this;
    axios
      .get("settings/list")
      .then(function (response) {
        console.log(response);
        me.aboutInfo = response.data[0].aboutInfo;
        me.companyName = response.data[0].companyName;
        me.dataId = response.data[0]._id;
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  watch: {
    steps(val) {
      if (this.e1 > val) {
        this.e1 = val;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.v-main {
  padding: 0px !important;
}
.service:hover {
  box-shadow: 0 3px 15px -2px rgba(0, 0, 0, 0.12) !important;
  transform: translateY(-4px);
  transition: box-shadow 0.2s, transform 0.2s;
}
#presentation {
  margin-top: 150px;
}
</style>



