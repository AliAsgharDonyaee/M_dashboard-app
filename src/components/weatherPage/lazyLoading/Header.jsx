function Header() {
	return (
		<header className='col-span-1 row-span-1 fsc'>
			<div className='animate-pulse mr-3 w-10 h-10 bg-gray-200 dark:bg-slate-500 rounded-full fcc'></div>
			<div className='w-auto h-auto'>
				<div className='animate-pulse bg-gray-200 dark:bg-slate-500 w-28 h-2 mb-2 rounded-lg'></div>
				<div className='animate-pulse bg-gray-200 dark:bg-slate-500 w-20 h-2 rounded-lg'></div>
			</div>
		</header>
	);
}

export default Header;
