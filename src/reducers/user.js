import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: {
    accessToken: null,
    userId: "",
    statusMessage: "",
  },
};

// Reducer boilerplate
export const user = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setAccessToken: (state, action) => {

    },
    setUserId: (state, action) => {

    },
    setStatusMessage: (state, action) => {

    },
    logout: (state, action) => {

    },
  },
});

// Thunk boilerplate
export const fetchData = (code) => {
	const url = `URL`;
	return (dispatch) => {
		fetch(url)
			.then((data) => data.json())
			.then((json) => {
        // SOME CODE HERE
			})
			.catch(function(error) {
				console.log(error);
			});
	};
};