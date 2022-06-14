import React, { useState } from "react";

function Navigation() {
	return (
		<nav>
			<ul className="flex-row">
				<li className="nav-margin">
					<a data-testid="about" href="#about">
						About Me
					</a>
				</li>
				<li className="nav-margin">
					<a data-testid="portfolio" href="#portfolio">
						Portfolio
					</a>
				</li>
				<li className="nav-margin">
					<a data-testid="resume" href="#resume">
						Resume
					</a>
				</li>
				<li>
					<span>Contact</span>
				</li>
			</ul>
		</nav>
	);
}

export default Navigation;
