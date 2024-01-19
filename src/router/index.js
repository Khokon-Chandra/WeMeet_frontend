import store from "@/store";
import AdminLogin from "@/views/admin/auth/Login.vue";
import LoginPage from "@/views/auth/Login.vue";
import RegisterPage from "@/views/auth/Register.vue";
import Admin from "@/views/layouts/Admin.vue";
import AppLayout from "@/views/layouts/App.vue";
import { createRouter, createWebHistory } from "vue-router";

import AdminRoutes from "@/router/admin";
import AppRoutes from "@/router/application";


const routes = [
    {
        path: "/login",
        name: "login",
        component: LoginPage,
        meta: {
            requireGuest: true,
            type: 'app'
        },
    },

    {
        path: "/register",
        name: "register",
        component: RegisterPage,
        meta: {
            requireGuest: true,
            type: 'app'
        },
    },

    {
        path: '/',
        name:'app',
        component: AppLayout,
        meta: {
            requireAuth: true,
            type: 'app'
        },
        children: [
            ...AppRoutes
        ]
    },


    // Admin
    {
        path: "/admin",
        redirect: "/admin/dashboard",
        meta: {
            requireAuth: true,
            type: 'admin'
        },
        component: Admin,
        children: [
            ...AdminRoutes
        ]
    },
    { path: "/", component: LoginPage },
    { path: "/register", component: RegisterPage },
    { 
        path: "/admin/login", 
        component: AdminLogin, 
        meta: {
            requireGuest: true,
            type: 'admin'
        }
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    
    if (to.meta.requireAuth && to.meta.type == 'app' && !store.state.basic.user.token) {
        next({ path: 'login' })
    } 
    
    else if (to.meta.requireGuest && to.meta.type == 'app' && store.state.basic.user.token) {
        next({ path:'/' })
    } 
    
    else if (to.meta.requireAuth && to.meta.type == 'admin' && !store.state.admin.admin.token) {
        next({ path: '/admin/login' })
    } 
    
    else if (to.meta.requireGuest && to.meta.type == 'admin' && store.state.admin.admin.token) {
        next({ path:'/admin/dashboard' })
    } 
    
    else {
        next();
    }

})

export default router;
