<template>
  <div>
    <div class="relative min-h-screen flex flex-col bg-gray-50 overflow-hidden h-screen">

      <!-- Navbar start -->
      <Navbar></Navbar>
      <!-- Navbar end -->

      <div class="flex-grow w-full max-w-7xl mx-auto lg:flex">

        <router-view></router-view>

      </div>


    </div>
  </div>
</template>
<script setup>
import Navbar from "../../components/app/Navbar.vue";
</script>
