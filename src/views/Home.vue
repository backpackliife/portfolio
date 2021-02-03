<template>
  <v-content> <Hero /><Gallery /></v-content>
</template>

<script>
import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
export default {
  name: "Home",

  components: {
    Hero,
    Gallery,
  },

  data() {
    return {
      items: [],
    };
  },
};
</script>
