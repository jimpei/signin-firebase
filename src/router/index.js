import Vue from "vue";
import Vuetify from "vuetify";

import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import SignUp from "@/components/SignUp";
import SignIn from "@/components/SignIn";
import Chat from "@/components/ChatSample";
import firebase from "firebase";
import "vuetify/dist/vuetify.min.css";
import "vuetify/es5/components/Vuetify";
// import VApp from "vuetify/es5/components/VApp";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import "@mdi/font/css/materialdesignicons.css";

Vue.use(Vuetify);
Vue.use(Router);

let router = new Router({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld,
      meta: { requiresAuth: true }
    },
    {
      path: "/signup",
      name: "SignUp",
      component: SignUp
    },
    {
      path: "/signin",
      name: "SignIn",
      component: SignIn
    },
    {
      path: "/chat",
      name: "Chat",
      component: Chat
    }
  ]
});

router.beforeEach((to, from, next) => {
  console.log("[router] before each start");
  console.dir("[router] from : " + from.path);
  // console.dir(from);
  console.dir("[router] to : " + to.path);
  // console.dir(to);
  // console.dir("[router] next");
  // console.dir(next);

  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  // 認証が必要なページへのアクセスなのかチェックする
  if (requiresAuth) {
    console.log("[router] access to requiresAuth=true page. sign check start.");

    // リダイレクト元から認証情報をチェックする
    firebase
      .auth()
      .getRedirectResult()
      .then(result => {
        if (result.credential) {
          var token = result.credential.accessToken;
          console.log("[router] get redirect result token:" + token);
          var user = result.user;
          console.log(
            "[router] get redirect result:" + user.email + " goto next()"
          );
          next();
        } else {
          console.log("[router] none redirect result.");
        }
      })
      .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        console.log("[router] get redirect result error");
      });

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log(
          "[router] sigin in check ok : " + user.email + " goto next()."
        );
        console.log(user.photoURL);
        next();
      } else {
        console.log("[router] sigin in check ng. redirect to signin.");
        next({
          path: "/signin",
          query: { redirect: to.fullPath }
        });
      }
    });
  } else {
    // 認証が必要なページではないので、認証チェックは行わない
    console.log("[router] access to requiresAuth=false page. goto next().");
    next(); // next() を常に呼び出すようにしてください!
  }
});

export default router;
