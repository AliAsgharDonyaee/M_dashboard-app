function LazyLoadingDetails() {
	return (
		<div className='shadow-md rounded-xl border dark:border-slate-700 bg-white dark:bg-slate-700 p-1 px-2 col-span-1 lg:col-span-4 xl:col-span-2 row-span-1 fbc h-24'>
			<div className='fbc'>
				<div className='animate-pulse mr-3 w-14 h-14 rounded-full bg-gray-200 dark:bg-slate-500'></div>
				<div>
					<div className='w-28 mb-2 h-2 rounded-lg bg-gray-200 dark:bg-slate-500 '></div>
					<div className='w-20 h-2 rounded-lg bg-gray-200 dark:bg-slate-500 '></div>
				</div>
			</div>
			<div className='fevc flex-col w-16 h-full font-bold text-slate-800 dark:text-white'>
				<div className='animate-pulse mr-3 w-5 h-5 rounded-full bg-gray-200 dark:bg-slate-500'></div>
				<div className='animate-pulse mr-3 w-5 h-5 rounded-full bg-gray-200 dark:bg-slate-500'></div>
				<div className='animate-pulse mr-3 w-5 h-5 rounded-full bg-gray-200 dark:bg-slate-500'></div>
			</div>
			<div className='fevc flex-col w-12 h-full font-bold text-slate-800 dark:text-white'>
				<div className='animate-pulse mr-3 w-5 h-5 rounded-full bg-gray-200 dark:bg-slate-500'></div>
				<div className='animate-pulse mr-3 w-5 h-5 rounded-full bg-gray-200 dark:bg-slate-500'></div>
				<div className='animate-pulse mr-3 w-5 h-5 rounded-full bg-gray-200 dark:bg-slate-500'></div>
			</div>
		</div>
	);
}

export default LazyLoadingDetails;
