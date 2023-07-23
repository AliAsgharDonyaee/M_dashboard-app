import { MdOutlineNotificationsActive, MdOutlineTextsms } from "react-icons/md";
import UseDark from "../../hooks/userDark.jsx";
import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

function Notif({ name, n, s }) {
	const [colorTheme, setTheme] = UseDark();
	const [darkSide, setDarkSide] = useState(colorTheme === "light" ? true : false);

	return (
		<div
			dir='rtl'
			className='w-1/2 2xl:w-1/3 h-full grid grid-cols-5 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 grid-rows-1 place-items-center'
		>
			{!name ? (
				<>
					<span className='animate-pulse relative flex h-9 xl:h-12 w-9 xl:w-12 fcc'>
						<span className='h-5 w-5 rounded-full bg-gray-200 dark:bg-slate-500'></span>
					</span>
					<span className='animate-pulse relative flex h-9 xl:h-12 w-9 xl:w-12 fcc'>
						<span className='h-5 w-5 rounded-full bg-gray-200 dark:bg-slate-500'></span>
					</span>
					<span className='animate-pulse relative flex h-9 xl:h-12 w-9 xl:w-12 fcc'>
						<span className='h-5 w-5 rounded-full bg-gray-200 dark:bg-slate-500'></span>
					</span>
				</>
			) : (
				<>
					<span className='relative flex h-9 xl:h-12 w-9 xl:w-12 fcc cursor-pointer z-30'>
						<span
							className={`${
								n > 0 && " animate-ping bg-red-500 dark:bg-red-400"
							} absolute inline-flex h-5 w-5 rounded-full opacity-75`}
						></span>
						<span className='relative inline-flex rounded-full h-full w-full p-[8px] fcc'>
							<MdOutlineNotificationsActive
								className={`icon ${n > 0 ? "text-red-500" : "text-gray-500 "} dark:text-white`}
							/>
						</span>
					</span>
					<span className='relative flex h-9 xl:h-12 w-9 xl:w-12 fcc cursor-pointer'>
						<span
							className={`${
								s > 0 && " animate-ping bg-blue-500 dark:bg-sky-500"
							} absolute inline-flex h-5 w-5 rounded-full opacity-75`}
						></span>
						<span className='relative inline-flex rounded-full h-full w-full p-[8px] fcc'>
							<MdOutlineTextsms
								className={`icon ${n > 0 ? "text-blue-600" : "text-gray-500"} dark:text-white`}
							/>
						</span>
					</span>
					<DarkModeSwitch
						checked={darkSide}
						onChange={(checked) => {
							setTheme(colorTheme);
							setDarkSide(checked);
						}}
						sunColor='rgb(107 114 128)'
						moonColor='#ffffff'
						size={20}
					/>
				</>
			)}
		</div>
	);
}

export default Notif;
