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
                                class="block w-full rounded-md border-0 py-1.5 px-2 ring-offset-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
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
                                class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div>
                        <button
              type="submit"
              :disabled="loading"
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              :class="{
                'cursor-not-allowed': loading,
                'hover:bg-purple-700': loading,
              }"
            >
              <svg
                v-if="loading"
                class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                <LockClosedIcon
                  class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  aria-hidden="true"
                />
              </span>
              Sign in
            </button>
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
import router from '@/router';


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
                    router.push({ path: '/' });
                })
                .catch(({ response }) => {
                    this.loading = false;
                    this.errorMessage = response.data.message
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