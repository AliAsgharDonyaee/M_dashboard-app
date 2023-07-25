import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";
import { TbActivityHeartbeat } from "react-icons/tb";

function BoxStatictic({ Icon, symbol, changes, price }) {
	return (
		<div className='shadow-md rounded-xl border dark:border-slate-700 bg-white dark:bg-slate-700 p-1 px-2 w-full h-20 fsc'>
			<div className={`rounded-full bg-gray-600 dark:bg-slate-600 mr-2 w-12 h-12 fcc`}>
				<img src={`https://www.cryptocompare.com/media${Icon}`} alt="coin img" className='icon' />
			</div>
			<div className='mx-auto w-3/5 2xl:w-3/4 h-full fbc'>
				<div className='text-start'>
					<h3 className='text-slate-800 dark:text-white'>{symbol}</h3>
					<p className='text-slate-500 dark:text-slate-400'>$ {price}</p>
				</div>
				<div className='h-full fac flex-col'>
					{changes < -1 ? (
						<FaArrowTrendDown className='icon text-red-500 dark:text-rose-500' />
					) : changes >= -1 && changes <= 1 ? (
						<TbActivityHeartbeat className='icon text-slate-500 dark:text-gray-500' />
					) : (
						<FaArrowTrendUp className='icon text-green-500 dark:text-lime-500' />
					)}
					<p
						className={`${
							changes < -1
								? "text-red-500 dark:text-rose-500"
								: changes >= -1 && changes <= 1
								? "text-slate-500 dark:text-gray-500"
								: "text-green-500 dark:text-lime-500"
						}`}
					>
						{changes}
					</p>
				</div>
			</div>
		</div>
	);
}

export default BoxStatictic;
