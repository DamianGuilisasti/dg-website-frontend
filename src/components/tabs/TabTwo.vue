<template>
  <v-col lg="12">
    <div class="tab-default">
      <v-tabs v-model="tab" flat hide-slider>
        <v-tab v-for="item in items" :key="item.id" :ripple="false">
          {{ item.name }}
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item
          transition="fade-transition"
          v-for="item in tabContent"
          :key="item.id"
        >
          <v-card flat>
            <v-card-text>
              <div class="single-tab-content">
                <ul>
                  <li v-for="(item, i) in item.content" :key="i">
                    <router-link to="/service"
                      >{{ item.title }}
                      <span> - {{ item.name }}</span></router-link
                    >
                    {{ item.desc }}
                  </li>
                </ul>
              </div>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </div>
  </v-col>
</template>
<script>
export default {
  data() {
    return {
      tab: null,
      items: [
        {
          id: 1,
          name: "Skills",
        },
        {
          id: 3,
          name: "Experiencia",
        },
        {
          id: 4,
          name: "Educación y Certificación",
        },
        {
          id: 5,
          name: "Idiomas",
        },
      ],

      tabContent: [
        {
          id: 1,
          content: [
            {
              title: "Vainilla Javascript",
              name: "Javascript",
              desc: "",
            },
            {
              title: "Vue Js",
              name: "Frontend",
              desc: "",
            },
            {
              title: "Vuetify",
              name: "Frontend",
              desc: "",
            },
            {
              title: "Node Js",
              name: "Server",
              desc: "",
            },
            {
              title: "Express",
              name: "Server",
              desc: "",
            },
            {
              title: "MongoDb",
              name: "Databases",
              desc: "",
            },
            {
              title: "CSS & SASS",
              name: "Styles",
              desc: "",
            },
            {
              title: "AWS",
              name: "Cloud Services",
              desc: "",
            },
            {
              title: "Apreniendo nuevas hábilidades",
              name: "",
              desc: "",
            },
          ],
        },
        {
          id: 3,
          content: [
            {
              title: "Web Developer",
              name: "Freelancer",
              desc: "Julio 2015 - Actualidad",
            },
          ],
        },
        {
          id: 4,
          content: [
            {
              title: "Primaria y Secundaria",
              name: "Escuela Nuestra Señora de los Ángeles",
              desc: "Finalización en 2011",
            },
            {
              title: "Analista de Sistemas",
              name: "Gamma Technical Institute",
              desc: "Finalización en 2015",
            },
            {
              title: "Ingeniería en Sistemas",
              name: "Universidad del Centro Educativo Latinoamericano",
              desc: "2015 - Actualidad (5to año.)",
            },
          ],
        },
        {
          id: 5,
          content: [
            {
              title: "Español",
              name: "Nativo",
              desc: "",
            },
            {
              title: "Inglés",
              name: "Intermedio",
              desc: "",
            },

          ],
        },
      ],
    };
  },
};
</script>
