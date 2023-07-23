import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/home/index.jsx";
import ChartPage from "../pages/chart/index.jsx";
import MapPage from "../pages/map/index.jsx";
import CoinsPage from "../pages/coins/index.jsx";
import WeatherPage from "../pages/weather/index.jsx";
import NotFoundPage from "../pages/404/index.jsx";

function Root() {
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/weather' element={<WeatherPage />} />
			<Route path='/chart' element={<ChartPage />} />
			<Route path='/map' element={<MapPage />} />
			<Route path='/coins' element={<CoinsPage />} />
			<Route path='/*' element={<NotFoundPage />} />
		</Routes>
	);
}

export default Root;
