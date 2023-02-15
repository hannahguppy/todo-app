import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
  name: 'todo',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {state.push(action.payload)},
    removeTodo: (state, action) => {
      return state.filter(todo => todo.id !== action.payload.id)
    },
    checkTodo: (state, action) => {
      state.map(todo => {
        if (todo.id == action.payload.id) {
          todo.isCompleted = !todo.isCompleted
          return todo
        }
      })
    },
  }
})

export const { addTodo, removeTodo, checkTodo } = TodoSlice.actions
export default TodoSlice.reducer
