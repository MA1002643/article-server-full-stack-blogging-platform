import { createRouter, createWebHistory } from "vue-router";

import Home from "../components/Home.vue";
import Login from "../Login.vue";

const routes = [
  { path: "/Home", component: Home },
  { path: "/Login", component: Login },
];

const router = createRouter({
  history: createWebHistory(),
});

export default router;
