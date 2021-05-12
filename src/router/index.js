import { createRouter, createWebHistory } from "vue-router";

import EventList from "../views/EventList.vue";
import HouseLayout from '../views/house/layout';
import HouseDetail from '../views/house/houseDetail.vue';
import HouseRegister from "../views/house/houseRegister.vue";
import HouseEdit from "../views/house/houseEdit.vue";
import NotFound from "../views/notFound.vue";
import NetWorkError from '../views/networkError.vue';

const routes = [
  {
    path: "/",
    name: "EventList",
    component: EventList,
    props: route => ({ page: parseInt(route.query.page) || 1 }),
  },
  {
    path: "/about-us",
    name: "About",
    alias: '/about',
    component: () =>
      import("../views/About.vue"),
  },
  {
    path: "/house/:id",
    name: 'HouseLayout',
    props: true,
    component: HouseLayout,
    children: [
      {
        path: "",
        name: 'HouseDetail',
        component: HouseDetail,
      },
      {
        path: "register",
        name: 'HouseRegister',
        component: HouseRegister,
      },
      {
        path: "edit",
        name: 'HouseEdit',
        component: HouseEdit,
      },
    ],
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
  {
    path: "/404/:resource",
    name: "404Resource",
    component: NotFound,
    props: true,
  },
  {
    path: "/networkError",
    name: "NetworkError",
    component: NetWorkError,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
