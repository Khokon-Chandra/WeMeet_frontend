import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "../pages/auth/Login.vue";
import RegisterPage from "../pages/auth/Register.vue";

const routes = [
    {path:"/", component: LoginPage},
    {path:"/register", component: RegisterPage}
];

const router = createRouter({
    routes,
    history: createWebHistory()
});

export default router;