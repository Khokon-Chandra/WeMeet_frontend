<template>
  <div>
    <div class="relative min-h-screen flex flex-col bg-gray-50">

      <!-- Navbar start -->

      <Navbar></Navbar>
      <!-- Navbar end -->

      <div class="flex-grow w-full max-w-7xl mx-auto lg:flex">

        <div class="flex-1 min-w-0 bg-white xl:flex">
          <!-- Sidebar contact info -->
          <Contact></Contact>

          <!-- Middle content -->
          <div class="flex-1 p:2 sm:pb-6 justify-between flex flex-col h-screen hidden xl:flex">
            <div class="flex sm:items-center justify-between py-3 border-b border-gray-200 p-3">
              <div class="flex items-center space-x-4">
                <img class="h-10 w-10 sm:w-12 sm:h-12 cursor-pointer rounded-full"
                  src="https://media.istockphoto.com/id/1349010104/photo/a-woman-is-working-with-a-laptop-at-a-table-in-the-room.jpg?s=612x612&w=0&k=20&c=aWMtbQ_mkI-b-o9zzkgcLaFUjpX9yNSsPBtEAq6xVRQ="
                  alt="">
                <div class="flex flex-col leading-tight">
                  <div class="text-1xl mt-1 flex items-center">
                    <span class="text-gray-700 mr-3">luna Khan</span>
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
              <div class="relative flex">
                <span class="absolute inset-y-0 flex items-center">
                  <button
                    class="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300">
                    <font-awesome-icon class="h-6 w-6" icon="fa-solid fa-microphone" />
                  </button>
                </span>
                <input placeholder="Write message" type="text"
                  class="focus:ring-purple-500 focus:border-purple-500 w-full focus:placeholder-gray-400 text-gray-600 placeholder-gray-300 pl-12 bg-gray-100 rounded-full py-3 border-gray-200  ">
                </div>
            </div>
          </div>



        </div>

        <!-- Profile Section -->
        <Profile></Profile>
        <!-- Profile Setion -->

      </div>




    </div>
  </div>
</template>
<script setup>

import Navbar from "../../components/app/Navbar.vue";
import Contact from "../../components/app/messenger/Contact.vue"
import MessageBody from "../../components/app/messenger/MessageBody.vue"
import Profile from "../../components/app/messenger/Profile.vue"
</script>