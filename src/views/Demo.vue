<template>
  <div>
    <!-- Start Breadcrump Area  -->
    <div
      class="rn-page-title-area pt--120 pb--190 bg_image"
      :style="{
        backgroundImage: `url(https://res.cloudinary.com/degq0ap4m/image/upload/v1643639132/demo-background_m4ww8m.jpg)`,
        backgroundPosition: 'top',
      }"
      data-black-overlay="5"
    >
      <v-container>
        <v-row>
          <v-col cols="12">
            <div class="rn-page-title text-center pt--100">
              <h2 class="heading-title theme-gradient">
                DG Website Software
              </h2>
              <p>
                Aplicaciones Web de calidad.
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- End Breadcrump Area  -->

    <div class="rn-service-details rn-section-gap bg_color--1">
      <v-container>
        <v-row>
          <v-col lg="12">
            <div class="service-details-inner">
              <div class="inner">
                <!-- Start Single Content  -->
                <v-row
                  class="sercice-details-content pb--80 align-items-center"
                >
                  <v-col lg="6" md="6" cols="12">
                    <div class="thumb">
                      <img
                        class="w-100"
                        src="https://res.cloudinary.com/degq0ap4m/image/upload/v1643639605/demo-image1_shjgon.jpg"
                        alt="Service Images"
                      />
                    </div>
                  </v-col>
                  <v-col lg="6" md="6" cols="12" class="vertical-align">
                    <div class="details mt_md--30 mt_sm--30">
                      <h4 class="title">DG Website Software</h4>
                      <p>
                        DG Website es un software que fue desarrollado con el
                        propósito de ofrecer una página web
                        <b>autoadministrable</b> en dónde puedas crear,
                        modificar y eliminar todo el contenido de una manera
                        fácil y sin la necesidad de contar con un programador
                        para realizar cambios.
                      </p>
                      <p>
                        Este software está construido con las últimas y mejores
                        tecnologías tales como Vue.js, Vuetify, Node.js,
                        MongoDB, AWS, Docker, Javascript, Nginx, entre otras.
                      </p>
                      <h4 class="title">Con este software podrás:</h4>
                      <ul class="liststyle bullet">
                        <li>Tener tu página web autoadministrable.</li>
                        <li>
                          Administrar todo el contenido sin la necesidad de un
                          programador.
                        </li>
                        <li>
                          Crear un portafolio con tus proyectos realizados.
                        </li>
                        <li>
                          Crear presupuestos, descargarlos o enviarselos a tus
                          clientes.
                        </li>
                        <li>Administrar tus servicios y clientes.</li>
                        <li>Administrar los logos de tus clientes.</li>
                        <li>Administrar las reseñas de tus clientes.</li>
                        <li>
                          Y muchas cosas más..
                        </li>
                      </ul>
                    </div>
                  </v-col>
                </v-row>
                <!-- End Single Content  -->

                <!-- Start Single Content  -->
                <v-row
                  class="sercice-details-content align-items-center"
                >
                  <v-col
                    lg="6"
                    md="6"
                    cols="12"
                    order="2"
                    order-md="1"
                    class="vertical-align"
                  >
                    <div class="details mt_md--30 mt_sm--30">
                      <h4 class="title">
                        Contarás con un panel de administración
                      </h4>
                      <p>
                        Con el panel de administración podrás acceder con tu
                        usuario y contraseña para modificar todo lo que
                        necesites cuando quieras.
                      </p>
                      <p>
                        Modificar los datos nunca fue tan <b>fácil</b> y
                        <b>rápido</b>.
                      </p>
                    </div>
                  </v-col>
                  <v-col lg="6" md="6" cols="12" order="1" order-md="2">
                    <div class="thumb">
                      <img
                        class="w-100"
                        src="https://res.cloudinary.com/degq0ap4m/image/upload/v1643639605/demo-image_2_cqowkn.jpg"
                        alt="Service Images"
                      />
                    </div>
                  </v-col>
                </v-row>
