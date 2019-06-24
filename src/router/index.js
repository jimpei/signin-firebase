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
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  let currentUser = firebase.auth().currentUser;
  if (requiresAuth) {
    // このルートはログインされているかどうか認証が必要です。
    // もしされていないならば、ログインページにリダイレクトします。
    if (!currentUser) {
      next({
        path: "/signin",
        query: { redirect: to.fullPath }
      });
    } else {
      next();
    }
  } else {
    next(); // next() を常に呼び出すようにしてください!
  }
});

export default router;
