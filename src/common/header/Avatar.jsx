import { useEffect, useState } from "react";

function Avatar({ img, name }) {
	const [detecting, setDetecting] = useState(true);

	useEffect(() => {
		window.addEventListener("online", setDetecting(true));
		window.addEventListener("offline", setDetecting(false));
	}, []);

	return (
		<div className='w-1/2 h-full'>
			{!name && !img ? (
				<div className='fnc w-full h-full animate-pulse'>
					<div className='w-14 h-14 ring-2 ring-gray-200 dark:ring-slate-500 rounded-full bg-gray-200 dark:bg-slate-500 fcc overflow-hidden'></div>
					<span className='relative top-6 right-4 flex h-4 w-4'>
						<span className='absolute inline-flex h-full w-full rounded-full ring-2 ring-white dark:ring-slate-500 bg-gray-200 dark:bg-slate-500'></span>
					</span>
					<div className='w-auto h-full fcn flex-col'>
						<div className='mb-3 bg-gray-200 dark:bg-slate-500 dark:text-white w-28 h-3 rounded-xl'></div>
						<div className='bg-slate-200 dark:bg-slate-500 w-16 h-3 rounded-xl'></div>
					</div>
				</div>
			) : (
				<div className=' fnc w-full h-full z-30'>
					<div className='w-14 h-14 ring-2 ring-violet-700 dark:ring-violet-500 rounded-full bg-gray-200 dark:bg-slate-500 fcc overflow-hidden'>
						<img src={img} alt='user img' className='w-full h-full object-cover' />
					</div>
					<span className='relative top-6 right-4 flex h-4 w-4'>
						<span
							className={`${
								!detecting && "animate-ping bg-green-400"
							} absolute inline-flex h-full w-full rounded-full opacity-75`}
						></span>
						<span
							className={` ${
								!detecting ? "bg-green-500" : " bg-gray-500"
							} relative inline-flex rounded-full h-4 w-4 fcc`}
						></span>
					</span>
					<div className='w-auto h-full fcn flex-col'>
						<h3 className='my-1 text-slate-800 dark:text-white'>Hi</h3>
						<p className='text-slate-500 dark:text-slate-400'>How are you today?</p>
					</div>
				</div>
			)}
		</div>
	);
}

export default Avatar;
