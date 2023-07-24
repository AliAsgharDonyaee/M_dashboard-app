import Details from "../../components/weatherPage/MoreDetails/Details";
import LazyLoadingDetails from "./LazyLoadingDetails";

function TodayDetails({ data }) {
	return (
		<>
			<h2 className='mb-4 w-full h-auto text-slate-800 dark:text-white col-span-2 md:col-span-4 lg:col-span-8'>
				weather 4 days later
			</h2>
			<section className='col-span-1 md:col-span-2 lg:col-span-8 row-span-4 md:row-span-2 lg:row-span-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 grid-rows-8 md:grid-rows-2 lg:grid-rows-4 xl:grid-rows-1 gap-4'>
				{!data ? <LazyLoadingDetails /> : data.map((i, index) => <Details data={i} i={index} />)}
			</section>
		</>
	);
}

export default TodayDetails;
