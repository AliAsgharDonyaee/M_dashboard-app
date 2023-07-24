import React, { Suspense, useEffect } from "react";
import TodayWeather from "../../common/weatherPage/TodayWeather";
import TommorowWeather from "../../common/weatherPage/TommorowWeather";
import TodayDetails from "../../common/weatherPage/TodayDetails";
import { useDispatch, useSelector } from "react-redux";
import LazyLoadingMain from "../../common/weatherPage/LazyLoadingMain";
import Notiflix from "notiflix";
import { convertCelsius } from "../../utils/functions";
import getWeather from "../../redux/features/weather/thunk";

function WeatherPage() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getWeather());
		document.title = "Welcome to weather page | weather datas";
	}, []);

	const { loading, data, error } = useSelector((state) => state.weathersData);

	if (error) Notiflix.Notify.failure(error);

	return (
		<section className='mt-4 mb-24 lg:mb-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 2xl:grid-cols-8 gap-4 mx-auto container'>
			<article className='w-full h-auto col-span-1 md:col-span-3 lg:col-span-6 2xl:col-span-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4'>
				{loading ? (
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
									temp={convertCelsius(data?.list?.slice(0, 7)[0].main.temp)}
									text={data?.list?.slice(0, 7)[0].weather[0].description}
									icon={data?.list?.slice(0, 7)[0].weather[0].icon}
									pressure={data?.list?.slice(0, 7)[0].main.pressure}
									speed={data?.list?.slice(0, 7)[0].wind.speed}
									deg={data?.list?.slice(0, 7)[0].wind.deg}
								/>
							</Suspense>
						</div>
						<div className='p-4 md:px-6 xl:px-8 w-full h-96 rounded-xl shadow-lg dark:shadow-md shadow-purple-500 dark:shadow-violet-800 bg-weather-2 bg-cover col-span-1 md:col-span-3 grid grid-rows-6 grid-cols-1 gap-y-2'>
							<Suspense>
								<TommorowWeather
									temp={convertCelsius(data?.list?.slice(0, 7)[1].main.temp)}
									text={data?.list?.slice(0, 7)[1].weather[0].description}
									icon={data?.list?.slice(0, 7)[1].weather[0].icon}
									pressure={data?.list?.slice(0, 7)[1].main.pressure}
									speed={data?.list?.slice(0, 7)[1].wind.speed}
									deg={data?.list?.slice(0, 7)[1].wind.deg}
								/>
							</Suspense>
						</div>
					</>
				)}
			</article>
			<article className='col-span-1 md:col-span-3 lg:col-span-6 2xl:col-span-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8'>
				<Suspense>
					<TodayDetails data={data?.list?.slice(3, 11)} />
				</Suspense>
			</article>
		</section>
	);
}

export default WeatherPage;
