<template>
<div>
  <v-card flat tile>
    <v-toolbar color="light-blue" dark>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title>Application {{name}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-avatar :tile=false size="36" color="grey lighten-4">
          <img :src="iconUrl" alt="avatar">
      </v-avatar>
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
    </v-toolbar>

    <!-- <v-container v-for="type in types" :key="type" fluid grid-list-md grey lighten-4>
      <v-subheader>{{ type }}</v-subheader>

      <v-layout row wrap>
        <v-spacer></v-spacer>
        <v-flex v-for="card in cards" :key="card" xs12 sm6 md4>
          <v-card>
            <v-img :src="`https://picsum.photos/200/300?image=${getImage()}`" height="300px">
              <span class="headline white--text pl-3 pt-3" v-text="card.title"></span>
            </v-img>

            <v-card-actions class="white justify-center">
              <v-btn  v-for="(social, i) in socials" :key="i" :color="social.color" class="white--text" fab icon small>
                <v-icon>{{ social.icon }}</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container> -->
  </v-card>
</div>
</template>

<script>
import firebase from 'firebase'

export default {
    props: ['userName'],
    data: () => ({
      // name: firebase.auth().currentUser.email,
      // iconUrl: firebase.auth().currentUser.photoURL,
      name:'hoge',
      iconUrl:'hhh',
      types: ['Places to Be'],
      cards: ['Good', 'Best'],
      socials: [
        {
          icon: 'fab fa-facebook',
          color: 'indigo'
        },
        {
          icon: 'fab fa-linkedin',
          color: 'cyan darken-1'
        },
        {
          icon: 'fab fa-instagram',
          color: 'red lighten-3'
        }
      ]
    }),
    methods: {
      getImage () {
        const min = 550
        const max = 560

        return Math.floor(Math.random() * (max - min + 1)) + min
      }
    }
  };

console.log('debug Header.vue ');
</script>

