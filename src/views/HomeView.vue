<script setup>
import TodoList from '../components/todos/TodoList.vue';
</script>

<template>
  <main class="p-5">
    <div class="flex justify-center">
      <h3 class="text-xl text-sky-500">To-Do List</h3>
    </div>
    <div class="mt-3">
      <div class="flex justify-end">
        <RouterLink to="/create">
          <button class="text-white bg-sky-500 hover:bg-blue-500 rounded py-2 px-4 font-bold">&#43; Add Task</button>
        </RouterLink>
      </div>
      <div class="my-3">
        <TodoList/>
      </div>
    </div>
  </main>
</template>
