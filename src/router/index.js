import LoginPage from "@/views/auth/Login.vue";
import RegisterPage from "@/views/auth/Register.vue";
import Admin from "@/views/layouts/Admin.vue";
import AppLayout from "@/views/layouts/App.vue";

import AppRoutes from "@/router/app";
import AdminRoutes from "@/router/admin";

import { createRouter, createWebHistory } from "vue-router";

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
        path: '/',
        component: AppLayout,
        children: [
          ...AppRoutes
        ]
    },


    // Adnin
    {
        path: "/admin",
        redirect: "/admin/dashboard",
        component: Admin,
        children: [
            ...AdminRoutes
        ]
    },
    { path: "/", component: LoginPage },
    { path: "/register", component: RegisterPage },
];

const router = createRouter({
    routes,
    history: createWebHistory(),
});

export default router;
