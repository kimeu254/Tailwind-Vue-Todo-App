<template>
    <div class="bg-sky-500 text-white py-3.5 px-6 shadow md:flex justify-between items-center">
        
        <div class="flex items-center cursor-pointer">
            <img src="../../assets/img/icons8-task-100.png" alt="brand-img" class="mr-1 h-10 w-10">
            <h1 class="text-2xl uppercase font-rampart font-extrabold "> {{ title }} </h1>
        </div>

        <span class="absolute md:hidden right-6 top-1.5 cursor-pointer text-4xl text">
            <i class="bi bi-list"></i>
        </span>
        <button class="absolute right-6 top-3 text-white cursor-pointer text-xl leading-none border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none" type="button" @click="toggleNavbar">
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </button>

        <ul class="md:flex md:items-center md:px-0 px-3 md:pb-0 pb-10 md:static absolute bg-sky-500 md:w-auto w-full top-14 duration-700 ease-in" :class="showMenu ? 'left-0' : 'left-[-100%]'">
            <li v-for="link in props.links" :key="link.id" class="md:mx-4 md:my-0 my-6">
                <router-link :to="link.path" class="text-xl hover:text-gray-200">{{ link.name }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue';

let showMenu = ref(false);
const toggleNavbar = () => (showMenu.value = !showMenu.value);
const props = defineProps({
    title: {type: String, required: true},
    links: {type: Array, required: true}
});
</script>

<style scoped>

</style>