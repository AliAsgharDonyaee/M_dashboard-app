import { useEffect } from "react";
import NotFound from "../../assets/A040Lxr.png";

function NotFoundPage() {
	useEffect(() => {
		document.title = "Page Not Found 🤔";
	}, []);
	return (
		<div className='w-full min-h-screen fcc flex-col'>
			<img src={NotFound} alt='img 404' className='w-1/2' />
			<h2 className='mt-4 text-slate-800 dark:text-white'>Page Not Found</h2>
		</div>
	);
}

export default NotFoundPage;
