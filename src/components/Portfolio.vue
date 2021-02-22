<template>
  <div class="block PortfolioBlock">
    <v-container>
      <h2 class="text-center">Portfolio</h2>
      <v-row>
        <v-col cols="4" v-for="item in items" :key="item.id">
      <v-card outlined class="mx-auto">
    <v-img
      class="white--text align-end"
      height="200px"
      :src="item.src"
    >
      <v-card-title>{{ item.title }}</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">
      {{ item.subtitle }}
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>{{ item.description }}</div>
    </v-card-text>

    <v-card-actions>

      <v-btn
        color="primary"
        text
      >
        Explore More
      </v-btn>
    </v-card-actions>
  </v-card>
  </v-col>
  </v-row>
  </v-container>
  </div>
</template>

<script>
export default {
  name: "Portfolio",
  data() {
    return {
      items: [
        {
        id: 1,
        title: "Selfportraits",
        subtitle:"Beauty from within",
        description:"kjh",
        src: require("../assets/portraits/wall7.jpg"),
      },
      {
        id: 2,
        title: "Thailand",
        subtitle: "The land of smiles",
        description:"jkh",
        src: require("../assets/thailand/thai1.jpg"),
      },
      {
        id: 3,
        title: "Indonesia",
        subtitle: "It's a tropical state of mind",
        description:"kjh",
        src: require("../assets/asia/komodo.jpg"),
      },
      {
        id: 4,
        title: "Hawaii",
        subtitle: "Aloha state of mind",
        description:"",
        src: require("../assets/hawaii/hawaii2.jpg"),
      },
      {
        id: 5,
        title: "Morocco",
        subtitle:"A world of colours",
        description:"",
        src: require("../assets/morocco/alley.jpg"),
      },
      {
        id: 6,
        title: "Italy",
        subtitle: "If you never go, you'll never know",
        description:"jkh",
        src: require("../assets/Italy/italy3.jpg"),
      },
      {
        id: 7,
        title: "Iceland",
        subtitle: "The land of fire & ice",
        description:"",
        src: require("../assets/iceland/iceland8.jpg"),
      },
      {
        id: 8,
        title: "Norway",
        subtitle: "It's about finding the things you never knew you were looking for",
        description:"",
        src: require("../assets/norway/norway1.jpg"),
      },
      {
        id: 9,
        title: "South America",
        subtitle:"A foreign continent is'nt designed to make you comforable",
        description:"",
        src: require("../assets/sa/sa9.jpg"),
      }
      ]
    };
  },
};
</script>