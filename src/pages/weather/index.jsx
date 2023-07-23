import React, { Suspense, useEffect } from "react";
import TodayWeather from "../../common/weatherPage/TodayWeather";
import TommorowWeather from "../../common/weatherPage/TommorowWeather";
import TodayDetails from "../../common/weatherPage/TodayDetails";
import { useSelector } from "react-redux";
import LazyLoadingMain from "../../common/weatherPage/LazyLoadingMain";
import Notiflix from "notiflix";
import { convertCelsius } from "../../utils/functions";

function WeatherPage() {
	const { loading, data, error } = useSelector((state) => state.weathersData);

	useEffect(() => {
		document.title = "Welcome to weather page | weather datas";
	}, []);

	Notiflix.Notify.warning("please run an vpn because not run api");
	if (error) Notiflix.Notify.failure(error);

	return (
		<section className='mt-4 mb-24 lg:mb-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 2xl:grid-cols-8 gap-4 mx-auto container'>
			<article className='w-full h-auto col-span-1 md:col-span-3 lg:col-span-6 2xl:col-span-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4'>
				{!data ? (
					<>
						<div className='p-3 w-full h-96 rounded-xl shadow-lg dark:shadow-md border dark:border-slate-700 bg-white dark:bg-slate-700 col-span-1 md:col-span-3 grid grid-rows-6 grid-cols-1 gap-y-2'>
							<LazyLoadingMain />
						</div>
						<div className='p-3 w-full h-96 rounded-xl shadow-lg dark:shadow-md border dark:border-slate-700 bg-white dark:bg-slate-700 col-span-1 md:col-span-3 grid grid-rows-6 grid-cols-1 gap-y-2'>
							<LazyLoadingMain />
						</div>
					</>
				) : (
					<>
						<div className='p-4 md:px-6 xl:px-8 w-full h-96 rounded-xl shadow-lg dark:shadow-md shadow-purple-500 dark:shadow-purple-800 bg-weather-1 bg-cover col-span-1 md:col-span-3 grid grid-rows-6 grid-cols-1 gap-y-2'>
							<Suspense>
								<TodayWeather
								// temp={convertCelsius(data.list[0].temp.day)}
								// text={data.list[0].weather.description}
								// icon={data.list[0].weather.icon}
								// pressure={data.list[0].pressure}
								// speed={data.list[0].speed}
								// deg={data.list[0].deg}
								/>
							</Suspense>
						</div>
						<div className='p-4 md:px-6 xl:px-8 w-full h-96 rounded-xl shadow-lg dark:shadow-md shadow-purple-500 dark:shadow-violet-800 bg-weather-2 bg-cover col-span-1 md:col-span-3 grid grid-rows-6 grid-cols-1 gap-y-2'>
							<Suspense>
								<TommorowWeather
								// temp={convertCelsius(data.list[1].temp.day)}
								// text={data.list[1].weather.description}
								// icon={data.list[1].weather.icon}
								// pressure={data.list[1].pressure}
								// speed={data.list[1].speed}
								// deg={data.list[1].deg}
								/>
							</Suspense>
						</div>
					</>
				)}
			</article>
			<article className='col-span-1 md:col-span-3 lg:col-span-6 2xl:col-span-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8'>
				<Suspense>
					<TodayDetails
					// data={data.list.slice(3, 7)}
					// todayTime={todayTime}
					/>
				</Suspense>
			</article>
		</section>
	);
}

export default WeatherPage;
