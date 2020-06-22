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
    // Add all entries on load
    setAllEntries: (state, action) => {
      // const { _id, CreatedAt, title, text, grade } = action.payload
      console.log(`Saving user entries to redux`)
      // state.entries = { _id, CreatedAt, title, text, grade }
      state.entries = action.payload
    },
    setUpdate: (state, action) => {
      console.log(`Toggle update`)
      state.update = !state.update
    },
    setCurrentEntry: (state, action) => {
      console.log(`Saving current entry to redux`)
      state.currentEntry = action.payload
    }

    // Push new entrie
    // Edit entrie
    // Delete entrie
  }
})