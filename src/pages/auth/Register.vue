<template>
    <div class="register flex justify-center items-center">
      <div class="register-box bg-white shadow-xl rounded-xl p-10">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 class="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Create your account</h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form class="space-y-5" action="#" method="POST">
                <div>
                    <label for="name" class="block text-sm font-medium leading-6 text-gray-900">Name *</label>
                    <div class="mt-2">
                        <input id="name" name="name" type="text" autocomplete="name" required class="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>
                <div>
                    <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Username *</label>
                    <div class="mt-2">
                        <input id="username" name="username" type="text" autocomplete="username" required class="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>

                <div>
                    <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password *</label>
                    <div class="mt-2">
                        <input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>
                <div>
                    <label for="confirm_password" class="block text-sm font-medium leading-6 text-gray-900">Re-type Password *</label>
                    <div class="mt-2">
                        <input id="confirm_password" name="confirm_password" type="confirm_password" required class="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>

                <div>
                    <button type="submit" class="flex w-full bg-purple-800 justify-center rounded-md px-3 py-1 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign up</button>
                </div>
            </form>
            <p class="mt-6 text-center text-sm text-gray-500">
                Do you have account?
                {{ ' ' }}
                <router-link to="/" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Sign in</router-link>
            </p>
        </div>
      </div>
    </div>
</template>
<style scoped>
    .register{
        background: #111827;
        height: 100vh;
    }
    .register-box{
        width: 400px;
        height: auto;
    }
</style>