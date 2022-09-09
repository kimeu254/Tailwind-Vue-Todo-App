<template>
    <div class="overflow-auto rounded-lg shadow hidden lg:block">
        <table class="w-full">
            <thead class="bg-gray-50 border-b-2 border-gray-200 ">
                <tr>
                    <th class="w-12 p-3 text-sm font-semibold tracking-wide text-left">ID</th>
                    <th class="p-3 text-sm font-semibold tracking-wide text-left">Title</th>
                    <th class="p-3 text-sm font-semibold tracking-wide text-left">Description</th>
                    <th class="w-24 p-3 text-sm font-semibold tracking-wide">Date Added</th>
                    <th class="w-24 p-3 text-sm font-semibold tracking-wide">Deadline</th>
                    <th class="w-24 p-3 text-sm font-semibold tracking-wide">Status</th>
                    <th class="w-32 p-3 text-sm font-semibold tracking-wide text-left">Actions</th>
                </tr>
            </thead>
            <tbody class="divide-y divide-gray-100" >
                <slot></slot>
            </tbody>
        </table>
    </div>
</template>

<script setup>
</script>
