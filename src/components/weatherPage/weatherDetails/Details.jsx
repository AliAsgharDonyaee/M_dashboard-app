import { BsArrowsCollapse, BsSpeedometer2, BsArrowUp } from "react-icons/bs";

function Details({ color1, color2, color3, pressure, speed, deg }) {
	let x = deg;
	const rotate = `rotate-[${x}deg]`;
	return (
		<div className=' col-span-1 row-span-2 grid grid-cols-3 grid-rows-1 gap-x-2 text-white'>
			<div className={`${color1} rounded-xl fevc flex-col`}>
				<p className='tracking-wide text-white/80 md:text-base fcc'>
					pressure <BsArrowsCollapse className='icon ml-2 ' />
				</p>
				<p className='text-2xl xl:text-2xl'>
					{pressure} <span className='text-sm'>PSI</span>
				</p>
			</div>
			<div className={`${color2} rounded-xl fevc flex-col`}>
				<p className='tracking-wide text-white/80 md:text-base fcc'>
					speed <BsSpeedometer2 className='icon ml-2 ' />
				</p>
				<p className='text-2xl xl:text-2xl'>
					{speed} <span className='text-sm'>km/h</span>
				</p>
			</div>
			<div className={`${color3} rounded-xl fevc flex-col`}>
				<p className='tracking-wide text-white/80 md:text-base fcc'>
					speed <BsArrowUp className={`icon ml-2 relative ${rotate}`} />
				</p>
				<p className='text-2xl xl:text-2xl'>
					{deg} <span className='text-sm'>deg</span>
				</p>
			</div>
		</div>
	);
}

export default Details;
