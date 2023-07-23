import Chart from "../../common/homePage/Chart";
import ProfileStatictic from "../../common/homePage/ProfileStatictic";
import ReposStatictic from "../../common/homePage/ReposStatictic";
import { Suspense, useEffect } from "react";

function HomePage() {
	useEffect(() => {
		document.title = "Welcome to home page | github datas";
	}, []);
	return (
		<section className='mt-4 mb-20 lg:mb-4'>
			<article>
				<h2 className='mb-4 text-slate-800 dark:text-white'>user information</h2>
				<Suspense>
					<ProfileStatictic />
				</Suspense>
			</article>
			<article>
				<h2 className='mb-4 text-slate-800 dark:text-white'>repository information</h2>
				<Suspense>
					<ReposStatictic />
				</Suspense>
			</article>
			<article>
				<h2 className='mb-4 text-slate-800 dark:text-white'>more information</h2>
				<Suspense>
					<Chart />
				</Suspense>
			</article>
		</section>
	);
}

export default HomePage;
