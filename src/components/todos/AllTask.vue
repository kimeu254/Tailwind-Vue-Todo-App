<template>
    <div>
        <Table>
            <tr class="bg-white" v-for='todo in todos' :key='todo.id'>
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
                        <router-link :to="{name: 'edit', params: {id: todo.id}}"><img src="../icons/edit.svg" alt="edit-icon" class="w-6 h-6 cursor-pointer"></router-link>
                        <img src="../icons/delete.svg" alt="delete-icon" class="w-6 h-6 cursor-pointer">
                    </div>
                </td>
            </tr>
        </Table>
        <Mobile>
            <div class="bg-white space-y-3 p-4 rounded-lg shadow" v-for='todo in todos' :key='todo.id'>
                <div class="flex items-center space-x-2 text-sm">
                    <div>{{ todo.title }}</div>
                    <div>Date</div>
                    <div>Status</div>
                </div>
                <div>{{ todo.description }}</div>
                <div>Due</div>
            </div>
        </Mobile>
    </div>
</template>

<script>
import Table from '../table/Table.vue';
import Mobile from '../cards/Mobile.vue';
import {  mapState } from 'vuex';

export default {
    setup() {
        return {};
    },
    components: { Table, Mobile },
    data() {
        return {
            isComplete: false,
        }
    },
    computed: {
        ...mapState(["todos"]),
    },
    created() {
        this.$store.dispatch("fetchTodos" )
    }
}
</script>