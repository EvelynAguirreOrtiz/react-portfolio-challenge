import React, { useState } from "react";
import Navigation from "../Navigation";
import About from "../About";
import Project from "../Project";
import Resume from "../Resume";
import Contact from "../Contact";
// import Header from "../Header";

export default function PageRender() {
	const [currentPage, setCurrentPage] = useState("Home");

	// TODO: Add a comment describing the functionality of this method
	const renderPage = () => {
		if (currentPage === "About") {
			return <About />;
		}
		if (currentPage === "Portfolio") {
			return <Project />;
		}
		if (currentPage === "Resume") {
			return <Resume />;
		}
		return <Contact />;
	};

	const handlePageChange = (page) => setCurrentPage(page);

	return (
		<div>
			{/* // TODO: Add a comment describing what we are passing as props */}
			<Navigation
				currentPage={currentPage}
				handlePageChange={handlePageChange}
			/>
			{/* // TODO: Add a comment explaining what is happening on the following line */}
			{renderPage()}
		</div>
	);
}
