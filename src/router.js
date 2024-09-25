import VueRouter from "vue-router";

import Home from "./pages/Home.vue";
import Category from "./pages/Category.vue";
import NotFound from "./pages/NotFound.vue";

const routes = [
  {
    path: "/",
    component: Home,
    name: "Home",
  },
  {
    path: "/category/:id",
    component: Category,
    props: true,
    name: "Category",
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
