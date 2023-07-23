import moment from "moment";

export const convert = (user) => {
	const result = new Date(user?.updated_at).getTime() - new Date(user?.created_at).getTime();
	const x = moment.duration(result).asDays();
	return `${x}`.slice(0, 3);
};

export const convertB = (data) => {
	const result = new Date(data).getTime() - new Date().getTime();
	const x = moment.duration(result).asDays();
	return `${x}`.slice(0, 3);
};

export const toCurrency = (n) => {
	let USDollar = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
	});
	return USDollar.format(n);
};

export const convertCelsius = (n) => {
	let x = n - 273.15;
	return x.toFixed(0);
};

export const convertFirenhite = (n) => {
	let x = ((n - 273.15) * 9) / 5 + 32;
	return x.toFixed(0);
};
