
import Dashboard from "@/views/admin/Dashboard.vue";
import UserCreatePage from "@/views/admin/user/Create.vue";
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
        path: "user-create",
        component: UserCreatePage,
    },
    {
        path: "settings",
        component: Dashboard,
    },
]