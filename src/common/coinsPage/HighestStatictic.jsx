import BoxStatictic from "../../components/coinsPage/BoxStatictic.jsx";
import { useDispatch } from "react-redux";
import LazyLoading from "./LazyLoading.jsx";
import Notiflix from "notiflix";
import { oneCoin } from "../../redux/features/crypto/coinsSlice.js";
import { toChange } from "../../utils/functions.js";

function HighestStatictic({ y, loading, error }) {
	const dispatch = useDispatch();

	if (error) Notiflix.Notify.failure(error.message);

	return (
		<article
			className={`mb-6 w-full h-auto grid ${
				loading ? " grid-rows-1" : "grid-rows-5 lg:grid-rows-3 xl:grid-rows-2 md:grid-rows-4"
			} grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4`}
		>
			{loading ? (
				<LazyLoading />
			) : (
				y
					?.slice(0, 10)
					.sort((a, b) => {
						return b[0].PRICE - a[0].PRICE;
					})
					.map((i,index) => {
						if (i) {
							return (
								<button key={index} onClick={() => dispatch(oneCoin(i[0]))}>
									<BoxStatictic
										Icon={i[0].IMAGEURL}
										symbol={i[0].FROMSYMBOL}
										price={i[0].PRICE}
										changes={toChange(i[0].OPEN24HOUR, i[0].HIGH24HOUR, i[0].LOW24HOUR, i[0].PRICE)}
									/>
								</button>
							);
						}
					})
			)}
		</article>
	);
}

export default HighestStatictic;
