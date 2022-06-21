import React, { useState } from "react";

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

function Project() {
	const { currentCategory } = props;
	return (
		// <section>
		// 	<h1 data-testid="h1tag">{capitalizeFirstLetter(currentCategory.name)}</h1>
		// 	<p>{currentCategory.description}</p>
		// 	<ProjectList category={currentCategory.name} />
		// </section>

		<div>
			<div className="card mb-3">
				<div className="row g-0">
					<div className="col-md-4">
						{projects.map((project, i) => (
							<img
								src={require(`../../../assets/portfolio/${i}.jpg`)}
								alt={project.title}
								className="project-image"
							/>
						))}
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">Project title</h5>
							<p class="card-text">Project description</p>
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
	);
}
export default Project;
