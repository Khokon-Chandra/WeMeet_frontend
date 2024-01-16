<template>
    <div class="login flex justify-center items-center">
        <div class="login-box bg-white shadow-xl rounded-xl p-10">
            <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                <img class="mx-auto h-20 w-auto" src="./../../../public/logo.png" alt="Your Company" />
                <h2 class="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your
                    account</h2>
            </div>



            <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

                <div v-if="errorMessage"
                    class="flex items-center justify-between py-2 px-2 mb-4 bg-red-100 text-red-500 rounded-md text-sm">
                    {{ errorMessage }}
                    <span @click="errorMessage = false"
                        class="w-8 h-8 flex items-center justify-center rounded-full transition-colors cursor-pointer hover:bg-[rgba(0,0,0,0.2)]">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </span>
                </div>

                <form class="space-y-6" @submit.prevent="login" method="POST">
                    <div>
                        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email</label>
                        <div class="mt-2">
                            <input id="email" v-model="user.email" type="text" autocomplete="email" required
                                class="block w-full rounded-md border-0 py-1.5 ring-offset-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div>
                        <div class="flex items-center justify-between">
                            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                            <div class="text-sm">
                                <a href="#" class="text-purple-800 font-semibold hover:text-purple-500">Forgot password?</a>
                            </div>
                        </div>
                        <div class="mt-2">
                            <input id="password" v-model="user.password" type="password" autocomplete="current-password"
                                required
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div>
                        <button type="submit"
                            class="flex w-full bg-purple-800 justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign
                            in</button>
                    </div>
                </form>
                <p class="mt-6 text-center text-sm text-gray-500">
                    Not a user?
                    {{ ' ' }}
                    <router-link to="/register" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Sign
                        up</router-link>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
import store from '@/store';

export default {
    data() {
        return {
            loading: false,
            errorMessage: false,
            user: {
                email: '',
                password: '',
            }
        }
    },

    methods: {
        login() {
            this.loading = true;
            store
                .dispatch("login", this.user)
                .then(() => {
                    this.loading = false
                    router.push({ name: "app.messenger" });
                })
                .catch(({ response }) => {
                    this.loading = false;
                    this.errorMessage = response.data.message || response.error;
                });
        }
    }
}
</script>
<style scoped>
.login {
    background: #111827;
    height: 100vh;
}

.login-box {
    width: 400px;
    height: auto;
}
</style>