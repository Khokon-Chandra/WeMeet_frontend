import Dashboard from "@/views/admin/Dashboard.vue";
import UserListPage from "@/views/admin/user/UsersList.vue";
import HomePage from "@/views/app/Messenger.vue";
import LoginPage from "@/views/auth/Login.vue";
import RegisterPage from "@/views/auth/Register.vue";
import Admin from "@/views/layouts/Admin.vue";
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
        path:'/',
        component: HomePage
    },
    // Adnin
    {
        path:"/admin", 
        redirect: "/admin/dashboard",
        component: Admin,
        children: [
            {
                path: "dashboard",
                component: Dashboard,
            },
            {
                path: "users-list",
                component: UserListPage,
            },
            {
                path: "settings",
                component: Dashboard,
            },
        ]
    },
    {path:"/", component: LoginPage},
    {path:"/register", component: RegisterPage},
];

const router = createRouter({
    routes,
    history: createWebHistory(),
});

export default router;
