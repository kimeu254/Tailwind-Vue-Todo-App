<template>
    <div>
        <Table>
            <tr class="bg-white" v-for='todo in tasks' :key='todo.id'>
                <td class="p-3 text-sm text-gray-700 whitespace-nowrap">{{ todo.id }}</td>
                <td class="p-3 text-sm text-gray-700 whitespace-nowrap">{{ todo.title }}</td>
                <td class="p-3 text-sm text-gray-700 whitespace-nowrap">{{ todo.description }}</td>
                <td class="p-3 text-sm text-gray-700 whitespace-nowrap">{{ todo.date_added }}</td>
                <td class="p-3 text-sm text-gray-700 whitespace-nowrap">{{ todo.deadline }}</td>
                <td class="p-3 text-sm text-gray-700 whitespace-nowrap">{{ todo.date_completed }}</td>
                <td class="p-3 text-sm text-gray-700 whitespace-nowrap"><span class="p-1.5 text-xs font-medium uppercase tracking-wider text-gray-700 bg-green-700 rounded-lg bg-opacity-50">Complete</span></td>
                <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                    <div class="flex items-center space-x-2">
                        <input type="checkbox" class="accent-green-700 w-6 h-6">
                        <img src="../icons/edit.svg" alt="edit-icon" class="w-6 h-6 cursor-pointer">
                        <img src="../icons/delete.svg" alt="delete-icon" class="w-6 h-6 cursor-pointer">
                    </div>
                </td>
            </tr>
        </Table>
        <Mobile></Mobile>
    </div>
</template>

<script setup>
import Table from '../table/Table.vue';
import Mobile from '../cards/Mobile.vue';

</script>