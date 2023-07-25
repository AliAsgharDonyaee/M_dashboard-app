import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAsyncCoins = createAsyncThunk("coins/getAsyncCoins", async (_, { rejectWithValue }) => {
	try {
		const res = await axios.get(
			"https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,ETC,XRP,SOL,SHIB,ADA,MATIC,EOS,LTC,AVAX,BAT,BCH,BNB,CHZ,FIL,FLUX,LDO,TRX,WAVES&tsyms=USD",
			{
				headers: {
					authorization: `Apikey ${process.env.REACT_APP_CRYPTO_API_TOKEN}`,
				},
			},
		);
		const x = [res.data.RAW].map((i) => Object.values(i))[0];
		const y = x.map((i) => Object.values(i));
		return y;
	} catch (error) {
		return rejectWithValue([], error.message);
	}
});
