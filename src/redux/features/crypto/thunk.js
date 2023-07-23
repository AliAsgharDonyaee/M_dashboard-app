import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../../services/http";

export const getAsyncCoins = createAsyncThunk("coins/getAsyncCoins", async (_, { rejectWithValue }) => {
	try {
		const res = await http.get(
			"https://rest.coinapi.io/v1/assets?filter_asset_id=BTC;ETH;ETC;XRP;SOL;SHIB;ADA;MATIC;EOS;LTC;AVAX;BAT;BCH;BNB;CHZ;FIL;FLUX;LDO;TRX;WAVES&symbol_type=FUTURES",
			{
				headers: {
					"X-CoinAPI-Key": "A69AEF7A-472D-45E3-851C-F342AA5C7BEF",
				},
			},
		);
		return res.data;
	} catch (error) {
		return rejectWithValue([], error.message);
	}
});
