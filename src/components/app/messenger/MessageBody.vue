<template>
    <perfect-scrollbar id="message"
        class="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-light scrollbar-w-2 scrolling-touch" v-chat-scroll>
            
        <div v-for="chat in messages" :key="chat.id" class="chat-message">
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

export default {
    data(){
        return {
            messages:[
                {
                    id:1,
                    causer:'friend',
                    message: 'Hello fr',
                    avatar: 'https://i.pravatar.cc/150?img=1',
                },
                {
                    id:3,
                    causer:'me',
                    message: 'Hi fr. How are you doing?',
                    avatar: 'https://i.pravatar.cc/150?img=2',
                },
                {
                    id:3,
                    causer:'friend',
                    message: 'I am doing well. What about you?',
                    avatar: 'https://i.pravatar.cc/150?img=1',
                },
                {
                    id:4,
                    causer:'friend',
                    message: 'Today, We have a meeting over zoom.',
                    avatar: 'https://i.pravatar.cc/150?img=1',
                },
                {
                    id:5,
                    causer:'friend',
                    message: 'When you are available . please let me know',
                    avatar: 'https://i.pravatar.cc/150?img=1',
                },
            ]
        }
    },

    methods:{
        isFriend(chat)
        {
            return chat.causer == 'me' ? false : true;
        },

        isMe(chat)
        {
            return chat.causer == 'me' ? true : false;
        }
    }
}

</script>