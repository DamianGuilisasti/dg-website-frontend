<template>
  <v-row>
    <v-col cols="12" sm="12" md="12" xl="12">
      <h1>Configuración</h1>
      <v-divider></v-divider>
      <v-form class="pt-5">
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header>
              <h3 class="mb--0">Información de la empresa</h3>
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
                  <v-text-field
                    label="Teléfono de la empresa"
                    v-model="companyPhone"
                    outlined
                    persistent-hint
                    hint="Dejar en vacío para desactivarlo - Esta información se mostrará toda la página."
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12">
                  <v-text-field
                    label="Email de la empresa"
                    v-model="companyEmail"
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
                  <v-btn color="success" class="mr-4 mt-4" @click="updateInfo"
                    >Guardar cambios</v-btn
                  >
                </v-col>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>
              <h3 class="mb--0">Redes sociales</h3>
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
                  <v-btn
                    color="success"
                    class="mr-4 mt-4"
                    @click="updateSocialMedia"
                    >Guardar cambios</v-btn
                  >
                </v-col>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>
              <h3 class="mb--0">Whatsapp</h3>
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
                  <v-btn
                    color="success"
                    class="mr-4 mt-4"
                    @click="updateWhatsapp"
                    >Guardar cambios</v-btn
                  >
                </v-col>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>
              <h3 class="mb--0">Logo</h3>
              <template v-slot:actions>
                <v-icon color="primary"> $expand </v-icon>
              </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-row>
                <v-col cols="12">
                  <v-file-input
                    :loading="loadingLogo"
                    v-if="!imageURL"
                    v-model="imageUploaded"
                    color="deep-purple accent-4"
                    label="Logo de la empresa"
                    placeholder="Seleccionar logo"
                    prepend-icon="mdi-paperclip"
                    outlined
                    persistent-hint
                    hint="El logo debe ser de formato PNG o JPG."
                    :show-size="1000"
                  >
                    <template v-slot:selection="{ index, text }">
                      <v-chip
                        v-if="index < 2"
                        color="deep-purple accent-4"
                        dark
                        label
                        small
                      >
                        {{ text }}
                      </v-chip>

                      <span
                        v-else-if="index === 2"
                        class="overline grey--text text--darken-3 mx-2"
                      >
                        +{{ files.length - 2 }} File(s)
                      </span>
                    </template>
                  </v-file-input>

                  <img height="50px" :src="imageURL" v-if="imageURL" />
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <v-btn color="success" class="mr-4 mt-4" @click="updateLogo"
                    >Guardar cambios</v-btn
                  >
                  <v-btn
                    v-if="imageURL"
                    color="red--text"
                    class="mr-4 mt-4"
                    @click="deleteLogo"
                    >Eliminar logo</v-btn
                  >
                </v-col>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    companyName: "",
    companyEmail: "",
    companyPhone: "",
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
    imageFile: "",
    imageUploaded: null,
    imageURL: "",
    whatsapp: {
      phone: "",
      text: "",
    },
    loadingLogo: false,
  }),
  mounted() {
    let me = this;
    axios
      .get("settings/list")
      .then(function (response) {
        me.aboutInfo = response.data[0].aboutInfo;
        me.companyName = response.data[0].companyName;
        me.companyPhone = response.data[0].companyPhone;
        me.companyEmail = response.data[0].companyEmail;
        me.phone = response.data[0].whatsapp.phone;
        me.text = response.data[0].whatsapp.text;
        me.facebook = response.data[0].socialMedia.facebook;
        me.instagram = response.data[0].socialMedia.instagram;
        me.google = response.data[0].socialMedia.google;
        me.linkedin = response.data[0].socialMedia.linkedin;
        me.youtube = response.data[0].socialMedia.youtube;
        me.twitter = response.data[0].socialMedia.twitter;
        me.imageURL = response.data[0].logoURL.imageURL;
        me.dataId = response.data[0]._id;
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  methods: {
    deleteLogo() {
      let me = this;
      axios
        .put("settings/deleteLogo", { _id: this.dataId })
        .then(function (response) {
          me.imageUploaded = null;
          me.updateNewLogo();
          me.$store.dispatch("setSnackbar", {
            text: "Se eliminó correctamente el logo.",
          });
        })
        .catch(function (error) {
          console.log(error);
          me.$store.dispatch("setSnackbar", {
            text:
              "Hubo un error al eliminar el logo, por favor actualice la página e intente nuevamente.",
            color: "error",
          });
        });
    },
    updateNewLogo() {
      let me = this;
      axios
        .get("settings/list")
        .then(function (response) {
          me.imageURL = response.data[0].logoURL.imageURL;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    updateInfo() {
      let me = this;
      axios
        .put("settings/updateInfo", {
          _id: this.dataId,
          aboutInfo: this.aboutInfo,
          companyName: this.companyName,
          companyPhone: this.companyPhone,
          companyEmail: this.companyEmail,
        })
        .then(function (response) {
          me.$store.dispatch("setSnackbar", {
            text: "Se actualizo correctamente la información.",
          });
        })
        .catch(function (error) {
          console.log(error);
          me.$store.dispatch("setSnackbar", {
            text:
              "Hubo un error al actualizar la información, por favor actualice la página e intente nuevamente.",
            color: "error",
          });
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
          me.$store.dispatch("setSnackbar", {
            text: "Se actualizo correctamente las redes sociales.",
          });
        })
        .catch(function (error) {
          console.log(error);
          me.$store.dispatch("setSnackbar", {
            text:
              "Hubo un error al actualizar las redes sociales, por favor actualice la página e intente nuevamente.",
            color: "error",
          });
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
          me.$store.dispatch("setSnackbar", {
            text: "Se actualizo correctamente la información de Whatsapp.",
          });
        })
        .catch(function (error) {
          console.log(error);
          me.$store.dispatch("setSnackbar", {
            text:
              "Hubo un error al actualizar la información de Whatsapp, por favor actualice la página e intente nuevamente.",
            color: "error",
          });
        });
    },
    updateLogo() {
      if (this.imageFile === "") {
        this.snackbarError = true;
        return;
      }
      this.loadingLogo = true;
      let me = this;
      let formData = new FormData();

      formData.append("_id", this.dataId);
      formData.append("image", this.imageFile);

      axios
        .put("settings/updateLogo", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(function (response) {
          me.updateNewLogo();
          me.loadingLogo = false;
          me.$store.dispatch("setSnackbar", {
            text: "Se actualizo correctamente el logo.",
          });
        })
        .catch(function (error) {
          console.log(error);
          me.$store.dispatch("setSnackbar", {
            text:
              "Hubo un error al actualizar el logo, por favor actualice la página e intente nuevamente.",
            color: "error",
          });
        });
    },
  },
  watch: {
    imageUploaded: function () {
      this.imageFile = event.target.files[0];
    },
  },
};
</script>

<style>
.v-application p {
  margin-bottom: 0px;
}

.imageURL:hover {
  background-color: rgba(0, 0, 0, 0.6);
}
</style>