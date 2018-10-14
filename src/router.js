import Vue from "vue";
import Router from "vue-router";
import Plans from "./views/Plans.vue";
import Pages from "./views/Pages.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "dashboard",
      component: Plans
    },
    {
      path: "/p/:id",
      component: Pages
    }
  ]
});
