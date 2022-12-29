import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";
import home from "../views/home.vue";
// import global from "@/components/Global.vue";
// const bgc = global.bgc;

const routes = [
  {
    path: "/",
    name: "home",
    component: home,
    meta: {
      title: 'home',
      description: "home"
    },
  },
    {
    path: "/api",
    name: "api",
    component: () =>
      import("../components/api.vue"),
    meta: {
      title: 'api',
      description: "api"
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  document.querySelector("meta[name='description']").setAttribute("content", to.meta.description);
  // document.querySelector('body').setAttribute('style', 'background-color:' + bgc );
  next();
})

export default router;
