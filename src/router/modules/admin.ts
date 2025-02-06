export default {
  path: "/admin",
  component: () => import("@/views/Layout/Layout.vue"),
  children: [
    {
      path: "home",
      component: () => import("@/views/Home/Home.vue"),
    },
    {
      path: "line",
      component: () => import("@/views/Line/Line.vue"),
    },
    {
      path: "news",
      component: () => import("@/views/News/News.vue"),
    },
  ],
};
