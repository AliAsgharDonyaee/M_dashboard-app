import { useEffect } from "react";
import Avatar from "../common/header/Avatar";
import { useDispatch, useSelector } from "react-redux";
import Notif from "../common/header/Notif.jsx";
import { getUserGithub } from "../redux/features/github/thunk";
import Notiflix from "notiflix";
import { useLocation } from "react-router-dom";

function Header() {
	const dispatch = useDispatch();
	const l = useLocation();

	useEffect(() => {
		dispatch(getUserGithub());
	}, []);

	const { user, error } = useSelector((state) => state.githubDatas);

	if (error) Notiflix.Notify.failure("can't get data");

	return (
		<header className='px-3 pt-2 w-full h-auto sticky top-0 z-30'>
			<div className='w-full h-full relative'>
				<nav
					className={`shadow-lg border dark:border-slate-700 rounded-2xl bg-cover ${
						l.pathname === "/"
							? "bg-header-light-g dark:bg-header-dark-g"
							: l.pathname === "/coins"
							? "bg-header-light-b dark:bg-header-dark-b"
							: l.pathname === "/weather"
							? "bg-header-light-w dark:bg-header-dark-w"
							: "bg-white dark:bg-slate-700"
					} p-2 pl-4 w-full h-20 fbc`}
				>
					<Avatar img={user?.avatar_url} name={user?.name} />
					<Notif name={user?.name} n={user?.notification} s={user?.notification} />
				</nav>
			</div>
		</header>
	);
}

export default Header;
