import React, { useState } from "react";
import project1 from "../../assets/portfolio/0.jpg";
import project2 from "../../assets/portfolio/1.jpg";
import project3 from "../../assets/portfolio/2.jpg";
import project4 from "../../assets/portfolio/3.jpg";
import project5 from "../../assets/portfolio/4.jpg";
import project6 from "../../assets/portfolio/5.jpg";

function Project() {
	let [group, setGroup] = useState([
		<img
			src={project1}
			className="project-1"
			// style={{ width: "100%" }}
			alt="project1"
		/>,
		<img
			src={project2}
			className="project-1"
			// style={{ width: "100%" }}
			alt="project1"
		/>,
		<img
			src={project3}
			className="project-1"
			// style={{ width: "100%" }}
			alt="project1"
		/>,
		<img
			src={project4}
			className="project-1"
			// style={{ width: "100%" }}
			alt="project1"
		/>,
		<img
			src={project5}
			className="project-1"
			// style={{ width: "100%" }}
			alt="project1"
		/>,
		<img
			src={project6}
			className="project-1"
			// style={{ width: "100%" }}
			alt="project1"
		/>,
	]);

	return (
		<main>
			<div className="card text-center">
				<div className="card-header bg-primary text-white">My Projects</div>
				<div className="card-body">
					<ul>
						{group.map((group) => (
							<li>{group}</li>
						))}
					</ul>
				</div>
			</div>
		</main>
	);

	// return (
	// 	<div>
	// 		<div className="flex-row">
	// 			{group.map((image, i) => (
	// 				<img
	// 					src={require(`../../assets/portfolio/${i}.jpg`).default}
	// 					alt={image.className}
	// 					className="img-thumbnail mx-1"
	// 					key={image.className}
	// 				/>
	// 			))}
	// 		</div>
	// 	</div>
	// );
}

export default Project;
