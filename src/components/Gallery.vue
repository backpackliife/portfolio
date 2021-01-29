<template>
  <div class="block galleryBlock">
    <v-container>
      <h2 class="text-center">Gallery</h2>
      <v-row>
        <v-col
          v-for="item in items"
          :key="item.id"
          class="d-flex child-flex"
          cols="6"
          sm="4"
        >
          <v-card flat tile class="d-flex">
            <v-img :src="item.src" aspect-ratio="1" class="grey lighten-2">
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Gallery",
  data() {
    return {
      items: [
        {
          id: 1,
          src: require("../assets/asia/1.jpg"),
        },
        {
          id: 2,
          src: require("../assets/morocco/blue2.jpg"),
        },
        {
          id: 3,
          src: require("../assets/asia/camera.jpg"),
        },
        {
          id: 4,
          src: require("../assets/morocco/painting.jpg"),
        },
        {
          id: 5,
          src: require("../assets/asia/jungle.jpg"),
        },
        {
          id: 6,
          src: require("../assets/1.jpg"),
        },
        {
          id: 7,
          src: require("../assets/asia/komodo.jpg"),
        },
        {
          id: 8,
          src: require("../assets/portraits/vans.jpg"),
        },
        {
          id: 9,
          src: require("../assets/2.jpg"),
        },
      ],
    };
  },
};
</script>