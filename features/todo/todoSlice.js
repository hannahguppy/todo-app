import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
  name: 'todo',
  initialState: {
    allTodos: [],
    showedTodos: [],
  },
  reducers: {
    addTodo: (state, action) => {state.allTodos.push(action.payload)},
    removeTodo: (state, action) => {
      return state.allTodos.filter(todo => todo.id !== action.payload.id)
    },
    checkTodo: (state, action) => {
      state.allTodos.map(todo => {
        if (todo.id == action.payload.id) {
          todo.isCompleted = !todo.isCompleted
          return todo
        }
      })
    },
    filterNone: (state) => {
      state.showedTodos = state.allTodos
    },
    filterCompleted: (state) => {
      state.showedTodos = state.allTodos.filter(todo => todo.isCompleted)
    },
    filterIncompleted: (state) => {
      state.showedTodos = state.allTodos.filter(todo => !todo.isCompleted)
    },
  }
})

export const { 
  addTodo, removeTodo, checkTodo, 
  filterNone, filterCompleted, filterIncompleted 
} = TodoSlice.actions

export default TodoSlice.reducer
