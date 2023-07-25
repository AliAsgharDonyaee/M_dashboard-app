import React from "react";
import { toCurrency } from "../../utils/functions";

function Show({ text, data }) {
	return (
		<div className='px-3 rounded-md w-auto h-10 border border-slate-500 fcc'>
			<p className='mbtext-base 2xl:text-lg'>
				{text} : {toCurrency(data)}
			</p>
		</div>
	);
}

export default Show;
