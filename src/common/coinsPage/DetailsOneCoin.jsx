import { TbActivityHeartbeat } from "react-icons/tb";
import { BiCoin } from "react-icons/bi";
import Notiflix, { Loading } from "notiflix";
import { toCurrency } from "../../utils/functions";
import { useSelector } from "react-redux";

function DetailsOneCoin() {
	const { onceData, error, loading } = useSelector((state) => state.coinsData);

	if (error) Notiflix.Notify.failure(error.message);

	return (
		<article className='w-full h-auto grid grid-cols-1 grid-rows-1'>
			{loading ? (
				<div className='shadow-lg rounded-xl border dark:border-slate-700 bg-white dark:bg-slate-700 p-2 w-full h-96 md:h-80 lg:h-64 fcc'>
					<div className='animate-pulse w-28 h-2 rounded-xl bg-gray-200 dark:bg-slate-500'></div>
				</div>
			) : onceData[0].data == false ? (
				<div className='shadow-lg rounded-xl border dark:border-slate-700 bg-white dark:bg-slate-700 p-2 w-full h-96 md:h-80 lg:h-64 fcc'>
					<p className='text-lg text-slate-800 dark:text-slate-200'>please chose a coin from up</p>
				</div>
			) : (
				<div className='shadow-lg rounded-xl border dark:border-slate-700 bg-white dark:bg-slate-700 p-2 w-full h-96 md:h-80 lg:h-64 grid grid-cols-2 lg:grid-cols-3 grid-rows-2 lg:grid-rows-1'>
					<div>
						<div className='w-full h-1/2 fcc'>
							<div className='rounded-full bg-amber-500 dark:bg-yellow-500 mr-2 w-20 h-20 fcc'>
								<BiCoin className='text-3xl text-white rotate-45' />
							</div>
						</div>
						<div className='w-full h-1/2 flex fcc flex-col'>
							<h1 className='text-slate-800 dark:text-white text-2xl'>{onceData[0].datas.name}</h1>
							<p className='text-slate-500 dark:text-slate-400 text-lg'>
								{onceData[0].datas.asset_id} / usd
							</p>
						</div>
					</div>
					<div>
						<div className='w-full h-full'>
							<div className='w-full h-1/2 fcc flex-col'>
								<h1 className='text-slate-800 dark:text-white text-xl'>price so far</h1>
								<p className='text-slate-500 dark:text-slate-400 text-lg'>
									$ {onceData[0].datas.price_usd}
								</p>
							</div>
							<div className='w-full h-1/2 flex fac'>
								<p className='text-slate-800 dark:text-white'>2.59 %</p>
								<TbActivityHeartbeat className='text-slate-500 dark:text-slate-400 icon' />
							</div>
						</div>
					</div>
					<div className='p-2 col-span-2 lg:col-span-1 row-span-1 flex justify-center items-center lg:items-start flex-col gap-y-2 text-slate-800 dark:text-white'>
						<h2 className='text-base 2xl:text-lg'>
							Volume 1hr usd : {toCurrency(onceData[0].datas.volume_1hrs_usd)}
						</h2>
						<h2 className='text-base 2xl:text-lg'>
							Volume 1day usd : {toCurrency(onceData[0].datas.volume_1day_usd)}
						</h2>
						<h2 className='text-base 2xl:text-lg'>
							Volume 1m usd : {toCurrency(onceData[0].datas.volume_1mth_usd)}
						</h2>
						<h2 className='text-base 2xl:text-lg'>
							Symbols count : {toCurrency(onceData[0].datas.data_symbols_count)}
						</h2>
						<h2 className='text-base 2xl:text-lg'>
							latest Orderbook : {onceData[0].datas.data_orderbook_end?.toString().slice(0, 10)}
						</h2>
					</div>
				</div>
			)}
		</article>
	);
}

export default DetailsOneCoin;
