/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				"weather-1": "url('./assets/weather/1.jpg')",
				"weather-2": "url('./assets/weather/2.jpg')",
				"header-light-g": "url('./assets/header-img/MacBook Air - 2.png')",
				"header-dark-g": "url('./assets/header-img/MacBook Air - 3.png')",
				"header-light-b": "url('./assets/header-img/MacBook Air - 4.png')",
				"header-dark-b": "url('./assets/header-img/MacBook Air - 5.png')",
				"header-light-w": "url('./assets/header-img/MacBook Air - 6.png')",
				"header-dark-w": "url('./assets/header-img/MacBook Air - 7.png')",
			},
			animation: {
				"weather-run": "run 5s ease infinite",
			},
			keyframes: {
				run: {
					"0%": { transform: "translateX(0px)" },
					"30%": { transform: "translateX(8px)" },
					"60%": { transform: "translateX(-8px)" },
					"100%": { transform: "translateX(0px)" },
				},
			},
		},
	},
	plugins: [],
};
