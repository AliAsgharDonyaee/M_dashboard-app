import http from "../../../services/http";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUserGithub = createAsyncThunk("user/getAsyncGithub", async (_, { rejectWithValue }) => {
	const d = [];
	try {
		const res = await http.get("/user", {
			headers: { Authorization: `Bearer ${`${process.env.REACT_APP_ACCESS_TOKEN_GITHUB}`}` },
		});
		d.push(res.data);
		const resp = await http.get("/user/repos", {
			headers: { Authorization: `Bearer ${`${process.env.REACT_APP_ACCESS_TOKEN_GITHUB}`}` },
		});
		d.push(resp.data);
		const respo = await http.get(`/repos/aliasghardevf/${d[1]?.slice(-1)[0].name}/commits`, {
			headers: { Authorization: `Bearer ${`${process.env.REACT_APP_ACCESS_TOKEN_GITHUB}`}` },
		});
		d.push(respo.data);
		return d;
	} catch (error) {
		return rejectWithValue([], error.message);
	}
});
