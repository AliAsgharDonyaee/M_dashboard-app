import { createSlice } from "@reduxjs/toolkit";
import { getAsyncCoins } from "./thunk";

export const coinsSlice = createSlice({
	name: "coinsDatas",
	initialState: {
		loading: false,
		coins: [],
		onceData: [{ cond: false, datas: [] }],
		error: null,
	},
	reducers: {
		oneCoin: (state, action) => {
			return {
				...state,
				coins: [...state.coins],
				onceData: [{ data: true, datas: action.payload }],
				loading: false,
				error: null,
			};
		},
	},
	extraReducers: {
		// coins
		[getAsyncCoins.pending]: (state, action) => {
			return {
				...state,
				coins: [],
				onceData: [{ data: false, datas: [] }],
				loading: true,
				error: null,
			};
		},
		[getAsyncCoins.fulfilled]: (state, action) => {
			return {
				...state,
				coins: action.payload,
				onceData: [{ data: false, datas: [] }],
				loading: false,
				error: null,
			};
		},
		[getAsyncCoins.rejected]: (state, action) => {
			return {
				...state,
				coins: [],
				onceData: [{ data: false, datas: [] }],
				loading: true,
				error: action.error,
			};
		},
	},
});

export const { oneCoin } = coinsSlice.actions;

export default coinsSlice.reducer;
