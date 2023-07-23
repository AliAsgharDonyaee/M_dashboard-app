import { useSelector } from "react-redux";
import BoxStatictic from "../../components/homePage/BoxStatictic";
import { LuUser } from "react-icons/lu";
import { BiArrowToBottom, BiArrowToTop, BiArrowToRight } from "react-icons/bi";
import { RxUpdate } from "react-icons/rx";
import BoxStaticticLong from "../../components/homePage/BoxStaticticLong";
import BoxStaticticF from "../../components/homePage/BoxStaticticF";
import Notiflix from "notiflix";
import { convert } from "../../utils/functions";
import LazyLoading from "../coinsPage/LazyLoading";

function ProfileStatictic() {
	const { user, error } = useSelector((state) => state.githubDatas);

	if (error) Notiflix.Notify.failure(error);

	return (
		<article className='mb-6 w-full h-auto grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 grid-rows-3 xl:grid-rows-1 md:grid-rows-2 gap-4 md:gap-2'>
			{!user ? (
				<LazyLoading />
			) : (
				<>
					<BoxStatictic
						first={user.login}
						second={"my name :)"}
						Icon={LuUser}
						bg='bg-violet-500'
						dark='bg-purple-500'
					/>
					<BoxStatictic
						first={convert(user)}
						second={"days of activity"}
						Icon={RxUpdate}
						bg='bg-green-500'
						dark='bg-green-500'
					/>
					<BoxStaticticF
						data={user}
						first={user.following}
						second={"following"}
						Icon={BiArrowToBottom}
						bg='bg-blue-500'
						dark='bg-sky-500'
					/>
					<BoxStaticticF
						data={user}
						first={user.followers}
						second={"followers"}
						Icon={BiArrowToTop}
						bg='bg-red-500'
						dark='bg-rose-500'
					/>
					<BoxStaticticLong
						first={"bio"}
						second={user.bio}
						Icon={BiArrowToRight}
						bg='bg-orange-500'
						dark='bg-amber-500'
					/>
				</>
			)}
		</article>
	);
}

export default ProfileStatictic;
