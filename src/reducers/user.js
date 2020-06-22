import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  login: {
    accessToken: null,
    userId: "",
    statusMessage: "",
  },
}

export const user = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setAccessToken: (state, action) => {
      const { accessToken } = action.payload
      state.login.accessToken = accessToken
    },
    setUserId: (state, action) => {
      const { userId } = action.payload
      state.login.userId = userId
    },
    setStatusMessage: (state, action) => {
      const { statusMessage } = action.payload
      state.login.statusMessage = statusMessage
    },
    logout: (state, action) => {
      state.login.userId = null
      state.login.accessToken = null
      state.login.statusMessage = null
    },
  },
})
