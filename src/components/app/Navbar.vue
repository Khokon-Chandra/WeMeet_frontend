<template>
    <nav class="flex-shrink-0 bg-purple-700 shadow-sm">
        <div class="max-w-7xl mx-auto px-2 sl:px-4 lg:px-8">
            <div class="relative flex items-center justify-between h-16">
                <div class="max-h-full overflow-hidden bg-white block rounded-xl">
                    <img class="h-16" src="./../../../public/favicon.png" alt="Your Company" />
                </div>
                <div class="flex lg:hidden">
                    <button
                        class="bg-purple-600 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-purple-600 focus:ring-2 focus:ring-white focus:ring-offset-2">
                        <font-awesome-icon class="h-5 w-7" icon="fa-solid fa-bars-staggered"></font-awesome-icon>
                    </button>
                </div>
                <div class="hidden lg:block lg:w-80">
                    <div class="flex items-center justify-end">
                        <div class="flex">
                            <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-white hover:text-white">
                                {{ user.name }}
                            </a>
                        </div>
                        <div
                            class="ml-4 relative flex-shrink-0 text-sm text-white focus:ring-1 focus:ring-offset-1 foduc:ring-white">

                            <Dropdown :user="user"></Dropdown>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>
<script >
import Dropdown from "@/components/app/Dropdown.vue"
import store from "@/store";
export default {
    components: {Dropdown},
    computed: {
        user(){
            return store.state.basic.user.data;
        }
    }
}
</script>