import { TbActivityHeartbeat } from "react-icons/tb";
import Notiflix from "notiflix";
import { toChange } from "../../utils/functions";
import { useSelector } from "react-redux";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";
import Show from "../../components/coinsPage/Show";

function DetailsOneCoin() {
	const { onceData, error, loading } = useSelector((state) => state.coinsData);
	const name = onceData[0].datas;

	if (error) Notiflix.Notify.failure(error);

	let x = toChange(name.OPEN24HOUR, name.HIGH24HOUR, name.LOW24HOUR, name.PRICE);

	return (
		<article className='w-full h-auto grid grid-cols-1 grid-rows-1'>
			{loading ? (
				<div className='shadow-lg rounded-xl border dark:border-slate-700 bg-white dark:bg-slate-700 p-2 w-full h-96 md:h-80 lg:h-64 fcc'>
					<div className='animate-pulse w-28 h-2 rounded-xl bg-gray-200 dark:bg-slate-500'></div>
				</div>
			) : onceData[0].data === false ? (
				<div className='shadow-lg rounded-xl border dark:border-slate-700 bg-white dark:bg-slate-700 p-2 w-full h-96 md:h-80 lg:h-64 fcc'>
					<p className='text-lg text-slate-800 dark:text-slate-200'>please chose a coin from up</p>
				</div>
			) : (
				<div className='shadow-lg rounded-xl border dark:border-slate-700 bg-white dark:bg-slate-700 p-2 w-full h-96 md:h-80 lg:h-52 xl:h-64 grid grid-cols-2 lg:grid-cols-6 grid-rows-2 lg:grid-rows-1'>
					<div className='lg:col-span-2'>
						<div className='w-full h-1/2 fcc'>
							<div className='rounded-full bg-gray-600 dark:bg-slate-600  mr-2 w-20 h-20 fcc'>
								<img
									src={`https://www.cryptocompare.com/media${name.IMAGEURL}`}
									alt='coin img'
									className='icon'
								/>

								<img
									src={`https://www.cryptocompare.com/media${name.IMAGEURL}`}
									alt='coin img'
									className='icon'
								/>
							</div>
						</div>
						<div className='w-full h-1/2 flex fcc flex-col'>
							<h1 className='text-slate-800 dark:text-white text-2xl'>{name.FROMSYMBOL}</h1>
							<p className='text-slate-500 dark:text-slate-400 text-lg'>{name.FROMSYMBOL} / usd</p>
						</div>
					</div>
					<div className='lg:col-span-1'>
						<div className='w-full h-full'>
							<div className='w-full h-1/2 fcc flex-col'>
								<h1 className='text-slate-800 dark:text-white text-xl'>price so far</h1>
								<p className='text-slate-500 dark:text-slate-400 text-lg'>$ {name.PRICE}</p>
							</div>
							<div className='mx-auto w-full md:w-1/2 lg:w-full h-1/2 fevc'>
								{x < -1 ? (
									<FaArrowTrendDown className='icon text-red-500 dark:text-rose-500' />
								) : x >= -1 && x <= 1 ? (
									<TbActivityHeartbeat className='icon text-slate-500 dark:text-gray-500' />
								) : (
									<FaArrowTrendUp className='icon text-green-500 dark:text-lime-500' />
								)}
								<p
									className={`${
										x < -1
											? "text-red-500 dark:text-rose-500"
											: x >= -1 && x <= 1
											? "text-slate-500 dark:text-gray-500"
											: "text-green-500 dark:text-lime-500"
									}`}
								>
									{x}
								</p>
							</div>
						</div>
					</div>
					<div className='p-2 col-span-2 lg:col-span-3 row-span-1 grid grid-cols-2 fcc gap-2 text-slate-800 dark:text-white text-center'>
						<Show text='Volume 1hr-usd' data={name.VOLUMEHOUR} />
						<Show text='Volume 24hr-usd' data={name.VOLUME24HOUR} />
						<Show text='Volume 1day-usd' data={name.VOLUMEDAY} />
						<Show text='Open latst 24hr-usd' data={name.OPEN24HOUR} />
						<Show text='High latest 24hr-usd' data={name.HIGH24HOUR} />
						<Show text='Low latest 24hr-usd' data={name.LOW24HOUR} />
					</div>
				</div>
			)}
		</article>
	);
}

export default DetailsOneCoin;
