<template>
  <div id="app">
    <v-app>
      <Header2 userData="userData"></Header2>
      <div align="center">
        <img src="./assets/logo.png" width="20%">
      </div>
      <router-view/>
      <Footer2/>
    </v-app>
  </div>
</template>

<script>
import Header from "./components/Header";
import Header2 from "./components/Header2";
import Footer from "./components/Footer";
import Footer2 from "./components/Footer2";
import Chat from "./components/Chat";
export default {
  name: 'App',
  components: {
    Header,
    Header2,
    Footer,
    Footer2,
    Chat
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;s */
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
