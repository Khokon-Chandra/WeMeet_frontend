<template>
    <div class="overflow-hidden bg-gray-50 pr-4 sm:pr-6 lg:pr-8 lg:flex-shrink-0 lg:border-l lg:border-gray-200 xl:pr-0 hidden xl:block">
    <perfect-scrollbar class="chat-profile pl-6 py-6 lg:w-80 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-light scrollbar-w-2 scrolling-touch">



            <div class="h-full relative">

                <div class="mb-4">
                    <div class="relative">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <font-awesome-icon class="h-5 w-5 text-gray-400" icon="fa-solid fa-magnifying-glass" />
                        </div>
                        <input name="search" placeholder="Search Profile"
                            class="focus:ring-purple-500 focus:border-purple-500 block w-full pl-10 sm:text-sm border-gray-100 rounded-full p-2 border">

                    </div>
                </div>


                <div class="m-auto text-center mb-5">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOWZM4LaEBG5h5ux83IEllVR4Y1vRwsWtLdA&usqp=CAU"
                        alt="" class="w-36 h-36 rounded-full m-auto">
                    <h2 class="m-auto text-2xl font-bold text-gray-600 mt-2 mb-0">Kanai Lal</h2>
                    <h2 class="m-auto text-1xl font-bold text-gray-500 mt-2">Software Engineer</h2>
                </div>

                <div class="mb-4">
                    <div class="flex items-center">
                        <div class="grid grid-cols-2 divide-x-2 devide-gray-700 m-auto">
                            <div class="space-y-4 text-center p-5">
                                <span
                                    class="bg-purple-300 p-4 rounded-full cursor-pointer hover:bg-purple-400 transition ease-in-out duration-500">
                                    <font-awesome-icon class="text-purple-700 text-lg" icon="fa-solid fa-comment" />
                                </span>
                                <h3 class="text-md font-bold text-gray-500">Chat</h3>
                            </div>
                            <div class="space-y-4 text-center p-5">
                                <span
                                    class="bg-purple-300 p-4 rounded-full cursor-pointer hover:bg-purple-400 transition ease-in-out duration-500">
                                    <font-awesome-icon class="text-purple-700 text-lg" icon="fa-solid fa-video-camera" />
                                </span>
                                <h3 class="text-md font-bold text-gray-500">Video Call</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="mb-2">
                    <h4 class="text-gray-600 font-bold text-md">Attachments</h4>
                </div>
                <div class="grid grid-cols-4 gap-2">
                    <div>
                        <div class="cursor-pointer bg-gray-300 hover:bg-gray-400 h-14 w-full"></div>
                    </div>
                    <div>
                        <div class="cursor-pointer bg-gray-300 hover:bg-gray-400 h-14 w-full"></div>
                    </div>
                    <div>
                        <div class="cursor-pointer bg-gray-300 hover:bg-gray-400 h-14 w-full"></div>
                    </div>
                    <div>
                        <div class="cursor-pointer bg-gray-300 hover:bg-gray-400 h-14 w-full"></div>
                    </div>
                    <div>
                        <div class="cursor-pointer bg-gray-300 hover:bg-gray-400 h-14 w-full"></div>
                    </div>
                    <div>
                        <div class="cursor-pointer bg-gray-300 hover:bg-gray-400 h-14 w-full"></div>
                    </div>
                    <div>
                        <div class="cursor-pointer bg-gray-300 hover:bg-gray-400 h-14 w-full"></div>
                    </div>
                    <div>
                        <div class="cursor-pointer bg-gray-300 hover:bg-gray-400 h-14 w-full"></div>
                    </div>
            </div>
        </div>
    </perfect-scrollbar>
</div>
</template>
<style scoped>
.chat-profile{
    height: calc(100vh - 80px);
}
</style>