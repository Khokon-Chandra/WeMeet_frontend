
import Dashboard from "@/views/admin/Dashboard.vue";
import UserListPage from "@/views/admin/user/UsersList.vue";

export default [
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