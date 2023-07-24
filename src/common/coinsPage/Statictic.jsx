import BoxStatictic from "../../components/coinsPage/BoxStatictic.jsx";
import { useDispatch, useSelector } from "react-redux";
import { TbActivityHeartbeat } from "react-icons/tb";
import LazyLoading from "./LazyLoading.jsx";
import Notiflix from "notiflix";
import { oneCoin } from "../../redux/features/crypto/coinsSlice.js";

function Statictic() {
	const { coins, loading, error } = useSelector((state) => state.coinsData);
	const dispatch = useDispatch();

	if (error) Notiflix.Notify.failure(error);

	return (
		<article
			className={`mb-6 w-full h-auto grid ${
				loading ? " grid-rows-1" : "grid-rows-5 lg:grid-rows-3 xl:grid-rows-2 md:grid-rows-4"
			} grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4`}
		>
			{loading ? (
				<LazyLoading />
			) : (
				coins?.data.slice(0, 10).map((i) => {
					const name = Object.keys(i.data)[0];
					return (
						<button key={name.id} onClick={() => dispatch(oneCoin(i))}>
							<BoxStatictic
								Icon={name.id}
								symbol={name}
								price={name.quote.USD.price.toString().slice(0, 8)}
								PIcon={TbActivityHeartbeat}
								changes={2.59}
							/>
						</button>
					);
				})
			)}
		</article>
	);
}

export default Statictic;
