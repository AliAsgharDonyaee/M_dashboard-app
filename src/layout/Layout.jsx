import React from "react";
import Header from "./Header";
import MenuPhone from "./MenuPhone";

function Layout({ children }) {
	return (
		<section className='w-full h-auto'>
			<Header />
			<MenuPhone />
			{children}
		</section>
	);
}

export default Layout;
