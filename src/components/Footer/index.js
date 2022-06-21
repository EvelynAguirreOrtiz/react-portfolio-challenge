import React from "react";
// import { BsGithub } from "bootstrap-icons";

function Footer() {
	return (
		<footer className="text-center text-white">
			<div className="container pt-4">
				<section className="mb-4">
					<a href="https://github.com/EvelynAguirreOrtiz">
						<button className="btn github">
							<i className="bi bi-github"></i>
						</button>
					</a>
					<a href="https://www.linkedin.com/in/evelyn-aguirre-5224b56/">
						<button className="btn linkedin">
							<i className="bi bi-linkedin"></i>
						</button>
					</a>
					<a href="https://www.linkedin.com/in/evelyn-aguirre-5224b56/">
						<button className="btn instagram">
							<i className="bi bi-instagram"></i>
						</button>
					</a>
				</section>
			</div>
		</footer>
	);
}

export default Footer;
