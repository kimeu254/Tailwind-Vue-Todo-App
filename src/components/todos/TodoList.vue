<template>
  <div class="flex flex-wrap">
    <div class="w-full">
      <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(1)" v-bind:class="{'text-sky-500 bg-white': openTab !== 1, 'text-white bg-sky-500': openTab === 1}">
            All
          </a>
        </li>
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(2)" v-bind:class="{'text-sky-500 bg-white': openTab !== 2, 'text-white bg-sky-500': openTab === 2}">
            Active
          </a>
        </li>
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(3)" v-bind:class="{'text-sky-500 bg-white': openTab !== 3, 'text-white bg-sky-500': openTab === 3}">
            Complete
          </a>
        </li>
      </ul>
      <div class="relative flex flex-col min-w-0 break-words w-full mb-6">
        <div class="px-4 py-5 flex-auto">
          <div class="tab-content tab-space">
            <div v-bind:class="{'hidden': openTab !== 1, 'block': openTab === 1}">
              <AllTask/>
            </div>
            <div v-bind:class="{'hidden': openTab !== 2, 'block': openTab === 2}">
              <ActiveTasks/>
            </div>
            <div v-bind:class="{'hidden': openTab !== 3, 'block': openTab === 3}">
              <Complete/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import AllTask from './AllTask.vue';
import ActiveTasks from './ActiveTasks.vue';
import Complete from './Complete.vue';

export default {
    setup() {
        
        return {};
    },
    components: { AllTask, ActiveTasks, Complete },
    data() {
      return {
        openTab: 1
      }
    },
    methods: {
    toggleTabs: function(tabNumber){
      this.openTab = tabNumber
    }
  }
};
  </script>