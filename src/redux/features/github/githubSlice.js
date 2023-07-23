import { createSlice } from "@reduxjs/toolkit";
import { getUserGithub } from "./thunk";

export const githubSlice = createSlice({
	name: "githubDatas",
	initialState: {
		loading: false,
		user: [],
		userRepos: [],
		reposeCommit: [],
		error: null,
	},
	extraReducers: {
		[getUserGithub.pending]: (state, action) => {
			return {
				...state,
				loading: true,
				user: [],
				userRepos: [],
				reposeCommit: [],
				error: null,
			};
		},
		[getUserGithub.fulfilled]: (state, action) => {
			return {
				...state,
				loading: false,
				user: action.payload[0],
				userRepos: action.payload[1],
				reposeCommit: action.payload[2],
				error: null,
			};
		},
		[getUserGithub.rejected]: (state, action) => {
			return {
				...state,
				loading: true,
				user: [],
				userRepos: [],
				reposeCommit: [],
				error: action.error,
			};
		},
	},
});

export default githubSlice.reducer;
