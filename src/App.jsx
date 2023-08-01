import { useEffect } from "react";
import "./App.css";
import Layout from "./layout/Layout";
import Sidebarr from "./layout/Sidebar.jsx";
import Root from "./routes/root.js";

const myEmojis = ["😀", "😊", "🤔", "😑", "🤩", "😗", "😝", "😜", "😛", "😉", "😁", "🥰", "😂", "🤑"];

let urlAnimation = () => {
	window.location.hash = myEmojis[Math.floor((Date.now() / 100) % myEmojis.length)];
	setTimeout(() => {
		urlAnimation();
	}, 1000);
};

function App() {
	useEffect(() => {
		let docTItle = document.title;
		window.addEventListener("blur", () => {
			document.title = "Pleaseeee Come Back to app 😭";
		});
		window.addEventListener("focus", () => {
			document.title = docTItle;
		});
		urlAnimation();
	}, []);

	return (
		<section className='App lg:pl-20 w-full h-auto flex dark:bg-slate-800'>
			<article className='hidden lg:block w-auto h-screen fixed left-0 top-0'>
				<Sidebarr />
			</article>
			<article className='mx-auto container'>
				<Layout>
					<div className='px-3 mt-3 w-full h-auto'>
						<Root />
					</div>
				</Layout>
			</article>
		</section>
	);
}

export default App;
