<template>
  <v-row>
    <v-col cols="12">
      <!-- Start Tab Content  -->
      <div class="rn-testimonial-content">
        <v-tabs-items v-model="tab">
          <v-tab-item v-for="item in testimonialContent" :key="item.id">
            <v-card flat v-for="(item, i) in item.content" :key="i">
              <v-card-text>
                <div class="inner">
                  <p>
                    {{ item.description }}
                  </p>
                </div>
                <div class="author-info">
                  <h6>
                    <span>{{ item.name }}</span> -
                    {{ item.designation }}
                  </h6>
                </div>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
        <!-- End .v-tabs-items -->
        <v-tabs v-model="tab" centered hide-slider center-active>
          <v-tab v-for="item in tabItems" :key="item.id">
            <div class="thumb">
              <img :src="item.src" alt="testimonial image" />
            </div>
          </v-tab>
        </v-tabs>
        <!-- End .v-tabs -->
      </div>
      <!-- End .rn-testimonial-content -->
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      tab: null,
      testimonialContent: [
        {
          id: 1,
          content: [
            {
              name: "Ana María Cabrera",
              description:
                " Estoy mas que conforme con el trabajo de Damián , supo quitar todas mis dudas , siempre ha Sido muy atento y claro con todos los detalles.  EXCELENTE. Desempeño....Muchas gracias 😁",
              designation: " Valenna QD.",
            },
          ],
        },
        {
          id: 2,
          content: [
            {
              name: "Pablo Colacrai",
              description:
                "Gracias Damián por tu servicio la verdad que estamos súper conformes, una web personalizada hecha con creatividad y profesionalismo.",
              designation: " Office Amoblamientos.",
            },
          ],
        },
        {
          id: 3,
          content: [
            {
              name: "Sebastian Garavelli",
              description:
                "He trabajado más de un proyecto con Damián. Es responsable, tiene capacidad y responde con eficiencia a las necesidades de los clientes.",
              designation: " FIAL Desarrollos.",
            },
          ],
        },
        {
          id: 4,
          content: [
            {
              name: "Sheila Sanicandro ",
              description:
                "Excelente trabajo!! Gracias por la paciencia y la responsabilidad y estar en todos los detalles! 100% recomendable. La página quedó excelente, rápida y segura 👏🏼",
              designation: " Importados SL.",
            },
          ],
        },
        {
          id: 5,
          content: [
            {
              name: "José Kapu",
              description: `Le encargamos a Damián el diseño y construcción del nuevo sitio web de nuestra empresa, CSi Electrónica S.R.L.
Realmente hizo un trabajo impecable, muy prolijo y minucioso, hasta en los mínimos detalles. Quedamos muy conformes con la nueva página, ahora tenemos una presencia más moderna y dinámica en la web, con carrito de compras y todo.
Esperamos que a nuestros clientes les guste tanto como a nosotros, y que ésto se traduzca en más y mejores ventas.
Gracias Damián, saludos y felicitaciones!!`,
              designation: " CSI Electrónica.",
            },
          ],
        },
        {
          id: 6,
          content: [
            {
              name: "Antonio Barbini",
              description: `Gran trabajo Damian! Muchos de nuestros actuales clientes llegaron por el contacto a través de la página.
Agilidad - responsabilidad - creatividad y proactividad son los puntos destacables!`,
              designation: " Byo Alimentos.",
            },
          ],
        },
        {
          id: 7,
          content: [
            {
              name: "Paula Bustamante",
              description:
                "Excelente trabajo! Respuesta y resolución inmediata ! Super responsable, y con muchisima amabilidad ! Gracias Damian por la.paciencia !! Suuuper recomiendo a Damián. Da gusto trabajar con personas asi.",
              designation: " BUSTAMANTE SRL.",
            },
          ],
        },
      ],

      tabItems: [
        {
          id: 1,
          src: require("../../assets/images/client/testimonial-1.png"),
        },
        {
          id: 2,
          src: require("../../assets/images/client/testimonial-2.png"),
        },
        {
          id: 3,
          src: require("../../assets/images/client/testimonial-3.png"),
        },
        {
          id: 4,
          src: require("../../assets/images/client/testimonial-4.png"),
        },
        {
          id: 5,
          src: require("../../assets/images/client/testimonial-5.png"),
        },
        {
          id: 6,
          src: require("../../assets/images/client/testimonial-6.png"),
        },
        {
          id: 7,
          src: require("../../assets/images/client/testimonial-7.png"),
        },
      ],
    };
  },
};
</script>
