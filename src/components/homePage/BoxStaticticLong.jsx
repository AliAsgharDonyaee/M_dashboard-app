function BoxStaticticLong({ first, second, Icon, bg, dark }) {
	return (
		<div className=' shadow-md rounded-xl bg-white border dark:border-slate-700  dark:bg-slate-700 p-1 px-2 w-full h-20 col-span-2 xl:col-span-2 md:col-span-4 xl:row-span-1 row-span-1 fsc'>
			<div className={`rounded-full ${bg} dark:${dark} mr-2 w-12 h-12 fcc`}>
				<Icon className='icon text-white' />
			</div>
			<div className='xl:mx-auto xl:w-[85%]'>
				<h3 className='text-slate-800 dark:text-white'>{first}</h3>
				<p className='text-slate-500 dark:text-slate-400 md:hidden'>{second?.slice(0, 57)}</p>
				<p className='text-slate-500 dark:text-slate-400 hidden md:block lg:hidden'>{second?.slice(0, 116)}</p>
				<p className='text-slate-500 dark:text-slate-400 hidden lg:block'>{second}</p>
			</div>
		</div>
	);
}

export default BoxStaticticLong;
