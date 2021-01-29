<template>
  <v-container>
    <v-toolbar dense flat>
      <v-toolbar-title>Backpackliife</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-toolbar-item>
        <v-btn text> Home </v-btn>

        <v-btn text> About </v-btn>
        <v-btn text> Contact </v-btn>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>
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
