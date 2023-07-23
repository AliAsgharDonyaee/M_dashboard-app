import React from "react";
import { useSelector } from "react-redux";
import { Area, AreaChart, CartesianGrid, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

function Chart() {
	const { userRepos } = useSelector((state) => state.githubDatas);

	return (
		<div className='w-full h-96 dark:bg-slate-700 rounded-xl border dark:border-slate-700 shadow-lg fcc'>
			<ResponsiveContainer width='100%' height='80%'>
				<AreaChart data={userRepos} margin={{ top: 0, right: 20, left: 20, bottom: 0 }}>
					<XAxis label='number repos' />
					<YAxis dataKey='size' />
					<CartesianGrid strokeDasharray='3 3' />
					<ReferenceLine x='9' stroke='res' label='king project' />
					<Tooltip />
					<Area type='monotone' dataKey='size' stroke='#8884d8' fill='#8884d8' />
					<Area type='monotone' dataKey='updated_at' stroke='#8884d8' fill='#8884d8' />
				</AreaChart>
			</ResponsiveContainer>
		</div>
	);
}

export default Chart;