<!--                 <v-row
                  class="sercice-details-content align-items-center justify-center"
                >
                  <v-col cols="8" class="text-center">
                    <h4 class="title pb--30">Video introductorio</h4>
                    <div class="thumb position-relative">
                      <CoolLightBox
                        :items="items"
                        :index="index"
                        @close="index = null"
                      >
                      </CoolLightBox>

                      <div class="thumbnail position-relative">
                        <div
                          v-for="(image, imageIndex) in items"
                          :key="imageIndex"
                        >
                          <img
                            class="w-100"
                            :src="image.thumb"
                            alt="About Images"
                          />
                          <a
                            @click="index = imageIndex"
                            class="video-popup play__btn"
                            ><span class="play-icon"></span
                          ></a>
                        </div>
                      </div>
                    </div> </v-col
                ></v-row> -->
                <!-- End Single Content  -->
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <!-- Start Service Area  -->
    <div class="rn-service-area rn-section-gap bg_color--1">
      <v-container>
        <v-row>
          <v-col cols="12">
            <div class="section-title text-center mb--30">
              <h2>Características del Software</h2>
              <p>
                Soluciones desarrolladas con las últimas y mejores tecnologías
                del mercado.
              </p>
            </div>
          </v-col>
        </v-row>
        <!-- End .row -->
        <ServiceFour />
      </v-container>
    </div>
    <!-- Start Service Area  -->
    <!-- Start Service Area  -->
    <div class="rn-service-area service-area rn-section-gap bg_color--5">
      <v-container>
        <v-row>
          <v-col cols="12">
            <div class="section-title text-center mb--30">
              <h2>Nuevas funcionalidades en camino.</h2>
              <p>
                Nuestro software siempre está creciendo con nuevas
                funcionalidades.
              </p>
            </div>
          </v-col>
        </v-row>
        <!-- End .row -->
        <ServiceThree />
      </v-container>
    </div>
    <!-- Start Service Area  -->
    <!-- Start Service Area  -->
    <div class="rn-service-area rn-section-gap bg_color--1">
      <v-container>
        <v-row>
          <v-col cols="12">
            <div class="section-title text-center mb--30">
              <h2>Demo</h2>
              <p>
                ¡Prueba gratis nuestro software y todas sus funcionalidades!
              </p>
            </div>
          </v-col>
        </v-row>
        <!-- End .row -->
        <div class="text-center">
          <p>Usuario de prueba: Demo</p>
          <p class="mb--40">Contraseña de prueba: Demo123</p>
          <a
            href="https://dgsoftware.com.ar"
            class="rn-button-style--2 btn_solid"
            target="”_blank”"
          >
            Sitio Web</a
          >
          <a
            href="https://admin.dgsoftware.com.ar"
            class="ml-10 rn-button-style--2 btn_solid"
            target="”_blank”"
          >
            Panel de administración</a
          >
        </div>
      </v-container>
    </div>
  </div>
</template>

<script>
import Header from "../components/header/Header";
import ServiceThree from "../components/service/ServiceThree";
import ServiceFour from "../components/service/ServiceFour";
import ServiceTwo from "../components/service/ServiceTwo";
import feather from "feather-icons";
export default {
  components: {
    Header,
    ServiceThree,
    ServiceFour,
    ServiceTwo,
  },
  data() {
    return {
      items: [
        {
          thumb: require("../assets/images/service/service-02.jpg"),
          src: "https://www.youtube.com/watch?v=ZOoVOfieAF8",
        },
      ],
      index: null,
      breadcrumbs: [
        {
          text: "Home",
          to: "/",
          disabled: false,
        },
        {
          text: "Service",
          to: "",
          disabled: true,
        },
      ],
      serviceContent2: [
        {
          icon: "cast",
          title: "Business Stratagy",
          desc: ` I throw myself down among the tall grass by the stream as I lie
                close to the earth.`,
        },
        {
          icon: "cast",
          title: "Website Development",
          desc: ` I throw myself down among the tall grass by the stream as I lie
                close to the earth.`,
        },
        {
          icon: "cast",
          title: "Marketing & Reporting",
          desc: `I throw myself down among the tall grass by the stream as I lie
                close to the earth.`,
        },
      ],
      serviceContent: [
        {
          icon: "cast",
          title: "Business Stratagy",
          desc: ` I throw myself down among the tall grass by the stream as I lie
                close to the earth.`,
        },
        {
          icon: "layers",
          title: "Website Development",
          desc: ` I throw myself down among the tall grass by the stream as I lie
                close to the earth.`,
        },
        {
          icon: "users",
          title: "Marketing & Reporting",
          desc: `I throw myself down among the tall grass by the stream as I lie
                close to the earth.`,
        },
        {
          icon: "monitor",
          title: "Mobile Development",
          desc: `I throw myself down among the tall grass by the stream as I lie
                close to the earth.`,
        },
        {
          icon: "camera",
          title: "Marketing & Reporting",
          desc: `I throw myself down among the tall grass by the stream as I lie
                close to the earth.`,
        },
        {
          icon: "activity",
          title: "Mobile Development",
          desc: ` I throw myself down among the tall grass by the stream as I lie
                close to the earth.`,
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

<style scoped>
.vertical-align {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
