<template>
<div>
  <v-footer dark height="auto">
    <v-card class="flex" flat tile>
      <v-card-title class="light-blue ">
        <strong class="subheading">Get connected with us on social networks!</strong>

        <v-spacer></v-spacer>

        <!-- <v-btn v-for="icon in icons" :key="icon" class="mx-3" dark icon>
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn> -->
      </v-card-title>

      <v-card-actions class="grey darken-3 justify-center">
        &copy;2019 — <strong>Jimpei Hamamura</strong>
      </v-card-actions>
    </v-card>
  </v-footer>
</div>
</template>

<script>
export default {
  name: 'Footer',
  data: () => ({
      msg: 'app名',
      icons: [
        'fab fa-facebook',
        'fab fa-twitter',
        'fab fa-google-plus',
        'fab fa-linkedin',
        'fab fa-instagram'
      ]
  })
};
console.log('debug Footer.vue ');

</script>

