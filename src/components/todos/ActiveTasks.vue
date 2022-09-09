<template>
    <div>
        <Table>
            <tr class="bg-white" v-for='todo in inCompleteTodos' :key='todo.id'>
                <td class="p-3 text-sm text-gray-700 whitespace-nowrap">{{ todo.id }}</td>
                <td class="p-3 text-sm text-gray-700 whitespace-nowrap">{{ todo.title }}</td>
                <td class="p-3 text-sm text-gray-700 whitespace-nowrap">{{ todo.description }}</td>
                <td class="p-3 text-sm text-gray-700 whitespace-nowrap">{{ todo.date_added }}</td>
                <td class="p-3 text-sm text-gray-700 whitespace-nowrap">{{ todo.deadline }}</td>
                <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                    <div v-if="todo.isComplete != true ">
                        <span @click="markComplete(todo.id, todo.isComplete)" class="p-1.5 text-xs font-medium tracking-wider text-gray-700 bg-orange-500 rounded-lg bg-opacity-50">Incomplete</span>
                    </div>
                    <div v-else>
                        <span class="p-1.5 text-xs font-medium uppercase tracking-wider text-gray-700 bg-green-500 rounded-lg bg-opacity-50" @click="markComplete(todo.id, todo.isComplete)">Complete</span>
                    </div>
                </td>
                <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                    <div class="flex items-center space-x-4">
                        <router-link :to="{name: 'edit', params: {id: todo.id}}"><img src="../icons/edit.svg" alt="edit-icon" class="w-6 h-6 cursor-pointer"></router-link>
                        <img  @click="deleteTodo(todo.id)" src="../icons/delete.svg" alt="delete-icon" class="w-6 h-6 cursor-pointer">
                    </div>
                </td>
            </tr>
        </Table>
        <Mobile>
            <div class="bg-white space-y-3 p-4 rounded-lg shadow" v-for='todo in inCompleteTodos' :key='todo.id' :class="{active : todo.isComplete}">
                <div class="flex items-center justify-between">
                    <div>{{ todo.title }}</div>
                    <div class="flex items-center space-x-4">
                        <div v-if="todo.isComplete != true ">
                            <img @click="markComplete(todo.id, todo.isComplete)" src="../../assets/img/icons8-unchecked-checkbox-16.png" alt="">
                        </div>
                        <div v-else>
                            <img @click="markComplete(todo.id, todo.isComplete)" src="../../assets/img/icons8-checked-checkbox-16.png" class="">
                        </div>
                        <router-link :to="{name: 'edit', params: {id: todo.id}}"><img src="../icons/edit.svg" alt="edit-icon" class="w-6 h-6 cursor-pointer"></router-link>
                        <img  @click="deleteTodo(todo.id)" src="../icons/delete.svg" alt="delete-icon" class="w-6 h-6 cursor-pointer">
                    </div>
                </div>
                <div class="text-sm text-gray-600 font-medium">{{ todo.description }}</div>
               <div class="flex items-center justify-between">
                    <div>
                        <div class="text-sm text-gray-700 font-light">Added on: 
                            <span class="font-thin ">{{todo.date_added}}</span>
                        </div>
                        <div v-if="todo.isComplete != true" class="text-sm text-gray-700 font-light">Due on: 
                            <span class="font-thin ">{{todo.deadline}}</span>
                        </div>
                    </div>
                    <div>
                        <div v-if="todo.isComplete != false">
                            <img src="../../assets/img/icons8-done-67.png" alt="complete">
                            <span class="text-sm font-light">Complete</span>
                        </div>
                        <div v-else>
                            <img src="../../assets/img/icons8-warning-64 (1).png" alt="incomplete">
                            <span class="text-sm font-light">Incomplete</span>
                        </div>
                    </div>
               </div>
            </div>
        </Mobile>
    </div>
</template>

<script>
import Table from '../table/Table.vue';
import Mobile from '../cards/Mobile.vue';
import { mapGetters } from 'vuex';
import Swal from 'sweetalert2';

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
        ...mapGetters(["inCompleteTodos"]),
    },
    created() {
        this.$store.dispatch("fetchTodos" )
    },
    methods: {
        deleteTodo(id){
            this.$swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((response)=>{
                if (response.isConfirmed){
                    this.$store.dispatch("deleteTodos", {id})
                    this.$swal.fire(
                        {
                            title: 'Deleted!',
                            text: 'Your file has been deleted.',
                            icon: 'success',
                            showConfirmButton: false,
                            timer: 1500
                        }
                    )
                } else if (
                    response.dismiss === Swal.DismissReason.cancel
                ) {
                    this.$swal.fire({
                        title: 'Canceled',
                        text: 'Your imaginary file is safe :)',
                        icon: 'error',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
        },
        markComplete(id, isComplete){
            this.$store.dispatch("markComplete", {id, isComplete : this.isComplete = !this.isComplete})
        },
    },
    
}
</script>