import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  // {
  //   path: "/list",
  //   name: "list",
  //   meta: { layout: "main" },
  //   component: () => import("../views/List.vue"),
    // children: [
    //   {
    //     path: "/list/:id",
    //     name: "tasks",
    //     components: { tasks: Tasks },
    //   },
    // ],
  // },
  // {
  //   path: "/404",
  //   name: "404",
  //   component: () => import("../views/404.vue"),
  // },
  // {
  //   path: "*",
  //   redirect: "/404",
  // },
  {
    path: "/list1",
    name: "list1",
    meta: { layout: "main" },
    component: () => import("../views/List1.vue"),
  },
    // children: [
    //   {
    //     path: "/list1/:id",
    //     name: "tasks",
    //     components: { tasks: Tasks },
    //   },
    // ],
  // },
  // {
  //   path: "/list1",
  //   name: "list1",
  //   meta: { layout: "main" },
  //   component: () => import("../views/List1.vue"),
  // },
  {
    path: "/list2",
    name: "list2",
    meta: { layout: "main" },
    component: () => import("../views/List2.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
