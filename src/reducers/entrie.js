import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
  entries: [],
  currentEntry: [],
  update: true
}

export const entrie = createSlice({
  name: 'entrie',
  initialState: initialState,
  reducers: {
    setAllEntries: (state, action) => {
      state.entries = action.payload
    },
    setUpdate: (state, action) => {
      state.update = !state.update
    },
    setCurrentEntry: (state, action) => {
      state.currentEntry = action.payload
    }
  }
})