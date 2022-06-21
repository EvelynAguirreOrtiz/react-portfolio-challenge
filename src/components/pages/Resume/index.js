import React from "react";

function Resume() {
	return (
		<main className="my-5">
			<h3 id="resume">My Resume</h3>

			<div className="proficiencies">
				<p>Front-end Proficiencies:</p>
				<ul>
					<li>HTML</li>
					<li>CSS</li>
					<li>JavaScript</li>
					<li>React</li>
				</ul>
				<p>Back-end Proficiencies:</p>
				<ul>
					<li>APIs</li>
					<li>Node</li>
					<li>Express</li>
					<li>MySql</li>
					<li>MongoDB, Mongoose</li>
				</ul>
				<p>Download my resume [here]</p>
			</div>
		</main>
	);
}

export default Resume;
