import React from "react";
// import { BsGithub } from "bootstrap-icons";

function Footer() {
	return (
		// <footer>
		// 	<div>
		// 		<a href="https://github.com/EvelynAguirreOrtiz">
		// 			<button className="github">
		// 				<i className="fa-brands fa-github fa-2x"></i>GitHub
		// 			</button>
		// 		</a>

		// 		<a href="https://www.linkedin.com/in/evelyn-aguirre-5224b56/">
		// 			<button className="linkedin">
		// 				<i className="fa-brands fa-linkedin fa-2x"></i>LinkedIn
		// 			</button>
		// 		</a>
		// 	</div>
		// </footer>

		<footer className="text-center text-white">
			<div className="container pt-4">
				<section className="mb-4">
					<a href="https://github.com/EvelynAguirreOrtiz">
						<button className="github">
							<i className="bi bi-github"></i>GitHub
						</button>
					</a>
					<a href="https://www.linkedin.com/in/evelyn-aguirre-5224b56/">
						<button className="linkedin">
							<i className="bi bi-linkedin"></i>LinkedIn
						</button>
					</a>
					<a href="https://www.linkedin.com/in/evelyn-aguirre-5224b56/">
						<button className="linkedin">
							<i className="bi bi-instagram"></i>LinkedIn
						</button>
					</a>
				</section>
			</div>
		</footer>
	);
}

export default Footer;
