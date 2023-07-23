import { configureStore } from "@reduxjs/toolkit";
import githubSlice from "./features/github/githubSlice.js";
import coinsSlice from "./features/crypto/coinsSlice.js";
import weatherSlice from "./features/weather/weatherSlice.js";

export default configureStore({
	reducer: {
		githubDatas: githubSlice,
		coinsData: coinsSlice,
		weathersData: weatherSlice,
	},
});
