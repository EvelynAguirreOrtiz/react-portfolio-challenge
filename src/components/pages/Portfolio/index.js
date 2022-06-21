import React, { useState } from "react";
import project1 from "../../../assets/portfolio/0.jpg";
import project2 from "../../../assets/portfolio/1.jpg";
import project3 from "../../../assets/portfolio/2.jpg";
import project4 from "../../../assets/portfolio/3.jpg";
import project5 from "../../../assets/portfolio/4.jpg";
import project6 from "../../../assets/portfolio/5.jpg";

function Portfolio() {
	const [projects] = useState([
		{
			title: "Meet Up SATX",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
		},
		{
			title: "Search, Watch, Chill",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
		},
		{
			title: "Project 3",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
		},
		{
			title: "Project 4",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
		},
		{
			title: "MProject 5",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
		},
		{
			title: "Project 6",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
		},
	]);
	// let [group, setGroup] = useState([
	// 	<img src={project1} className="project-image" alt="project1" />,
	// 	<img src={project2} className="project-image" alt="project1" />,
	// 	<img src={project3} className="project-image" alt="project1" />,
	// 	<img src={project4} className="project-image" alt="project1" />,
	// 	<img src={project5} className="project-image" alt="project1" />,
	// 	<img src={project6} className="project-image" alt="project1" />,
	// ]);

	return (
		<main>
			<div>
				<div className="card-header bg-primary text-white">My Projects</div>

				<div className="card mb-3">
					<div className="row g-0">
						<div className="col-md-4">
							<img
								src={project1}
								alt="Project Screenshot"
								className="project-image"
							/>
						</div>
						<div className="col-md-8">
							<div className="card-body">
								<h5 className="card-title">Project title</h5>
								<p class="card-text">Project description</p>
								<a href="#" className="btn btn-outline">
									View Project
								</a>
								<a
									href="https://github.com/EvelynAguirreOrtiz"
									className="btn btn-outline"
								>
									View GitHub Repository
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* <div className="card text-center">
				<div className="card-header bg-primary text-white">My Projects</div>

				<div className="card-body">
					<ul>
						{group.map((group) => (
							<li>{group}</li>
						))}
					</ul>
				</div>
			</div> */}
			{projects.map((project, i) => (
				<div className="card mb-3">
					<div className="row g-0">
						{/* {projects.map((project, i) => ( */}
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
			))}
		</main>
	);
}

export default Portfolio;
