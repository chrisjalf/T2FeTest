import VueRouter from "vue-router";

import Home from "./pages/Home.vue";
import NotFound from "./pages/NotFound.vue";

const routes = [
  {
    path: "/",
    component: Home,
    name: "Home",
  },
  {
    path: "*",
    component: NotFound,
    name: "NotFound",
  },
];
const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
