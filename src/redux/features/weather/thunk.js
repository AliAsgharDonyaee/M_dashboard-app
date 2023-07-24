import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../../services/http";

const getWeather = createAsyncThunk("weather/getWeatherDatas", async (_, { rejectWithValue }) => {
	try {
		const res = await http.get("https://api.ipify.org?format=json");
		const resp = await http.get(`http://ip-api.com/json/${res.data.ip}`);

		const respo = await http.get(
			`${process.env.REACT_APP_WEATHER_URL}/data/2.5/forecast?lat=${resp.data.lat.toFixed(
				2,
			)}&lon=${resp.data.lon.toFixed(2)}&appid=${process.env.REACT_APP_WEATHER_API_TOKEN}`,
		);
		if (respo?.data) return respo.data;
	} catch (error) {
		return rejectWithValue([], error.message);
	}
});

export default getWeather;
