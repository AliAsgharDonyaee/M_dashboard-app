import BoxStatictic from "../../components/coinsPage/BoxStatictic.jsx";
import { useDispatch, useSelector } from "react-redux";
import { TbActivityHeartbeat } from "react-icons/tb";
import LazyLoading from "./LazyLoading.jsx";
import Notiflix from "notiflix";
import { BiCoin } from "react-icons/bi";
import { oneCoin } from "../../redux/features/crypto/coinsSlice.js";

function HighestStatictic() {
	const { kings, loading, error } = useSelector((state) => state.coinsData);
	const dispatch = useDispatch();

	if (error) Notiflix.Notify.failure(error.message);

	return (
		<article
			className={`mb-6 w-full h-auto grid ${
				loading ? " grid-rows-1" : "grid-rows-5 lg:grid-rows-3 xl:grid-rows-2 md:grid-rows-4"
			} grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4`}
		>
			{loading  ? (
				<LazyLoading />
			) : (
				[...kings]
					.sort((a, b) => {
						return b.price_usd - a.price_usd;
					})
					.slice(0, 10)
					.map((i) => {
						return (
							<button key={i.data_symbols_count} onClick={() => dispatch(oneCoin(i))}>
								<BoxStatictic
									Icon={BiCoin}
									symbol={i.asset_id}
									price={i.price_usd.toString().slice(0, 8)}
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

export default HighestStatictic;
