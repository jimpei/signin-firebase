<template>
  <div class="signin">
    <h2>Sign in</h2>
    <input type="text" placeholder="Username" v-model="username">
    <input type="password" placeholder="Password" v-model="password">
    <button @click="mailSignIn" class="waves-effect waves-light btn">Mail Signin</button>
    <button @click="githubSignInPopUp" class="waves-effect waves-light btn">github Signin(pop up)</button>
    <p>You don't have an account? 
      <router-link to="/signup">create account now!!</router-link>
    </p>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: 'Signin',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    mailSignIn: function () {
      console.log('try mail sigin.');
      firebase.auth().signInWithEmailAndPassword(this.username, this.password).then(
        user => {
          alert('mailSignIn Success! redirect to top page.');
          console.log('mailSignIn Success! redirect to top page.');
          this.$router.push('/');
        },
        err => {
          alert(err.message);
          console.log('mailSignIn error!');
        }
      )
    },
    githubSignInPopUp: function () {
      console.log('try github signin popup');
      var provider = new firebase.auth.GithubAuthProvider();
      firebase.auth().signInWithPopup(provider).then(
        function(result) {
          var token = result.credential.accessToken;
          var user = result.user;
          alert('github signin Success! ' + user.email);
          console.log(' github signin Success! ' + user.email);
        })
        .catch(function(error) {
          console.log('github signin error.');
          var errorCode = error.code;
          var errorMessage = error.message;
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          console.log(error);
          return 'error';
        });

        console.log('github signin success. router push => top page.');
        this.$router.push('/');
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
.signin {
  margin-top: 20px;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center
}
input {
  margin: 10px 0;
  padding: 10px;
}
</style>
