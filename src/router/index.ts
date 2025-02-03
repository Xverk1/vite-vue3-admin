import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: () => import("@/views/Home/Home.vue"),
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
