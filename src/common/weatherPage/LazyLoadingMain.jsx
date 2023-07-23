import React from "react";
import Header from "../../components/weatherPage/lazyLoading/Header";
import Degre from "../../components/weatherPage/lazyLoading/Degre";
import Details from "../../components/weatherPage/lazyLoading/Details";

function LazyLoadingMain() {
	return (
		<>
			<Header />
			<Degre />
			<Details />
		</>
	);
}

export default LazyLoadingMain;
