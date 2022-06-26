import React, { useState } from "react";
import Navigation from "../Navigation";
import About from "../pages/About";
import Portfolio from "../pages/Portfolio";
import Resume from "../pages/Resume";
import Contact from "../pages/Contact";

export default function PageRender() {
	const [currentPage, setCurrentPage] = useState("Home");

	const renderPage = () => {
		if (currentPage === "Portfolio") {
			return <Portfolio />;
		}
		if (currentPage === "Resume") {
			return <Resume />;
		}
		if (currentPage === "Contact") {
			return <Contact />;
		}
		// if (currentPage === "About") {
		return <About />;
		// }
	};

	const handlePageChange = (page) => setCurrentPage(page);

	return (
		<div>
			<Navigation
				currentPage={currentPage}
				handlePageChange={handlePageChange}
			/>
			{renderPage()}
		</div>
	);
}
