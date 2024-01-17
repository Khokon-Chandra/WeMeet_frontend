import Messenger from "@/views/app/Messenger.vue";
import Profile from "@/views/app/Profile.vue";

export default [
    {
        path: '/',
        name: 'messenger',
        component: Messenger,
    },
    {
        path: '/profile',
        name: 'profile',
        component: Profile
    },
]