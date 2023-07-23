function BoxStatictic({ first, second, Icon, bg, dark }) {
	return (
		<div className='shadow-md rounded-xl border dark:border-slate-700 bg-white dark:bg-slate-700 p-1 px-2 w-full h-20 fsc'>
			<div className={`rounded-full ${bg} dark:${dark} mr-2 w-12 h-12 fcc`}>
				<Icon className='icon text-white' />
			</div>
			<div>
				<h3 className='text-slate-800 dark:text-white'>{first}</h3>
				<p className='text-slate-500 dark:text-slate-400'>{second}</p>
			</div>
		</div>
	);
}

export default BoxStatictic;
