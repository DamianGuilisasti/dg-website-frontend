<template>
  <div class="row mt_dec--30">
    <!-- Start Single Service  -->
    <v-col
      lg="4"
      md="4"
      sm="6"
      cols="12"
      class="mt--30 mt_sm--5 mt_md--5"
      v-for="(service, i) in serviceContent"
      :key="i"
    >
      <div class="single-service service__style--4 large-size text-center">
        <router-link to="/service-details">
          <div class="service">
            <div class="icon" v-html="iconSvg(service.icon)"></div>
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
          icon: "check",
          title: "Autoadministrable",
          desc: ` Administra toda tu página web con unos pocos clicks, sin necesidad de un programador.`,
        },
        {
          icon: "check",
          title: "Tecnologías modernas",
          desc: ` Software desarrollado con las últimas y mejores tecnologías del mercado.`,
        },
        {
          icon: "check",
          title: "Compatible con smartphones",
          desc: ` Tu página web estará disponible en todos los dispositivos móviles y tablets.`,
        },
        {
          icon: "check",
          title: "Velocidad",
          desc: ` Software optimizado para que tu página web cargue lo más rápido posible.`,
        },
        {
          icon: "check",
          title: "Seguridad",
          desc: ` Nuestro software utiliza los mejores standares de seguridad y además cuenta con SSL.`,
        },
        {
          icon: "check",
          title: "Subido a la Nube",
          desc: ` Tu página web estará en la nube, en AWS, el mejor proovedor de servicios en la nube.`,
        },
        {
          icon: "check",
          title: "Portafolio",
          desc: ` Exhibe todo tu talento con una página web de portafolios. Muestra tus proyectos realizados a todos tus potenciales clientes.`,
        },
        {
          icon: "check",
          title: "Presupuestos",
          desc: ` Crea presupuestos para tus clientes en tan solo segundos. Podrás también editarlos o eliminarlos si lo deseas.`,
        },
        {
          icon: "check",
          title: "Administración de clientes",
          desc: ` Administra a todos tus clientes, su información y sus servicios en un solo lugar.`,
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
