<template>
  <v-content>
    <div class="hero">
      <v-img src="../assets/portraits/mirror1.jpg" max-height="600">
      <v-row align="end" class="lightbox white--text pa-2 fill height">
        <v-col>
          <v-container>
            <div class="headline"></div>
          </v-container>
        </v-col>
       </v-row>
      </v-img>
    </div>
    <div class="block">
      <h2 class="text-center">Contact</h2>
      <p></p>

    </div>
    <div class="googlemap">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17050.914535277218!2d11.967131037618058!3d57.71026911130933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464f8e67966c073f%3A0x4019078290e7c40!2sGothenburg!5e0!3m2!1sen!2sse!4v1612384221366!5m2!1sen!2sse" width="100%" height="450" ></iframe>
    </div>
  </v-content>
</template>

<script>
export default {
  name: "Contact",

  data() {
    return {
      items: [],
    };
  },
};
</script>

