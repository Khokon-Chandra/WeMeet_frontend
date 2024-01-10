<template>
  <div>
    <Sidebar />
    <div class="relative md:ml-64 bg-blueGray-100">
      <div class="pt-12">
        <AdminNavbar />
      </div>
      <div class="content px-4 md:px-5 mx-auto w-full pt-16">
        <router-view />
      </div>
      <AdminFooter />
    </div>
  </div>
</template>
<script>
import AdminFooter from "@/components/footers/AdminFooter.vue";
import AdminNavbar from "@/components/navbars/AdminNavbar.vue";
import Sidebar from "@/components/sidebar/Sidebar.vue";
export default {
  components: {
    Sidebar,
    AdminNavbar,
    AdminFooter,
  }
}
</script>
<style>
.content {
  height: 80vh;
}
</style>
