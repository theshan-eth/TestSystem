// src/router.js
import { createRouter, createWebHistory } from "vue-router";
import Welcome from "./views/Welcome.vue";
import Register from "./views/Register.vue";
import Login from "./views/Login.vue";
import Dashboard from "./views/Dashboard.vue";

const routes = [
  { path: "/", component: Welcome },
  { path: "/register", component: Register },
  { path: "/login", component: Login },
  { path: "/dashboard", component: Dashboard },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
