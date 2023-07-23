import React, { Suspense } from "react";
import { useEffect } from "react";
import Statictic from "../../common/coinsPage/Statictic.jsx";
import { useDispatch } from "react-redux";
import { getAsyncCoins } from "../../redux/features/crypto/thunk.js";
import HighestStatictic from "../../common/coinsPage/HighestStatictic.jsx";
import LowestStatictic from "../../common/coinsPage/LowestStatictic.jsx";
import DetailsOneCoin from "../../common/coinsPage/DetailsOneCoin.jsx";

function CoinsPage() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAsyncCoins());
		document.title = "Welcome to coins page | crypto datas";
	}, []);

	return (
		<section className='mt-4 mb-24 lg:mb-4'>
			<article>
				<h2 className='mb-4 text-slate-800 dark:text-white'>most popular 🤩</h2>
				<Suspense>
					<Statictic />
				</Suspense>
			</article>
			<article>
				<h2 className='mb-4 text-slate-800 dark:text-white'>highest price 👍</h2>
				<Suspense>
					<HighestStatictic />
				</Suspense>
			</article>
			<article>
				<h2 className='mb-4 text-slate-800 dark:text-white'>lowest price 👌</h2>
				<Suspense>
					<LowestStatictic />
				</Suspense>
			</article>
			<article>
				<h2 className='mb-4 text-slate-800 dark:text-white'>most details 🤔</h2>
				<Suspense>
					<DetailsOneCoin />
				</Suspense>
			</article>
		</section>
	);
}

export default React.memo(CoinsPage);
