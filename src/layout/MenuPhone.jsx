import { Link, useLocation } from "react-router-dom";
import { Item } from "../data/Navlinks.js";

function MenuPhone() {
	const location = useLocation();
	return (
		<section className='lg:hidden px-3 w-full h-auto fixed bottom-2 left-0 z-20'>
			<div className=' mx-auto w-full md:w-1/2 h-full'>
				<ul className='shadow-lg border dark:border-slate-700 rounded-xl bg-white dark:bg-slate-700 p-2 w-full h-14 grid grid-cols-5 grid-rows-1 place-items-center'>
					{Item.map(({ path, Icon }, index) => (
						<Link to={path} key={index}>
							<div
								className={`rounded-xl w-12 h-12 fcc transition duration-300 relative  ${
									location.pathname === path
										? "bg-violet-700 dark:bg-purple-600 -translate-y-4 text-white -rotate-45 shadow-lg"
										: "bg-inherit text-gray-600 dark:text-white"
								}`}
							>
								<Icon
									className={`icon ${
										location.pathname === path
											? "text-white rotate-45"
											: "text-gray-600 dark:text-white rotate-0"
									}`}
								/>
							</div>
						</Link>
					))}
				</ul>
			</div>
		</section>
	);
}

export default MenuPhone;
