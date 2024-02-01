<template>
      <div class="flex-grow w-full max-w-7xl mx-auto lg:flex">

        <div class="flex-1 min-w-0 bg-white xl:flex">
          <!-- Sidebar contact info -->
          <Contact></Contact>

          <!-- Middle content -->
          <div v-if="isSelect" class="middle-content flex-1 p:2 sm:pb-6 justify-between flex flex-col hidden xl:flex h-full">
            <div class="flex sm:items-center justify-between py-3 border-b border-gray-200 p-3">
              <div class="flex items-center space-x-4">
                <img class="h-10 w-10 sm:w-12 sm:h-12 cursor-pointer rounded-full"
                  :src="selectedUser.avatar"
                  alt="">
                <div class="flex flex-col leading-tight">
                  <div class="text-1xl mt-1 flex items-center">
                    <span class="text-gray-700 mr-3"><pre>{{selectedUser.name}}</pre></span>
                    <span class="bg-green-500 h-3 w-3 rounded-full">
                    </span>
                  </div>
                </div>
              </div>

              <div class="flex items-center space-x-3">
                <button
                  class="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out hover:bg-gray-300 focus:outline-none">
                  <font-awesome-icon class="h-6 w-6 text-gray-500" icon="fa-solid fa-magnifying-glass" />
                </button>
                <button
                  class="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out hover:bg-gray-300 focus:outline-none">
                  <font-awesome-icon class="h-6 w-6 text-gray-500" :icon="'fal-solid fa-heart'" />
                </button>
                <button
                  class="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out hover:bg-gray-300 focus:outline-none">
                  <font-awesome-icon class="h-6 w-6 text-gray-500" :icon="'fal-solid fa-bell'" />
                </button>
              </div>
            </div>

            <!-- Message content start here -->
            <MessageBody></MessageBody>
            <!-- Message content end here -->

            <div class="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-15">
              <form @submit.prevent="sendMessage" method="POST">
              <div class="relative flex">
                <span class="absolute inset-y-0 flex items-center">
                  <button
                    type="button"
                    class="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300">
                    <font-awesome-icon class="h-6 w-6" icon="fa-solid fa-microphone" />
                  </button>
                </span>
                <input v-model="data.message" placeholder="Write message" type="text"
                  class="focus:ring-purple-500 focus:border-purple-500 w-full pr-[50px] focus:placeholder-gray-400 text-gray-600 placeholder-gray-300 pl-12 bg-gray-100 rounded-full py-3">
                  <span class="absolute inset-y-0 right-0 flex items-center">
                  <button type="submit" class="bg-gray-300 border-purple-500 inline-flex items-center justify-center rounded-e-full h-12 w-12 transition duration-500 ease-in-out hover:bg-gray-400">
                    <svg class="w-8 h-8 fill-purple-700" fill="#000000" width="800px" height="800px" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg">
                      <path d="M231.626,128a16.015,16.015,0,0,1-8.18262,13.96094L54.53027,236.55273a15.87654,15.87654,0,0,1-18.14648-1.74023,15.87132,15.87132,0,0,1-4.74024-17.60156L60.64746,136H136a8,8,0,0,0,0-16H60.64746L31.64355,38.78906A16.00042,16.00042,0,0,1,54.5293,19.44727l168.915,94.59179A16.01613,16.01613,0,0,1,231.626,128Z"/>
                    </svg>
                  </button>
                </span>
                </div>
              </form>
            </div>
          </div>
          <div v-else class="middle-content flex-1 p:2 sm:pb-6 justify-between flex flex-col hidden xl:flex h-full">
            <div class="m-auto">
              <img src="../../../public/logo.png"
                alt="" class="h-100 rounded-full">
                <h2 class="font-bold text-purple-700 text-center">NO CHAT SELECTED</h2>
            </div>
          </div>


        </div>

        <!-- Profile Section -->
        <Profile></Profile>
        <!-- Profile Setion -->

      </div>
</template>
<script>
import store from "@/store";
import Contact from "../../components/app/messenger/Contact.vue";
import MessageBody from "../../components/app/messenger/MessageBody.vue";
import Profile from "../../components/app/messenger/Profile.vue";
import pusher from "@/pusher";
export default {
  created(){
      const channel = pusher.subscribe(`message-${store.state.basic.user.data.id}`);
        channel.bind('message-notification', function(data) {
          console.log(data);
          if(store.state.basic.selectedUser.id == data.user_id){
            const messages = store.state.basic.messages; 
            store.state.basic.messages = [data, ...messages];
          }
        })
    },
  data () {
    return {
      data : {
        user_id: null,
        message: null
      }
    }
  },
  components: {
    Contact,
    MessageBody,
    Profile
  },
  computed : {
    selectedUser(){
      return store.state.basic.selectedUser;
    },
    messages(){
      return store.state.basic.messages;
    },
    isSelect(){
      const user = store.state.basic.selectedUser;
      return user.id? true : false;
    }
  },
  methods:{
    sendMessage(){
      this.data.user_id = this.selectedUser.id;
      store.dispatch('sendMessages', this.data)
        .then(({chat})=>{
          this.data.message = "";
          const messages = store.state.basic.messages; 
          store.state.basic.messages = [chat, ...messages];
        })
        .catch(()=>{
          this.errorMessage = "Internal server error!"
        });
    }
  }
}
</script>
<style scoped>
.middle-content{
  height: calc(100vh - 55px);
}
</style>