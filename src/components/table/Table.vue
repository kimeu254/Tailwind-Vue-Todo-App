<template>
    <div class="overflow-auto rounded-lg shadow hidden lg:block">
        <table class="w-full">
            <thead class="bg-gray-50 border-b-2 border-gray-200 ">
                <tr>
                    <th class="w-12 p-3 text-sm font-semibold tracking-wide text-left">ID</th>
                    <th class="p-3 text-sm font-semibold tracking-wide text-left">Title</th>
                    <th class="p-3 text-sm font-semibold tracking-wide text-left">Description</th>
                    <th class="w-24 p-3 text-sm font-semibold tracking-wide text-center">Date Added</th>
                    <th class="w-24 p-3 text-sm font-semibold tracking-wide text-center">Deadline</th>
                    <th class="w-24 p-3 text-sm font-semibold tracking-wide text-center">Date Completed</th>
                    <th class="w-24 p-3 text-sm font-semibold tracking-wide text-center">Status</th>
                    <th class="w-32 p-3 text-sm font-semibold tracking-wide text-center">Actions</th>
                </tr>
            </thead>
            <tbody class="divide-y divide-gray-100" >
                <slot></slot>
            </tbody>
        </table>
    </div>
    <!-- Mobile View -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:hidden">
        <div class="bg-white space-y-3 p-4 rounded-lg shadow" v-for='task in tasks' :key='task.id'>
            <div class="flex items-center space-x-2 text-sm">
                <div>{{ task.title }}</div>
                <div>Date</div>
                <div>Status</div>
            </div>
            <div>{{ task.description }}</div>
            <div>Due</div>
        </div>
    </div>

</template>

<script setup>
</script>
