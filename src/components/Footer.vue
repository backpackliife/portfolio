<template>
  <v-container>
    <v-footer padless class="center">
      <v-card flat class="text-center">
        <v-card-text>
          <v-btn v-for="icon in icons" :key="icon" class="mx-8" dark icon>
            <a :href="icon.url" :target="icon.target"><v-icon size="24px">{{ icon.name }}</v-icon></a>
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-text>
        <v-card-text class="pt-1"
          >A picture captures a moment othewise forgotten, it captures feelings and memories. I love capturing people, places and feelings and I believe that looking through the lense can make you see things you othewise would'nt. </v-card-text
        >
        <v-divider></v-divider>
        <v-card-text>
          {{ new Date().getFullYear() }} —
          <strong>BACKPACKLIIFE - Sofie Kihlström</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-container>
</template>

<script>
export default {
  name: "Header",
  data: () => ({
    icons: [
      {
        name: "fab fa-facebook",
        url: 'https://www.facebook.com/backpackliife/',
        target: '_blank'
      },
      {
        name: "fab fa-linkedin",
        url: 'https://www.linkedin.com/in/sofie-kihlstr%C3%B6m-45b5581b5/',
        target: '_blank'
      },
      {
        name: "fab fa-instagram",
        url: 'https://www.instagram.com/backpackliife/',
        target: '_blank'
      },
      {
        name: "fab fa-youtube",
        url: 'https://www.youtube.com/channel/UCGfp7jYgpK4tbctMZk72CtA',
        target: '_blank'
      }],
  }),
};
</script>