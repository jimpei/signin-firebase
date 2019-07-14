// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import firebase from "firebase";
import Vue from "vue";
import App from "./App";
import router from "./router";
import VueFire from "vuefire";
import "firebase/firestore";

Vue.config.productionTip = false;
// Vue.use(VueFire);

const firebaseConfig = {
  apiKey: "AIzaSyDis7DqJQpRTVD0AwcnKu9hqp2fu1wdHoc",
  authDomain: "signin-firebase-386a0.firebaseapp.com",
  databaseURL: "https://signin-firebase-386a0.firebaseio.com",
  projectId: "signin-firebase-386a0",
  storageBucket: "",
  messagingSenderId: "208023714033",
  appId: "1:208023714033:web:e166d3b040d62978"
};

firebase.initializeApp(firebaseConfig);
// export const database = firebase.database();
export const database = firebase.firestore();

// const ref = database.ref("messagesTable"); //テーブル名が入る
// let last_message = "dummy";

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  template: "<App/>",
  components: { App }
});
