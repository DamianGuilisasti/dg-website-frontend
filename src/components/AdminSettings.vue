<template>
  <v-row>
    <v-col cols="12" sm="12" md="12" xl="8">
      <v-form>
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header>
              <h3>Información de la empresa</h3>
              <template v-slot:actions>
                <v-icon color="primary"> $expand </v-icon>
              </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    label="Nombre de la empresa"
                    v-model="companyName"
                    outlined
                    persistent-hint
                    hint="Dejar en vacío para desactivarlo - Esta información se mostrará toda la página."
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12">
                  <v-textarea
                    outlined
                    name="input-7-4"
                    v-model="aboutInfo"
                    label="Información sobre la empresa"
                    persistent-hint
                    hint="Dejar en vacío para desactivarlo - Esta información se mostrará en la página Nosotros."
                  ></v-textarea>
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <v-btn color="success" class="mr-4" @click="updateInfo"
                    >Guardar cambios</v-btn
                  >
                </v-col>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>
              <h3>Redes sociales</h3>
              <template v-slot:actions>
                <v-icon color="primary"> $expand </v-icon>
              </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    label="Facebook"
                    v-model="facebook"
                    outlined
                    persistent-hint
                    hint="Link a red social Facebook - Dejar en vacío para desactivarlo."
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    label="Instagram"
                    v-model="instagram"
                    outlined
                    persistent-hint
                    hint="Link a red social Instagram - Dejar en vacío para desactivarlo."
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    label="Google"
                    v-model="google"
                    outlined
                    persistent-hint
                    hint="Link a red social Google - Dejar en vacío para desactivarlo."
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    label="Twitter"
                    v-model="twitter"
                    outlined
                    persistent-hint
                    hint="Link a red social Twitter - Dejar en vacío para desactivarlo."
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    label="Youtube"
                    v-model="youtube"
                    outlined
                    persistent-hint
                    hint="Link a red social Youtube - Dejar en vacío para desactivarlo."
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12">
                  <v-text-field
                    label="Linkedin"
                    v-model="linkedin"
                    outlined
                    persistent-hint
                    hint="Link a red social Linkedin - Dejar en vacío para desactivarlo."
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <v-btn color="success" class="mr-4" @click="updateSocialMedia"
                    >Guardar cambios</v-btn
                  >
                </v-col>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>
              <h3>Whatsapp</h3>
              <template v-slot:actions>
                <v-icon color="primary"> $expand </v-icon>
              </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    label="Número de Whatsapp"
                    v-model="phone"
                    outlined
                    persistent-hint
                    hint="Ejemplo: +5493413354476 - Dejar en vacío para desactivarlo."
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12">
                  <v-text-field
                    label="Texto de Whatsapp"
                    v-model="text"
                    outlined
                    persistent-hint
                    hint='Ejemplo: "Hola, quería consultar lo siguiente:" - Dejar en vacío para desactivarlo.'
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <v-btn color="success" class="mr-4" @click="updateWhatsapp"
                    >Guardar cambios</v-btn
                  >
                </v-col>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>

        <div class="text-center ma-2">
          <v-snackbar v-model="snackbarUpdate" color="success">
            <p>Los cambios se han realizado correctamente.</p>
            <template v-slot:action="{ attrs }">
              <v-btn dark text v-bind="attrs" @click="snackbarUpdate = false"
                >Cerrar</v-btn
              >
            </template>
          </v-snackbar>

          <v-snackbar v-model="snackbarError" color="warning">
            <p>
              Ha ocurrido un error, por favor actualice la página e intentelo
              nuevamente.
            </p>
            <template v-slot:action="{ attrs }">
              <v-btn dark text v-bind="attrs" @click="snackbarError = false"
                >Cerrar</v-btn
              >
            </template>
          </v-snackbar>
        </div>
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    snackbarAdd: false,
    snackbarUpdate: false,
    snackbarError: false,
    companyName: "",
    dataId: "",
    aboutInfo: "",
    facebook: "",
    instagram: "",
    google: "",
    linkedin: "",
    youtube: "",
    twitter: "",
    phone: "",
    text: "",
  }),
  mounted() {
    let me = this;
    axios
      .get("settings/list")
      .then(function (response) {
        me.aboutInfo = response.data[0].aboutInfo;
        me.companyName = response.data[0].companyName;
        me.phone = response.data[0].whatsapp.phone;
        me.text = response.data[0].whatsapp.text;
        me.facebook = response.data[0].socialMedia.facebook;
        me.instagram = response.data[0].socialMedia.instagram;
        me.google = response.data[0].socialMedia.google;
        me.linkedin = response.data[0].socialMedia.linkedin;
        me.youtube = response.data[0].socialMedia.youtube;
        me.twitter = response.data[0].socialMedia.twitter;
        me.dataId = response.data[0]._id;
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  methods: {
    updateInfo() {
      let me = this;
      axios
        .put("settings/updateInfo", {
          _id: this.dataId,
          aboutInfo: this.aboutInfo,
          companyName: this.companyName,
        })
        .then(function (response) {
          me.snackbarUpdate = true;
        })
        .catch(function (error) {
          console.log(error);
          me.snackbarError = true;
        });
    },
    updateSocialMedia() {
      let me = this;
      axios
        .put("settings/updateSocialMedia", {
          _id: this.dataId,
          facebook: this.facebook,
          instagram: this.instagram,
          twitter: this.twitter,
          google: this.google,
          youtube: this.youtube,
          linkedin: this.linkedin,
        })
        .then(function (response) {
          me.snackbarUpdate = true;
        })
        .catch(function (error) {
          console.log(error);
          me.snackbarError = true;
        });
    },
    updateWhatsapp() {
      let me = this;
      axios
        .put("settings/updateWhatsapp", {
          _id: this.dataId,
          phone: this.phone,
          text: this.text,
        })
        .then(function (response) {
          me.snackbarUpdate = true;
        })
        .catch(function (error) {
          console.log(error);
          me.snackbarError = true;
        });
    },
  },
};
</script>

<style>
.v-application p {
  margin-bottom: 0px;
}
</style>