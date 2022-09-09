<template>
    <div>
      <div class="container mx-auto">
        <ul class="flex justify-center space-x-2 text-white ">
          <li>
            <button
              @click="currentTab(1)"
              class="inline-block px-4 py-2 bg-blue-500 focus:outline-none"
            >
              All
            </button>
          </li>
          <li>
            <button
              @click="currentTab(2)"
              class="inline-block px-4 py-2 bg-blue-500 focus:outline-none"
            >
              Active
            </button>
          </li>
          <li>
            <button
              @click="currentTab(3)"
              class="inline-block px-4 py-2 bg-blue-500 focus:outline-none"
            >
              Complete
            </button>
          </li>
        </ul>
        <div class="p-3 mt-6 bg-white">
          <div v-if="tab === 1">
            <AllTask/>
          </div>
          <div v-if="tab === 2">
            <ActiveTasks/>
          </div>
          <div v-if="tab === 3">
            <Complete/>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
import { ref } from 'vue';
import AllTask from './AllTask.vue';
import ActiveTasks from './ActiveTasks.vue';
import Complete from './Complete.vue';

export default {
    setup() {
        const tab = ref(1);
        const currentTab = (tabNumber) => (tab.value = tabNumber);
        return { tab, currentTab };
    },
    components: { AllTask, ActiveTasks, Complete }
};
  </script>