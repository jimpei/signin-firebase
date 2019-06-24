import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import SignUp from "@/components/SignUp";
import SignIn from "@/components/SignIn";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
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
