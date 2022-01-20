<template>
  <div>
    <v-navigation-drawer
      class="hidden-md-and-up header-one-page-nav-drawer"
      v-model="drawer"
      fixed
      width="60vw"
    >
      <v-list-item class="pa-2">
        <v-spacer></v-spacer>
        <v-btn large icon @click="drawer = !drawer" v-html="iconSvg(closeIcon)">
        </v-btn>
      </v-list-item>
      <scrollactive
        active-class="v-btn--active"
        bezier-easing-value=".5,0,.35,1"
      >
        <v-list>
          <v-list-item
            :ripple="false"
            v-for="item in items"
            :key="item.title"
            :to="item.to"
            link
            class="scrollactive-item"
          >
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          
          <!-- End mobile menu sidebar item list -->
        </v-list>
      </scrollactive>
    </v-navigation-drawer>
    <!-- End sidebar mobile menu -->

    <v-app-bar
      dark
      color="transparent"
      fixed
      elevate-on-scroll
      class="header-one-page-nav"
    >
      <router-link to="/" class="logo">
        <slot name="logo"></slot>
        <slot name="logo-dark"></slot>
      </router-link>
      <!-- End brand logo -->
      <v-spacer></v-spacer>
      <v-btn
        icon
        class="ma-0 pa-0 hidden-md-and-up"
        @click="drawer = !drawer"
        v-html="iconSvg(icon)"
      >
      </v-btn>
      <!-- End mobile menu icon -->
      <v-toolbar-items class="hidden-xs-only hidden-sm-only height-auto">
        <scrollactive
          active-class="v-btn--active"
          bezier-easing-value=".5,0,.35,1"
        >
          <v-btn
            v-for="item in items"
            :key="item.title"
            :to="item.to"
            link
            :ripple="false"
            text
            class="scrollactive-item"
            >{{ item.title }}</v-btn
          >
          <!--           <v-menu
            open-on-hover
            bottom
            min-width="240"
            offset-y
            transition="scroll-y-reverse-transition"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn :ripple="false" text v-bind="attrs" v-on="on">
                Services <v-icon>mdi-chevron-down</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item
                link
                v-for="(item, index) in ServicesdropDownItems"
                :key="index"
                :to="item.to"
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu> -->
          <!--           <v-menu
            open-on-hover
            bottom
            min-width="240"
            offset-y
            transition="scroll-y-reverse-transition"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn :ripple="false" text v-bind="attrs" v-on="on">
                Products <v-icon>mdi-chevron-down</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item
                link
                v-for="(item, index) in ServicesdropDownItems"
                :key="index"
                :to="item.to"
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu> -->
        </scrollactive>

        <a class="rn-btn" href="#contact">
          <span>Contacto</span>
        </a>
      </v-toolbar-items>
      <!-- End header menu item -->
    </v-app-bar>
    <!-- End top header navbar -->
  </div>
</template>

<script>
import feather from "feather-icons";
export default {
    props: {
    imageURL: String,
  },
  data: () => ({
    drawer: false,
    items: [
      { title: "Inicio", to: "/#home" },
      { title: "Nosotros", to: "/#about" },
      { title: "Servicios", to: "/#service" },
      { title: "Trabajo", to: "/#portfolio" },
      { title: "Reseñas", to: "/#testimonial" },
    ],
    ServicesdropDownItems: [
      { title: "Pro Website", to: "/service" },
      { title: "Pro Store", to: "/service-details" },
    ],
    icon: "menu",
    closeIcon: "x",
  }),
  methods: {
    iconSvg(icon) {
      return feather.icons[icon].toSvg();
    },
  },
};
</script>
