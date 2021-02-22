<template>
  <v-app>
    <v-app-bar app flat> <HelloWorld /> </v-app-bar>
    

    <router-view></router-view>
    <v-content>
      <Portfolio/>
    </v-content>

    <v-Footer><Footer /></v-Footer>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Portfolio from "./components/Portfolio";

import Footer from "./components/Footer";

export default {
  name: "App",

  components: {
    HelloWorld,
    Portfolio,
    Footer,
  },

  data: () => ({
    //
  }),
};

</script>
