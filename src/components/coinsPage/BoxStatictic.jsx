function BoxStatictic({ Icon, symbol, PIcon, changes, price }) {
	return (
		<div className='shadow-md rounded-xl border dark:border-slate-700 bg-white dark:bg-slate-700 p-1 px-2 w-full h-20 fsc'>
			<div className={`rounded-full bg-amber-500 dark:bg-yellow-500 mr-2 w-12 h-12 fcc`}>
				<Icon className='icon text-white rotate-45' />
			</div>
			<div className='mx-auto w-3/5 2xl:w-3/4 h-full fbc'>
				<div className="text-start">
					<h3 className='text-slate-800 dark:text-white'>{symbol}</h3>
					<p className='text-slate-500 dark:text-slate-400'>$ {price}</p>
				</div>
				<div className='h-full fac flex-col'>
					<PIcon className='icon text-gray-500' />
					<p className='text-green-500'>% {changes}</p>
				</div>
			</div>
		</div>
	);
}

export default BoxStatictic;
