import { createRouter, createWebHashHistory } from "vue-router";
import adminRoutes from "./modules/admin.ts";
const routes = [
  {
    path: "/",
    redirect: "/admin/line",
  },
  adminRoutes,
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
