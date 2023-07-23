import { RxDashboard } from "react-icons/rx";
import { TiWeatherCloudy } from "react-icons/ti";
import { TbChartCandle } from "react-icons/tb";
import { FiPieChart } from "react-icons/fi";
import { HiOutlineMap } from "react-icons/hi";
import { TbCoinBitcoin } from "react-icons/tb";

export const Item = [
	{ path: "/weather", Icon: TiWeatherCloudy },
	{ path: "/coins", Icon: TbCoinBitcoin },
	{ path: "/", Icon: RxDashboard },
	{ path: "/chart", Icon: FiPieChart },
	{ path: "/map", Icon: HiOutlineMap },
];

export const ItemLG = [
	{ path: "/", Icon: RxDashboard },
	{ path: "/coins", Icon: TbCoinBitcoin },
	{ path: "/weather", Icon: TiWeatherCloudy },
	{ path: "/chart", Icon: FiPieChart },
	{ path: "/map", Icon: HiOutlineMap },
];
