import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/planner",
    name: "planner",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: AnimalsView,
    component: () =>
      import(
        /* webpackChunkName: "planner" */ "../views/PlannerView/PlannerView.vue"
      ),
  },
  {
    path: "/animals",
    name: "animals",
    component: () =>
      import(
        /* webpackChunkName: "animals" */ "../views/AnimalsView/AnimalsView.vue"
      ),
  },
  {
    path: "/async-component",
    name: "async-component",
    component: () =>
      import(
        /* webpackChunkName: "async-component" */ "../views/AsyncComponentView/AsyncComponentView.vue"
      ),
  },
  {
    path: "/event-emitter",
    name: "event-emitter",
    component: () =>
      import(
        /* webpackChunkName: "event-emitter" */ "../views/EventEmitterView/EventEmitterView.vue"
      ),
  },
  {
    path: "/jokes",
    name: "jokes",
    component: () =>
      import(
        /* webpackChunkName: "jokes" */ "../views/JokesView/JokesView.vue"
      ),
  },
  {
    path: "/jokes/:id",
    name: "jokeDetails",
    component: () =>
      import(
        /* webpackChunkName: "jokeDetails" */ "../views/JokesView/JokeDetails.vue"
      ),
  },
  {
    path: "/students",
    name: "students",
    component: () =>
      import(
        /* webpackChunkName: "jokes" */ "../views/StudentsView/StudentsView.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
