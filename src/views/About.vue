<template>
  <v-content>
    <div class="staticHero">
      <v-img src="../assets/portraits/3.jpg" max-height="600">
        <v-row align="end" class="lightbox white--text pa-2 fill-height">
          <v-col>
            <div class="subheading">BACKPACKLIIFE</div>
          </v-col>
        </v-row>
      </v-img>
    </div>
    <div class="aboutText">
      <v-container>
        <h2 class="text-center">BACKPACKLIIFE</h2>
        <p class="text-center">
          My name is Sofie, originally from Sweden but grew up in Hong Kong with
          my family.
        </p>
        <p class="text-center">
          In 2014 i decided to leave my comfort zone and quit my job to go
          travelling. For me there was so much more out there that I wanted to
          explore and learn about. During the past few years I have explored big
          parts of Asia, Europe, South America and Australia.
        </p>
        <p class="text-center">
          It has made me a curious person and I've always felt the need to learn
          and explore more and more. I believe travelling is the purest form of
          education, it will teach you so many things that you can never learn
          in school.
        </p>
      </v-container>
    </div>
    <div class="block">
      <v-container>
        <h2 class="text-center"> Backpackliife</h2>
          <v-row>
            <v-col v-for="item in items" :key="item.id" cols="12">
    <v-card flat
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="white--text align-end"
      :src="item.src"></v-img>

    <v-card-text class="text--primary text-center">
      <div class="title">{{item.name}}</div>

      <p>{{item.title}}</p>
    </v-card-text>

  </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-content>
</template>

<script>
export default {
  name: "About",

  data() {
    return {
      items: [
        {
          id: 1,
          src: require("../assets/portraits/profile.jpg"),
          name: 'Sofie Kihlström',
          title: 'Photographer & Digital Content Creator'
           }
      ],
    };
  },
};
</script>

<style>
p {
  font-size: 15px;
}

.aboutText {
  margin: 30px;
  align: center;
}
</style>