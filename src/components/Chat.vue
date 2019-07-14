<template>
  <div class="hello">
    <!-- <h2>Hello {{ name }}!!</h2> -->
    <h2>{{ msg }}</h2>
  <v-btn @click="signOut" color="blue" class="mx-0" outline>ログアウト</v-btn>
  <v-timeline align-top>
    <v-timeline-item v-for="(item, i) in items" :key="i" :color="item.color" :icon="item.icon" fill-dot>
      <v-card :color="item.color" dark>
        <v-card-title class="title">{{item.title}}</v-card-title>
        <v-card-text class="white text--primary">
          <p>ここに説明が入る.</p>
          <p>{{item.text}}</p>
          <v-avatar :tile=false size="36" color="grey lighten-4">
            <img :src="item.iconUrl" alt="avatar">
          </v-avatar>
          <!-- <v-btn @click="signOut" :color="item.color" class="mx-0" outline>ログアウト</v-btn> -->
          <router-link :to=item.link>■進む</router-link>

        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
  <v-btn @click="signOut" color="blue" class="mx-0" outline>ログアウト</v-btn>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'HelloWorld',
  mounted() {
    firebaseDatabase.ref('message/').on('value', (snapshot) => {
      this.$store.state.logUnRead = snapshot.val()
    })
  },
  data () {
    return {
      msg: 'chat page.',
      name: firebase.auth().currentUser.email,
      iconUrl: firebase.auth().currentUser.photoURL,
      items: [
        {
          color: 'red lighten-2',
          icon: 'mdi-star',
          title: 'Main page',
          text: firebase.auth().currentUser.email,
          iconUrl: firebase.auth().currentUser.photoURL,
          link: '/',
        },
        {
          color: 'purple darken-1',
          icon: 'mdi-book-variant',
          title: 'Sign In page',
          text: firebase.auth().currentUser.email,
          iconUrl: firebase.auth().currentUser.photoURL,
          link: '/signin',
        },
        {
          color: 'green lighten-1',
          icon: 'mdi-airballoon',
          title: 'Sign Up page',
          text: firebase.auth().currentUser.email,
          iconUrl: firebase.auth().currentUser.photoURL,
          link: '/signup',
        },
        {
          color: 'indigo',
          icon: 'mdi-buffer',
          title: 'Chat',
          text: firebase.auth().currentUser.email,
          iconUrl: firebase.auth().currentUser.photoURL,
          link: '/chat',
        }
      ]
    }
  },
  methods: {
    signOut: function () {
      firebase.auth().signOut().then(() => {
        this.$router.push('/signin')
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
