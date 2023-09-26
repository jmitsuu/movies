import { createRouter, createWebHistory } from "vue-router";
import Movies from "../views/Movies.vue";
import Descriptions from "../views/Descriptions.vue";

const routes = [
  {
    path: "/",
    name: "Movies",
    meta: { requiresAuth: true },
    component: Movies,
  },

  {
    path: "/Movies",
    component: Movies,
  },
  {
    path: "/Descriptions",
    name: "Descriptions",
    component: Descriptions,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  routes,
  linkExactActiveClass: "active",
  history: createWebHistory(),
});

export default router;
