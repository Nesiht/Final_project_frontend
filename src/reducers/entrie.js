import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
  entries: []
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
    setNewEntry: (state, action) => {
      console.log(`Adding new entry to redux`)
    }

    // Push new entrie
    // Edit entrie
    // Delete entrie
  }
})