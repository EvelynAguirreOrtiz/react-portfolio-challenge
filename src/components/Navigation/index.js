import React from "react";

function Nav() {
	return (
		<header>
			<h2>
				<a href="/">Evelyn Aguirre</a>
			</h2>
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
		</header>
	);
}

export default Nav;
