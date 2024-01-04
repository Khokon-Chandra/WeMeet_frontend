import Dashboard from "@/pages/admin/Dashboard.vue";
import LoginPage from "@/pages/auth/Login.vue";
import RegisterPage from "@/pages/auth/Register.vue";
import Admin from "@/pages/layouts/Admin.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
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
    history: createWebHistory()
});

export default router;