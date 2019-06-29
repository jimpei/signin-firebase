import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import SignUp from "@/components/SignUp";
import SignIn from "@/components/SignIn";
import firebase from "firebase";

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
    }
  ]
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth) {
    // このルートはログインされているかどうか認証が必要です。
    // もしされていないならば、ログインページにリダイレクトします。
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log("[router] sigin in check ok : " + user.email);
        next();
      } else {
        console.log("[router] sigin in check ng. redirect to signin");
        next({
          path: "/signin",
          query: { redirect: to.fullPath }
        });
      }
    });
  } else {
    console.log("[router] sigin in check error.");
    next(); // next() を常に呼び出すようにしてください!
  }
});

export default router;
