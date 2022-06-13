import React from "react";
import Nav from "./components/Navigation";
import About from "./components/About";
// import Project from "./components/Project";

function App() {
	return (
		<div>
			<Nav></Nav>
			<main>
				<About></About>
				{/* <Project></Project> */}
			</main>
		</div>
	);
}

export default App;
