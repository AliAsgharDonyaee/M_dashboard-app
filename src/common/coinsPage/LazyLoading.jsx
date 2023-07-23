function LazyLoading() {
	return (
		<div className='shadow-md rounded-xl border dark:border-slate-700 bg-white dark:bg-slate-700 p-1 px-2 w-full h-20 fsc'>
			<div className='animate-pulse rounded-full bg-gray-200 dark:bg-slate-500 mr-2 w-12 h-12'></div>
			<div className='animate-pulse mx-auto w-3/5 2xl:w-3/4 h-full fbc'>
				<div className='animate-pulse '>
					<div className='mb-3 bg-gray-200 dark:bg-slate-500 w-16 h-2 rounded-xl'></div>
					<div className='bg-slate-200 dark:bg-slate-500 w-16 h-2 rounded-xl'></div>
				</div>
				<div className='animate-pulse h-full fac flex-col'>
					<div className='w-4 h-4 rounded-full bg-gray-200 dark:bg-slate-500'></div>
					<div className='w-4 h-4 rounded-full bg-gray-200 dark:bg-slate-500'></div>
				</div>
			</div>
		</div>
	);
}

export default LazyLoading;
