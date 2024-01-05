<template>
    <div class="border-b border-gray-200 xl:border-b-0 xl:flex-shrink-0 xl:w-80 xl:border-r xl:border-gray-200 bg-gray-50">
        <div class="h-full pl-4 pr-2 py-6 sm:pl-6 lg:pl-8 xl:pl-0">

            <div class="contact relative overflow-hidden">

                <div
                    class="relative rounded-lg px-2 py-2 flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 mb-5">
                    <div class="flex-shrink-0">
                        <img class="h-16 w-16 rounded-full"
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="">
                    </div>
                    <div class="flex-1 min-w-0">
                        <a href="#" class="focus:outline-none">
                            <span class="absolute inset-0"></span>
                            <p class="text-sm font-bold text-purple-700">Boris Kemiron</p>
                            <p class="text-sm text-gray-500 truncate">Software Engineer</p>
                        </a>
                    </div>

                    <div class="flex items-end justify-end">
                        <font-awesome-icon class="text-gray-500" icon="fa-solid fa-pencil"/>  
                    </div>
                </div>

                <div class="mb-4">
                    <div class="relative">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <font-awesome-icon class="h-5 w-5 text-gray-400" icon="fa-solid fa-magnifying-glass" />
                        </div>
                        <input name="search" placeholder="Search friends"
                            class="focus:ring-purple-500 focus:border-purple-500 block w-full pl-10 sm:text-sm border-gray-100 rounded-full p-2 border">

                    </div>
                </div>


                <perfect-scrollbar class="contact-items overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-light scrollbar-w-2 scrolling-touch">
                    <div class="relative rounded-lg px-2 py-2 flex items space-x-3 hover:border-gra-400 focus-within:ring-2 mb-3 hover:bg-gray-200">
                        <div class="flex-shrink-0">
                            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww"
                                alt="" class="h-10 w-10 rounded-full">
                        </div>
                        <div class="flex-1 min-w-0">
                            <a href="#" class="focus:outline-none">
                                <div class="flex items-center justify-between">
                                    <p class="text-sm font-bold text-purple-600">Mr. Hervey</p>
                                    <div class="text-gray-400">12:40 AM</div>
                                </div>
                                <div class="flex items-center justify-between">
                                    <p class="text-sm text-gray-500">Hi</p>
                                    <div class="text-xs text-white bg-purple-400 rounded-full px-1 py-0">2</div>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div
                        class="relative rounded-lg px-2 py-2 flex items space-x-3 hover:border-gra-400 focus-within:ring-2 mb-3 hover:bg-gray-200">
                        <div class="flex-shrink-0">
                            <img src="https://media.istockphoto.com/id/1446806061/photo/young-smiling-woman-student-using-laptop-watching-webinar-writing-at-home.jpg?s=612x612&w=0&k=20&c=Qcb7YbG9uat4oKJQ3o_tX-gd00kQ3HDWvNVhGphj6UM="
                                alt="" class="h-10 w-10 rounded-full">
                        </div>
                        <div class="flex-1 min-w-0">
                            <a href="#" class="focus:outline-none">
                                <div class="flex items-center justify-between">
                                    <p class="text-sm font-bold text-purple-600">Mr. Hervey</p>
                                    <div class="text-gray-400">12:40 AM</div>
                                </div>
                                <div class="flex items-center justify-between">
                                    <p class="text-sm text-gray-500">Hi Darry</p>
                                    <div class="text-xs text-white bg-purple-400 rounded-full px-1 py-0">3</div>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div
                        class="relative rounded-lg px-2 py-2 flex items space-x-3 hover:border-gra-400 focus-within:ring-2 mb-3 hover:bg-gray-200">
                        <div class="flex-shrink-0">
                            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww"
                                alt="" class="h-10 w-10 rounded-full">
                        </div>
                        <div class="flex-1 min-w-0">
                            <a href="#" class="focus:outline-none">
                                <div class="flex items-center justify-between">
                                    <p class="text-sm font-bold text-purple-600">Mr. Hervey</p>
                                    <div class="text-gray-400">12:40 AM</div>
                                </div>
                                <div class="flex items-center justify-between">
                                    <p class="text-sm text-gray-500">Hi</p>
                                    <div class="text-xs text-white bg-purple-400 rounded-full px-1 py-0">2</div>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div
                        class="relative rounded-lg px-2 py-2 flex items space-x-3 hover:border-gra-400 focus-within:ring-2 mb-3 hover:bg-gray-200">
                        <div class="flex-shrink-0">
                            <img src="https://media.istockphoto.com/id/1446806061/photo/young-smiling-woman-student-using-laptop-watching-webinar-writing-at-home.jpg?s=612x612&w=0&k=20&c=Qcb7YbG9uat4oKJQ3o_tX-gd00kQ3HDWvNVhGphj6UM="
                                alt="" class="h-10 w-10 rounded-full">
                        </div>
                        <div class="flex-1 min-w-0">
                            <a href="#" class="focus:outline-none">
                                <div class="flex items-center justify-between">
                                    <p class="text-sm font-bold text-purple-600">Mr. Hervey</p>
                                    <div class="text-gray-400">12:40 AM</div>
                                </div>
                                <div class="flex items-center justify-between">
                                    <p class="text-sm text-gray-500">Hi Darry</p>
                                    <div class="text-xs text-white bg-purple-400 rounded-full px-1 py-0">3</div>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div
                        class="relative rounded-lg px-2 py-2 flex items space-x-3 hover:border-gra-400 focus-within:ring-2 mb-3 hover:bg-gray-200">
                        <div class="flex-shrink-0">
                            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww"
                                alt="" class="h-10 w-10 rounded-full">
                        </div>
                        <div class="flex-1 min-w-0">
                            <a href="#" class="focus:outline-none">
                                <div class="flex items-center justify-between">
                                    <p class="text-sm font-bold text-purple-600">Mr. Hervey</p>
                                    <div class="text-gray-400">12:40 AM</div>
                                </div>
                                <div class="flex items-center justify-between">
                                    <p class="text-sm text-gray-500">Hi</p>
                                    <div class="text-xs text-white bg-purple-400 rounded-full px-1 py-0">2</div>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div
                        class="relative rounded-lg px-2 py-2 flex items space-x-3 hover:border-gra-400 focus-within:ring-2 mb-3 hover:bg-gray-200">
                        <div class="flex-shrink-0">
                            <img src="https://media.istockphoto.com/id/1446806061/photo/young-smiling-woman-student-using-laptop-watching-webinar-writing-at-home.jpg?s=612x612&w=0&k=20&c=Qcb7YbG9uat4oKJQ3o_tX-gd00kQ3HDWvNVhGphj6UM="
                                alt="" class="h-10 w-10 rounded-full">
                        </div>
                        <div class="flex-1 min-w-0">
                            <a href="#" class="focus:outline-none">
                                <div class="flex items-center justify-between">
                                    <p class="text-sm font-bold text-purple-600">Mr. Hervey</p>
                                    <div class="text-gray-400">12:40 AM</div>
                                </div>
                                <div class="flex items-center justify-between">
                                    <p class="text-sm text-gray-500">Hi Darry</p>
                                    <div class="text-xs text-white bg-purple-400 rounded-full px-1 py-0">3</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </perfect-scrollbar>



            </div>
        </div>
    </div>
</template>
<style scoped>
.contact{
    height: calc(100vh - 80px);
}
.contact-items{
    height: calc(100vh - 245px);
}
</style>