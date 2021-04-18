import Vue from "vue";
import VueRouter from "vue-router";
import Website from "@/components/feature/website/Wrapper";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Website",
    component: Website,
    children: [
      {
        path: ":name",
        name: "WebsiteDetail",
        props: true,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
  // mode: "history",
  scrollBehavior() {
    return { x: undefined, y: undefined };
  },
});

export default router;
