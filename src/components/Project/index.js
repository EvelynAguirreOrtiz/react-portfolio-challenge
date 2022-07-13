import React, { useState } from "react";

function Project() {
	const [projects] = useState([
		{
			title: "Learn Your Marvel Characters",
			description: "MERN Stack",
			link: "https://boiling-headland-24136.herokuapp.com/",
			github: "https://github.com/amhernandez1163/lymc.git",
		},
		{
			title: "Meet Up SATX",
			description: "JavaScript, HTML, CSS",
			link: "https://meet-up-satx.herokuapp.com/",
			github:
				"https://github.com/EvelynAguirreOrtiz/meet-up-satx-utsa-bc-project-2.git",
		},
		{
			title: "Search, Watch, Chill",
			description: "JavaScript, HTML, CSS",
			link: "https://archiedonaho.github.io/Search-Watch-Chill/",
			github: "https://github.com/ArchieDonaho/Search-Watch-Chill.git",
		},
		{
			title: "Budget Tracker PWA",
			description: "JavaScript, HTML, CSS",
			link: "https://desolate-chamber-00936.herokuapp.com/",
			github:
				"https://github.com/EvelynAguirreOrtiz/budget-tracker-challenge-utsa-bc-06-2022.git",
		},
		{
			title: "Note Taker",
			description: "Javascript, HTML, CSS",
			link: "https://guarded-bastion-50474.herokuapp.com/",
			github:
				"https://github.com/EvelynAguirreOrtiz/notetaker-challenge-utsa-bc-04-2022.git",
		},
		{
			title: "Weather Dashboard",
			description: "JavaScript, HTML, CSS",
			link: "https://evelynaguirreortiz.github.io/weather-dashboard-challenge-utsa-bc-03-2022/",
			github:
				"https://github.com/EvelynAguirreOrtiz/weather-dashboard-challenge-utsa-bc-03-2022.git",
		},
		{
			title: "Work Day Scheduler",
			description: "JavaScript, HTML, CSS",
			link: "https://evelynaguirreortiz.github.io/work-day-scheduler-challenge-utsa-bc-03-2022/",
			github:
				"https://github.com/EvelynAguirreOrtiz/work-day-scheduler-challenge-utsa-bc-03-2022.git",
		},
	]);

	return (
		<div>
			{projects.map((project, i) => (
				<div className="card mb-3">
					<div className="row g-0 project-block">
						<div className="col-md-5">
							<img
								src={require(`../../assets/portfolio/${i}.jpg`)}
								alt={project.title}
								className="project-image"
								// key=
							/>
						</div>
						<div className="col-md-7">
							<div className="card-body">
								<h5 className="card-title">{project.title}</h5>
								<p className="card-text">{project.description}</p>
								<a href={project.link} className="btn btn-outline-primary">
									View Project
								</a>
								<a href={project.github} className="btn btn-outline-primary">
									View GitHub Repository <i className="bi-sm bi-github "></i>
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
