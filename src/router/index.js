import LoginPage from "@/views/auth/Login.vue";
import RegisterPage from "@/views/auth/Register.vue";
import Admin from "@/views/layouts/Admin.vue";
import AppLayout from "@/views/layouts/App.vue";

import AppRoutes from "@/router/app";
import AdminRoutes from "@/router/admin";

import { createRouter, createWebHistory } from "vue-router";
import store from "@/store";

const routes = [
    {
        path: "/login",
        name: "login",
        component: LoginPage,
        meta: {
            requireGuest: true,
        }
    },

    {
        path: "/register",
        name: "register",
        component: RegisterPage,
        meta: {
            requireGuest: true,
        }
    },

    {
        path: '/',
        name:"app",
        component: AppLayout,
        meta: {
            requiresAuth: true
        },
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

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !store.state.basic.user.token) {
        next({ name: 'login' })
    } else if (to.meta.requiresGuest && store.state.basic.user.token) {
        next({ name: 'app.messenger' })
    } else {
        next();
    }

})

export default router;
