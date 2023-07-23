import { TbTemperatureCelsius } from "react-icons/tb";

function Degre({ temp, text }) {
	return (
		<div className=' col-span-1 row-span-3'>
			<div className='w-full h-full fcs flex-col'>
				<div className='flex text-6xl text-white'>
					{temp}
					<TbTemperatureCelsius />
				</div>
				<p className='text-white text-lg'>{text}</p>
			</div>
		</div>
	);
}

export default Degre;
