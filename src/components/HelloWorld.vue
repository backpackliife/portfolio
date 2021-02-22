<template>
  <v-container>
    <v-toolbar dense flat>
      <v-toolbar-title>Backpackliife</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-toolbar-item>
        <v-btn text> <router-link to="/"> Home </router-link></v-btn>
        <v-btn text><router-link to="/about"> About </router-link> </v-btn>
        <v-btn text> <router-link to="/contact"> Contact </router-link> </v-btn>

      
      </v-toolbar-item>
    </v-toolbar>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({}),
};
</script>
