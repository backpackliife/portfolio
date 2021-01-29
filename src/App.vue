<template>
  <v-app>
    <v-app-bar app flat> <HelloWorld /> </v-app-bar>

    <v-content> <Hero /><Gallery /></v-content>
    <v-Footer><Footer /></v-Footer>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

export default {
  name: "App",

  components: {
    HelloWorld,
    Hero,
    Gallery,
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>
