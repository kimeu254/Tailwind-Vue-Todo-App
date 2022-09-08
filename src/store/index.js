import axios from "axios"
import { createStore } from "vuex"

const url = ('https://tychak.github.io/')

export default createStore({
    state: {
        todos: JSON.parse(localStorage.getItem("TASKS")) ? JSON.parse(localStorage.getItem("TASKS")) : [],
    },
    getters: {},
    actions: {
        async fetchTodos({commit}) {
            axios
            .get(url)
            .then(response => response.data)
            .then(todos => {
                commit('SET_TODOS', todos)
            })
        },
    },
    mutations: {
        SET_TODOS(state, todos) {
            //state.todos = todos
            localStorage.setItem("TASKS", JSON.stringify(state.todos))
            state.todos = JSON.parse(localStorage.getItem("TASKS"))
        },
    },
    modules: {},
})