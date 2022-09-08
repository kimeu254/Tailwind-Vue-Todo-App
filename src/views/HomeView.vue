<script setup>
import AllTask from '../components/todos/AllTask.vue';
</script>

<template>
  <main class="p-5">
    <div class="flex justify-center">
      <h3 class="text-xl text-sky-500">To-Do List</h3>
    </div>
    <div class="mt-3">
      <div class="flex justify-end">
        <button class="text-white bg-sky-500 hover:bg-blue-500 rounded py-2 px-4 font-bold">&#43; Add Task</button>
      </div>
      <div class="my-3">
        <AllTask/>
      </div>
    </div>
  </main>
</template>
