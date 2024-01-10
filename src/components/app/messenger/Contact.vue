<template>
    <div class="border-b border-gray-200 xl:border-b-0 xl:flex-shrink-0 xl:w-80 xl:border-r xl:border-gray-200 bg-gray-50">
        <div class="h-full pl-4 pr-2 py-6 sm:pl-6 lg:pl-8 xl:pl-0">

            <div class="contact relative overflow-hidden px-1">

                <div
                    class="relative rounded-lg px-2 py-2 flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 mb-5">
                    <div class="flex-shrink-0">
                        <img class="h-16 w-16 rounded-full"
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="">
                    </div>
                    <div class="flex-1 min-w-0">
                        <a href="#" class="focus:outline-none">
                            <span class="absolute inset-0"></span>
                            <p class="text-sm font-bold text-purple-700">Boris Kemiron</p>
                            <p class="text-sm text-gray-500 truncate">Software Engineer</p>
                        </a>
                    </div>

                    <div class="flex items-end justify-end">
                        <font-awesome-icon class="text-gray-500" icon="fa-solid fa-pencil" />
                    </div>
                </div>

                <div class="mb-4">
                    <div class="relative">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <font-awesome-icon class="h-5 w-5 text-gray-400" icon="fa-solid fa-magnifying-glass" />
                        </div>
                        <input name="search" placeholder="Search friends"
                            class="focus:ring-purple-500 focus:border-purple-500 block w-full pl-10 sm:text-sm border-gray-100 rounded-full p-2 border">

                    </div>
                </div>


                <perfect-scrollbar
                    class="contact-items overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-light scrollbar-w-2 scrolling-touch">

                    <div v-for="contact in people" :key="contact.id"
                        class="relative rounded-lg px-2 py-2 flex items space-x-3 hover:border-gray-400 focus-within:ring-2 mb-3 hover:bg-gray-200">
                        <div class="flex-shrink-0 relative">
                            <img :src="contact.avatar" alt="" class="h-10 w-10 rounded-full">
                            <div v-show="contact.active" class="absolute w-3 h-3 rounded-full bg-green-600 ring-2 ring-gray-50  right-0 bottom-1"></div>
                            <div v-show="!contact.active" class="absolute h-3 min-w-3 rounded-full bg-green-200 leading-none ring-2 ring-gray-50 px-1 right-0 bottom-1 text-[10px] text-center">5m</div>
                        </div>
                        <div class="flex-1 min-w-0">
                            <a href="#" class="focus:outline-none">
                                <div class="flex items-center justify-between">
                                    <p class="text-sm font-bold text-purple-600">{{ contact.name }}</p>
                                    <div class="text-gray-400">{{ contact.last_message_at }}</div>
                                </div>
                                <div class="flex items-center justify-between">
                                    <p class="text-sm text-gray-500">{{ contact.last_message }}</p>
                                    <div v-show="contact.count_unseen" class="text-xs text-white bg-purple-400 rounded-full px-1 py-0">{{ contact.count_unseen }}</div>
                                    <div v-if="!contact.count_unseen" class="text-xs text-white bg-blue-400 rounded-full px-1 py-0 w-3 h-3"></div>
                                </div>
                            </a>
                        </div>
                    </div>

                </perfect-scrollbar>

            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {

            people: [
                {
                    id: 1,
                    avatar: 'https://i.pravatar.cc/150?img=1',
                    name: ' Mr. Jhulfiker',
                    active: true,
                    last_message: 'Hi Jhuli',
                    last_message_at: '12:40 AM',
                    count_unseen: 2
                },
                {
                    id: 2,
                    avatar: 'https://i.pravatar.cc/150?img=2',
                    name: ' Mr. Jhulfiker',
                    active: false,
                    last_message: 'Hello',
                    last_message_at: '12:40 AM',
                    count_unseen: 3
                },
                {
                    id: 3,
                    avatar: 'https://i.pravatar.cc/150?img=3',
                    name: ' Mr. Jhone',
                    active: true,
                    last_message: 'Hello',
                    last_message_at: '12:40 AM',
                    count_unseen: 1
                },
                {
                    id: 4,
                    avatar: 'https://i.pravatar.cc/150?img=4',
                    name: ' Mr. Kali jara',
                    active: true,
                    last_message: 'Hello',
                    last_message_at: '12:40 AM',
                    count_unseen: 0
                },
                {
                    id: 5,
                    avatar: 'https://i.pravatar.cc/150?img=5',
                    name: ' Mr. Avatar ',
                    active: true,
                    last_message: 'good morning',
                    last_message_at: '12:40 AM',
                    count_unseen: 3
                },
                {
                    id: 6,
                    avatar: 'https://i.pravatar.cc/150?img=6',
                    name: ' Mr. Avatar ',
                    active: true,
                    last_message: 'good morning',
                    last_message_at: '12:40 AM',
                    count_unseen: 3
                },
                {
                    id: 7,
                    avatar: 'https://i.pravatar.cc/150?img=7',
                    name: ' Mr. Avatar ',
                    active: true,
                    last_message: 'good morning',
                    last_message_at: '12:40 AM',
                    count_unseen: 2
                },
                {
                    id: 8,
                    avatar: 'https://i.pravatar.cc/150?img=8',
                    name: ' Mr. Avatar ',
                    active: true,
                    last_message: 'good morning',
                    last_message_at: '12:40 AM',
                    count_unseen:1
                }
            ]
        }
    }
}
</script>

<style scoped>
.contact {
    height: calc(100vh - 80px);
}

.contact-items {
    height: calc(100vh - 245px);
}
</style>