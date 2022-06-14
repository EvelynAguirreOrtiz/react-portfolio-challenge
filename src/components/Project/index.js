import React, { useState } from "react";

function Project() {
	// TODO: Convert `group` to a state variable using the useState hook. Set to an initial value to an array including three students in your class. (ex. ["John", "Grace", "Jared"])
	let [group, setGroup] = useState([
		"Project 1",
		"Project 2",
		"Project 3",
		"Project 4",
		"Project 5",
		"Project 6",
	]);

	return (
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
	);
}

export default Project;
