import { createSlice } from '@reduxjs/toolkit';

const FilterSlice = createSlice({
  name: 'filter',
  initialState: [],
  reducers: {
    filterNone: (state, action) => action.payload,
    filterCompleted: (state, action) => action.payload.filter(todo => todo.isCompleted),
    filterIncompleted: (state, action) => action.payload.filter(todo => !todo.isCompleted),
  }
})

export const { filterNone, filterCompleted, filterIncompleted } = FilterSlice.actions
export default FilterSlice.reducer
