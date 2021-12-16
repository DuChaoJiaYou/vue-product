import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

//博客
import BlogView from "../views/blog/BlogView.vue";
import BlogManage from "../views/blog/BlogManage.vue";
//个人管理
import Personal from "../views/personal/Personal.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    redirect: "/blogView",
    children: [
      {
        path: "/blogView",
        name: "blogview",
        component: BlogView,
      },
      {
        path: "/blogManage",
        name: "blogManage",
        component: BlogManage,
      },
      {
        path: "personal",
        name: "personal",
        component: Personal,
      },
    ],
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
