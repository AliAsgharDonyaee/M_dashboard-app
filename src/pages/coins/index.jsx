import React, { Suspense } from "react";
import { useEffect } from "react";
import Statictic from "../../common/coinsPage/Statictic.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getAsyncCoins } from "../../redux/features/crypto/thunk.js";
import HighestStatictic from "../../common/coinsPage/HighestStatictic.jsx";
import LowestStatictic from "../../common/coinsPage/LowestStatictic.jsx";
import DetailsOneCoin from "../../common/coinsPage/DetailsOneCoin.jsx";
import Notiflix from "notiflix";

function CoinsPage() {
	const dispatch = useDispatch();
	useEffect(() => {
		document.title = "Welcome to coins page | crypto datas";
		dispatch(getAsyncCoins());
	}, []);

	const { coins, loading, error } = useSelector((state) => state.coinsData);

	if (error) Notiflix.Notify.failure(error);

	return (
		<section className='mt-4 mb-24 lg:mb-4'>
			<article>
				<h2 className='mb-4 text-slate-800 dark:text-white'>most popular 🤩</h2>
				<Suspense>
					<Statictic y={coins} loading={loading} error={error} />
				</Suspense>
			</article>
			<article>
				<h2 className='mb-4 text-slate-800 dark:text-white'>highest price 👍</h2>
				<Suspense>
					<HighestStatictic y={coins} loading={loading} error={error} />
				</Suspense>
			</article>
			<article>
				<h2 className='mb-4 text-slate-800 dark:text-white'>lowest price 👌</h2>
				<Suspense>
					<LowestStatictic y={coins} loading={loading} error={error} />
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
