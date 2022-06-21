// import React, { useState } from "react";
import React from "react";
import Project from "../../Project";

function Portfolio() {
	// const [projects] = useState([
	// 	{
	// 		title: "Meet Up SATX",
	// 		description:
	// 			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
	// 	},
	// 	{
	// 		title: "Search, Watch, Chill",
	// 		description:
	// 			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
	// 	},
	// 	{
	// 		title: "Project 3",
	// 		description:
	// 			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
	// 	},
	// 	{
	// 		title: "Project 4",
	// 		description:
	// 			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
	// 	},
	// 	{
	// 		title: "MProject 5",
	// 		description:
	// 			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
	// 	},
	// 	{
	// 		title: "Project 6",
	// 		description:
	// 			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
	// 	},
	// ]);

	return (
		<main>
			<div className="card-header bg-primary text-white">My Projects</div>
			<Project />
			{/* {projects.map((project, i) => (
				<div className="card mb-3">
					<div className="row g-0">
						<div className="project-card">
							<div className="col-md-4">
								<img
									src={require(`../../../assets/portfolio/${i}.jpg`)}
									alt={project.title}
									className="project-image"
								/>
							</div>

							<div className="col-md-8">
								<div className="card-body">
									<h5 className="card-title">{project.title}</h5>
									<p class="card-text">{project.description}</p>
									<a href="#" className="btn btn-outline-primary">
										View Project
									</a>
									<a
										href="https://github.com/EvelynAguirreOrtiz"
										className="btn btn-outline-primary"
									>
										View GitHub Repository
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			))} */}
		</main>
	);
}

export default Portfolio;
