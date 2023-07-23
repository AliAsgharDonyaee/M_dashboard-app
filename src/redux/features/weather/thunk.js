import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../../services/http";

export const getWeather = createAsyncThunk("weather/getWeatherDatas", async (_, { rejectWithValue }) => {
	try {
		const getIP = await http.get("https://api.ipify.org?format=json");

		const getLocation = await http.get(`http://ip-api.com/json/${getIP.data.ip}`);

		const res = await http.get(
			`http://api.openweathermap.org/data/2.5/forecast/daily?lat=${+getLocation.data.lat.toFixed(2)}&lon=${+getLocation.data.lon.toFixed(2)}&cnt=7&appid=${process.env.REACT_APP_WEATHER_API_TOKEN}`,
		);
		return res.data;
	} catch (error) {
		return rejectWithValue([], error.message);
	}
});
