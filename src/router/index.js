import { createRouter, createWebHashHistory } from "vue-router";
import store from "@/store";
import LoginPage from "@/views/auth/Login.vue";
import RegisterPage from "@/views/auth/Register.vue";
import Admin from "@/views/layouts/Admin.vue";
import AppLayout from "@/views/layouts/App.vue";

import AppRoutes from "@/router/application";
import AdminRoutes from "@/router/admin";


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
        name:'app',
        component: AppLayout,
        meta: {
            requireAuth: true
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
    history: createWebHashHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    
    if (to.meta.requireAuth && !store.state.basic.user.token) {
        next({ name: 'login' })
    } 
    
    else if (to.meta.requireGuest && store.state.basic.user.token) {
        next({ path:'/' })
    } 
    
    else {
        next();
    }

})

export default router;
