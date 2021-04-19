import Vue from "vue";
import VueRouter from "vue-router";
import Website from "@/components/feature/website/Wrapper";
import CommingSoon from "@/components/feature/carousel/shared/CommingSoon";

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
  {
    path: "/insta/react",
    name: "React MI",
    component: CommingSoon,
  },
  {
    path: "/insta/flutter",
    name: "Flutter MI",
    component: CommingSoon,
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
