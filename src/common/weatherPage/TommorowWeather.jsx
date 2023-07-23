import React from "react";
import Header from "../../components/weatherPage/weatherDetails/Header";
import Degre from "../../components/weatherPage/weatherDetails/Degre";
import Details from "../../components/weatherPage/weatherDetails/Details";

function TommorowWeather() {
	return (
		<>
			<Header text='Tommorow' />
			<Degre temp='22' text='partly cloudy' />
			<Details color1='bg-fuchsia-900/80' color2='bg-rose-800/80' color3='bg-red-400/80' />
		</>
	);
}

export default TommorowWeather;
