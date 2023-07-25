import moment from "moment";
import { convertCelsius, convertFirenhite } from "../../../utils/functions";

function Details({ data, i }) {
	const todayTime = moment(new Date().toISOString()).format("MMMM");
	let y = +moment(new Date().toISOString()).format("D");
	let x = i + 2;
	return (
		<div className='shadow-md rounded-xl border dark:border-slate-700 bg-white dark:bg-slate-700 p-1 px-2 col-span-1 lg:col-span-4 xl:col-span-2 row-span-1 fbc h-24'>
			<div className='fbc'>
				<div className='mr-3 w-14 h-14 rounded-full fcc'>
					<img
						src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
						className='animate-weather-run'
					/>
				</div>
				<div>
					<h3 className='text-slate-500 dark:text-slate-400 '>
						{todayTime}
						<span> </span>
						{y + x}
					</h3>
					<h3 className='text-slate-800 dark:text-white font-bold tracking-wide'>{data.weather[0].main}</h3>
				</div>
			</div>
			<div className='fevc flex-col w-16 h-full font-bold text-purple-500 dark:text-orange-300'>
				<p>~ {convertCelsius(data.main.temp_max)} &#8451;</p>
				<p>|</p>
				<p>~ {convertCelsius(data.main.temp_min)} &#8451;</p>
			</div>
			<div className='fevc flex-col w-16 h-full font-bold text-purple-500 dark:text-orange-300'>
				<p>~ {convertFirenhite(data.main.temp_max)} &#8457;</p>
				<p>|</p>
				<p>~ {convertFirenhite(data.main.temp_min)} &#8457;</p>
			</div>
		</div>
	);
}

export default Details;
