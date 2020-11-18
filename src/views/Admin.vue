<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense nav>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title">
              Damián Guilisasti
            </v-list-item-title>
            <v-list-item-subtitle> v1.0 </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/admin/dashboard">
          <v-list-item-icon>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/admin/services">
          <v-list-item-action>
            <v-icon>mdi-laptop</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Servicios</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/admin/configuracion/informacion-nosotros">
          <v-list-item-action>
            <v-icon>mdi-briefcase-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Portafolio</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/admin/clients">
          <v-list-item-action>
            <v-icon>mdi-account-group-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Clientes</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/admin/clients">
          <v-list-item-action>
            <v-icon>mdi-account-group-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Presupuestos</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/admin/configuracion/informacion-nosotros">
          <v-list-item-action>
            <v-icon>mdi-cash-usd-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Facturación</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/admin/blog">
          <v-list-item-action>
            <v-icon>mdi-post-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Publicaciones</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/admin/configuracion/redes-sociales">
          <v-list-item-action>
            <v-icon>mdi-finance</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Reportes</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/admin/settings">
          <v-list-item-action>
            <v-icon>mdi-cog</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Configuración</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item link to="/">
          <v-list-item-action>
            <v-icon>mdi-play</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>Ver Sitio Web</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-spacer></v-spacer>
      <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        label="Buscar"
        class="hidden-sm-and-down"
      ></v-text-field>
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>

      <v-menu bottom min-width="200px" rounded offset-y>
        <template v-slot:activator="{ on }">
          <v-btn icon x-large v-on="on">
            <v-avatar color="brown" size="40">
              <span class="white--text headline">DG</span>
            </v-avatar>
          </v-btn>
        </template>
        <v-card>
          <v-list-item-content class="justify-center">
            <div class="mx-auto text-center">
              <v-avatar color="brown">
                <span class="white--text headline">DG</span>
              </v-avatar>
              <h3 class="pt-4">Damián Guilisasti</h3>
              <p class="caption mt-1">damianguilisasti@gmail.com</p>
              <v-divider class="my-3"></v-divider>
              <v-btn depressed rounded text> Editar cuenta </v-btn>
              <v-divider class="my-3"></v-divider>
              <v-btn depressed rounded text> SALIR </v-btn>
            </div>
          </v-list-item-content>
        </v-card>
      </v-menu>
    </v-app-bar>

    <v-main class="v-main">
      <router-view />
    </v-main>
    <v-footer app>
      <span
        >Powered by Damián Guilisasti &copy;
        {{ new Date().getFullYear() }}</span
      >
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "AdminView",
  data: () => ({ drawer: null }),
};
</script>

<style scoped lang="scss">
.v-main {
  padding: 64px 64px 64px 64px !important;
}
</style>
