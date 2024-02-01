<template>
    <perfect-scrollbar id="message"
        class="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-light scrollbar-w-2 scrolling-touch" v-chat-scroll>

        <div class="m-auto text-center mb-5">
            <img :src="selectedUser.avatar"
                alt="" class="w-36 h-36 rounded-full m-auto">
            <h2 class="m-auto text-2xl font-bold text-gray-600 mt-2 mb-0">{{selectedUser.name}}</h2>
            <h2 class="m-auto text-1xl font-bold text-gray-500 mt-2">Software Engineer</h2>
        </div>
        <!-- Messages -->
        <div v-for="chat in messages.slice().reverse()" :key="chat.id" class="chat-message">
            <div class="flex items-end" :class="[isFriend(chat)? '' : 'justify-end']" >
                <div v-if="isFriend(chat)" class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                    <span class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-200 text-gray-600">
                        {{ chat.message }}
                    </span>
                </div>

                <div  v-if="isMe(chat)" class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-end">
                    <span class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-purple-700 text-white">
                       {{ chat.message }}
                    </span>
                </div>
                <img :src="chat.avatar"
                    alt="" class="h-6 w-6 rounded-full order-1">
            </div>
        </div>
       

    </perfect-scrollbar>
</template>
<script>
import store from '@/store';


export default {
    data(){
        return {
        }
    },
    computed: {
        messages(){
            return store.state.basic.messages;
        },
        selectedUser(){
            return store.state.basic.selectedUser;
        }
    },
    methods:{
        isFriend(chat)
        {
            const user = store.state.basic.user.data.id;
            return chat.user_id == user ? false : true;
        },

        isMe(chat)
        {
            const user = store.state.basic.user.data.id;
            return chat.user_id == user ? true : false;
        }
    }
}

</script>