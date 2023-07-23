import { useSelector } from "react-redux";
import BoxStatictic from "../../components/homePage/BoxStatictic";
import { BiShapePolygon, BiGitBranch } from "react-icons/bi";
import { LuLanguages } from "react-icons/lu";
import { RxUpdate } from "react-icons/rx";
import BoxStaticticLong from "../../components/homePage/BoxStaticticLong";
import { convertB } from "../../utils/functions";
import LazyLoading from "../coinsPage/LazyLoading";
import Notiflix from "notiflix";

function ReposStatictic() {
	const { userRepos: repos, reposeCommit: reposCommit, error } = useSelector((state) => state.githubDatas);

	if (error) Notiflix.Notify.failure(error);

	return (
		<article className='mb-6 w-full h-auto grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 grid-rows-3 xl:grid-rows-1 md:grid-rows-2 gap-4 md:gap-2'>
			{!repos ? (
				<LazyLoading />
			) : (
				<>
					<BoxStatictic
						first={repos && repos?.length}
						second={"number of repos"}
						Icon={BiShapePolygon}
						bg='bg-violet-500'
						dark='bg-purple-500'
					/>
					<BoxStatictic
						first={reposCommit[0]?.commit.committer.name}
						second={"latest commiter"}
						Icon={BiGitBranch}
						bg='bg-green-500'
						dark='bg-green-500'
					/>
					<BoxStatictic
						first='javascript'
						second={"latest language repos"}
						Icon={LuLanguages}
						bg='bg-blue-500'
						dark='bg-sky-500'
					/>
					<BoxStatictic
						first={`${-convertB(reposCommit[0]?.commit.committer.date)} day`}
						second={"latest update"}
						Icon={RxUpdate}
						bg='bg-red-500'
						dark='bg-rose-500'
					/>
					<BoxStaticticLong
						first={reposCommit[0]?.commit.message}
						second={"latest comment"}
						Icon={RxUpdate}
						bg='bg-red-500'
						dark='bg-rose-500'
					/>
				</>
			)}
		</article>
	);
}

export default ReposStatictic;
