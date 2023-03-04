import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/Home.vue";
import Login from "../pages/Login.vue";
import Article from "../components/Article.vue";
import Dashboard from "../pages/Dashboard.vue";

const ifAuthenticated = (to, from, next) => {
  const loggedIn = localStorage.getItem("session_token");
  if (loggedIn) {
    next();
    return;
  }
  next("/login");
  alert("Need to be logged in to access");
};

const routes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/Dashboard", component: Dashboard, beforeEnter: ifAuthenticated },
  { path: "/article/:id", component: Article },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
