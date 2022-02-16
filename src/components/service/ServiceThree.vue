<template>
  <div class="row mt_dec--30">
    <!-- Start Single Service  -->
    <v-col
      lg="4"
      md="4"
      sm="6"
      cols="12"
      class="mt--30"
      v-for="(service, i) in serviceContent"
      :key="i"
    >
      <div class="single-service service__style--2 bg-color-gray">
        <router-link to="/service-details">
          <div class="service">
            <div class="icon">
              <div v-html="iconSvg(service.icon)"></div>
            </div>
            <div class="content">
              <h3 class="heading-title">{{ service.title }}</h3>
              <p>
                {{ service.desc }}
              </p>
            </div>
          </div>
        </router-link>
      </div>
    </v-col>
    <!-- End Single Service  -->
  </div>
</template>

<script>
import feather from "feather-icons";
export default {
  data() {
    return {
      serviceContent: [
        {
          icon: "truck",
          title: "Blog",
          desc: ` Crea, actualiza y elimina publicaciones. Muestrale al mundo todo tu potencial de manera super fácil.`,
        },
        {
          icon: "truck",
          title: "Formulario de contacto",
          desc: ` Permíteles a tus clientes completar un formulario de contacto para contactarte vía mail.`,
        },
        {
          icon: "truck",
          title: "Mapa de Google",
          desc: `Muestra la ubicación exacta de tu negocio y cómo llegar hasta el.`,
        },
        {
          icon: "truck",
          title: "Sección Equipo",
          desc: `Muestra a tus clientes todo tu equipo de trabajo.`,
        },
        {
          icon: "truck",
          title: "Idiomas",
          desc: `Muestrale al mundo tu negocio en diferentes idiomas, no te pierdas de ningún cliente.`,
        },
        {
          icon: "truck",
          title: "Sección Productos",
          desc: ` Podrás cargar, modificar o eliminar productos y mostrarlos en tu página web.`,
        },
      ],
    };
  },
  methods: {
    iconSvg(icon) {
      return feather.icons[icon].toSvg();
    },
  },
};
</script>
