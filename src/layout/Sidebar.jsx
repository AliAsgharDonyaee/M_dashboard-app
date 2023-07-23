import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/Vector 5.svg";
import { ItemLG } from "../data/Navlinks.js";
import { LuGithub, LuLinkedin } from "react-icons/lu";

function Sidebarr() {
	const location = useLocation();
	return (
		<Sidebar
			collapsed={true}
			className='w-full h-full bg-gray-100 border-r-2 dark:border-r-slate-700 dark:bg-slate-700'
			backgroundColor={() => console.log("theme")}
		>
			<div className='first w-full h-full flex flex-col justify-between'>
				<div className='second'>
					<div className='mb-4 w-full h-24 fcc'>
						<img src={Logo} alt='logo' className='w-3/4' />
					</div>
					<Menu>
						{ItemLG.map(({ path, Icon }, index) => (
							<MenuItem key={index} className=' fcc mb-2 w-full h-full hover:bg-transparent'>
								<Link to={path} key={index} className='w-full h-full hover:bg-transparent'>
									<div
										className={`rounded-full w-12 h-12 fcc transition duration-300 relative  ${
											location.pathname === path
												? "bg-violet-700 dark:bg-purple-600 text-white -rotate-45"
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
							</MenuItem>
						))}
					</Menu>
				</div>
				<div className='py-4 w-full h-24 fbc flex-col'>
					<Link to='https://github.com/AliasgharDevF' target='_blank'>
						<LuGithub className='icon text-slate-600 dark:text-white hover:text-violet-700 dark:hover:text-purple-600' />
					</Link>
					<Link to='https://www.linkedin.com/in/ali-donyaee-750a51260/' target='_blank'>
						<LuLinkedin className='icon text-slate-600 dark:text-white hover:text-violet-700 dark:hover:text-purple-600' />
					</Link>
				</div>
			</div>
		</Sidebar>
	);
}

export default Sidebarr;
