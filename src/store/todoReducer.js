import { createSlice } from '@reduxjs/toolkit'

const todoReducer = createSlice({
    name: 'todo',
    initialState: localStorage.todo ? JSON.parse(localStorage.todo) : [],

    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload)
        },

        switchIsCompleteTodo: (state, action) => {
            state.forEach((todo, index) => {
                if (todo.id === action.payload) {
                    state[index].isComplete = !(todo.isComplete)
                }
            })
        },

        removeTodo: (state, action) => {
            state.splice(state.findIndex(todo => todo.id === action.payload), 1)
        }
    }
})

export default todoReducer.reducer

export const { addTodo, switchIsCompleteTodo, removeTodo } = todoReducer.actions