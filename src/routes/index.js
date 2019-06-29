import Vue from "vue";
import store from "@/store/store";
import Router from "vue-router";
import paths from "./paths";

Vue.use(Router);
const router = new Router({
  base: "/",
  mode: "history",
  linkActiveClass: "active",
  routes: paths
});

// router guards
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.getters.getToken) {
    next({ path: "/" });
  } else {
    next();
  }
});

export default router;
