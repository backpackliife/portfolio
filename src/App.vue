<template>
  <v-app>
    <v-app-bar app flat> <HelloWorld /> </v-app-bar>

    <router-view></router-view>

    <v-Footer><Footer /></v-Footer>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

import Footer from "./components/Footer";

export default {
  name: "App",

  components: {
    HelloWorld,
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>
