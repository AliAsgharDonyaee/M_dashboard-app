import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAsyncCoins = createAsyncThunk("coins/getAsyncCoins", async (_, { rejectWithValue }) => {
	try {
		const res = await axios.get(
			"https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=BTC,ETH,ETC,XRP,SOL,SHIB,ADA,MATIC,EOS,LTC,AVAX,BAT,BCH,BNB,CHZ,FIL,FLUX,LDO,TRX,WAVES",
			{
				headers: {
					"X-CMC_PRO_API_KEY": `d214a215-cdca-4df4-8de7-4c90f2deb065`,
				},
			},
		);
		return res.data;
	} catch (error) {
		return rejectWithValue([], error.message);
	}
});
