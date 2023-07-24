import { TbActivityHeartbeat } from "react-icons/tb";
import Notiflix from "notiflix";
import { toCurrency } from "../../utils/functions";
import { useSelector } from "react-redux";

function DetailsOneCoin() {
	const { onceData, error, loading } = useSelector((state) => state.coinsData);
	const name = Object.keys(onceData[0].datas)[0];

	if (error) Notiflix.Notify.failure(error.message);

	return (
		<article className='w-full h-auto grid grid-cols-1 grid-rows-1'>
			{loading ? (
				<div className='shadow-lg rounded-xl border dark:border-slate-700 bg-white dark:bg-slate-700 p-2 w-full h-96 md:h-80 lg:h-64 fcc'>
					<div className='animate-pulse w-28 h-2 rounded-xl bg-gray-200 dark:bg-slate-500'></div>
				</div>
			) : onceData[0].cond == false ? (
				<div className='shadow-lg rounded-xl border dark:border-slate-700 bg-white dark:bg-slate-700 p-2 w-full h-96 md:h-80 lg:h-64 fcc'>
					<p className='text-lg text-slate-800 dark:text-slate-200'>please chose a coin from up</p>
				</div>
			) : (
				<div className='shadow-lg rounded-xl border dark:border-slate-700 bg-white dark:bg-slate-700 p-2 w-full h-96 md:h-80 lg:h-64 grid grid-cols-2 lg:grid-cols-3 grid-rows-2 lg:grid-rows-1'>
					<div>
						<div className='w-full h-1/2 fcc'>
							<div className='rounded-full bg-amber-500 dark:bg-yellow-500 mr-2 w-20 h-20 fcc'>
								<img
									src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${name.id}.png`}
									className='icon rotate-45'
								/>
							</div>
						</div>
						<div className='w-full h-1/2 flex fcc flex-col'>
							<h1 className='text-slate-800 dark:text-white text-2xl'>{name.symbol}</h1>
							<p className='text-slate-500 dark:text-slate-400 text-lg'>{name.symbol} / usd</p>
						</div>
					</div>
					<div>
						<div className='w-full h-full'>
							<div className='w-full h-1/2 fcc flex-col'>
								<h1 className='text-slate-800 dark:text-white text-xl'>price so far</h1>
								<p className='text-slate-500 dark:text-slate-400 text-lg'>$ {name.quote.USD.price}</p>
							</div>
							<div className='w-full h-1/2 flex fac'>
								<p className='text-slate-800 dark:text-white'>2.59 %</p>
								<TbActivityHeartbeat className='text-slate-500 dark:text-slate-400 icon' />
							</div>
						</div>
					</div>
					<div className='p-2 col-span-2 lg:col-span-1 row-span-1 flex justify-center items-center lg:items-start flex-col gap-y-2 text-slate-800 dark:text-white'>
						<h2 className='mbtext-base 2xl:text-lg font-bold'>ranc : {toCurrency(name.cmc_rank)}</h2>
						<h2 className='my-2 mbtext-base 2xl:text-lg font-bold'>
							Volume 1hr usd : {toCurrency(name.quote.USD.market_cap)}
						</h2>
						<h2 className='text-base 2xl:text-lg'>
							Volume 1hr usd : {toCurrency(name.quote.USD.percent_change_1h)}
						</h2>
						<h2 className='text-base 2xl:text-lg'>
							Volume 1day usd : {toCurrency(name.quote.USD.percent_change_24h)}
						</h2>
						<h2 className='text-base 2xl:text-lg'>
							Volume 7d usd : {toCurrency(name.quote.USD.percent_change_7d)}
						</h2>
						<h2 className='text-base 2xl:text-lg'>
							Volume 30d usd : {toCurrency(name.quote.USD.percent_change_30d)}
						</h2>
						<h2 className='text-base 2xl:text-lg'>
							Symbols count : {toCurrency(name.quote.USD.market_cap_dominance)}
						</h2>
					</div>
				</div>
			)}
		</article>
	);
}

export default DetailsOneCoin;
