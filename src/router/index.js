import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "../pages/auth/Login.vue";
import RegisterPage from "../pages/auth/Register.vue";
import HomePage from "../pages/app/Messenger.vue";

const routes = [
    {
        path: "/login",
        component: LoginPage
    },

    {
        path: "/register",
        component: RegisterPage
    },

    {
        path:'/',
        component: HomePage
    }
];

const router = createRouter({
    routes,
    history: createWebHistory(),
});

export default router;
