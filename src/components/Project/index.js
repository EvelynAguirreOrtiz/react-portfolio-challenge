import React, { useState } from "react";

function Project() {
	const [projects] = useState([
		{
			title: "Meet Up SATX",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
			link: "https://meet-up-satx.herokuapp.com/",
			github:
				"https://github.com/EvelynAguirreOrtiz/meet-up-satx-utsa-bc-project-2.git",
		},
		{
			title: "Search, Watch, Chill",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
			link: "https://archiedonaho.github.io/Search-Watch-Chill/",
			github: "https://github.com/ArchieDonaho/Search-Watch-Chill.git",
		},
		{
			title: "Project 3",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
			link: "https://meet-up-satx.herokuapp.com/",
			github:
				"https://github.com/EvelynAguirreOrtiz/meet-up-satx-utsa-bc-project-2.git",
		},
		{
			title: "Project 4",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
			link: "https://meet-up-satx.herokuapp.com/",
			github:
				"https://github.com/EvelynAguirreOrtiz/meet-up-satx-utsa-bc-project-2.git",
		},
		{
			title: "MProject 5",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
			link: "https://meet-up-satx.herokuapp.com/",
			github:
				"https://github.com/EvelynAguirreOrtiz/meet-up-satx-utsa-bc-project-2.git",
		},
		{
			title: "Project 6",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
			link: "https://meet-up-satx.herokuapp.com/",
			github:
				"https://github.com/EvelynAguirreOrtiz/meet-up-satx-utsa-bc-project-2.git",
		},
	]);

	return (
		<div>
			{projects.map((project, i) => (
				<div className="card mb-3">
					<div className="row g-0">
						<div className="col-md-4">
							<img
								src={require(`../../assets/portfolio/${i}.jpg`)}
								alt={project.title}
								className="project-image"
							/>
						</div>
						<div className="col-md-8">
							<div className="card-body">
								<h5 className="card-title">{project.title}</h5>
								<p class="card-text">{project.description}</p>
								<a href={project.link} className="btn btn-outline-primary">
									View Project
								</a>
								<a href={project.github} className="btn btn-outline-primary">
									View GitHub Repository
								</a>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
export default Project;
