function Header({ text, icon }) {
	return (
		<header className='col-span-1 row-span-1 fsc'>
			<div className='mr-3 w-12 h-12 border-2 border-white rounded-full fcc'>
				<img src={`http://openweathermap.org/img/w/${icon}.png`} />
			</div>
			<div className='w-auto h-auto'>
				<p className='text-white text-lg'>{text} weather</p>
				<p className='text-slate-100 text-sm'>What's the weather</p>
			</div>
		</header>
	);
}

export default Header;
