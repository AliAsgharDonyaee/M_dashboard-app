import { createSlice } from "@reduxjs/toolkit";
import { getWeather } from "./thunk.js";

export const weatherSlice = createSlice({
	name: "weatherDatas",
	initialState: {
		loading: false,
		data: [],
		error: null,
	},
	extraReducers: {
		[getWeather.pending]: (state, action) => {
			return {
				...state,
				loading: true,
				data: [],
				error: null,
			};
		},
		[getWeather.fulfilled]: (state, action) => {
			return {
				...state,
				loading: false,
				data: action.payload,
				error: null,
			};
		},
		[getWeather.rejected]: (state, action) => {
			return {
				...state,
				loading: true,
				data: [],
				error: action.error,
			};
		},
	},
});

export default weatherSlice.reducer;
