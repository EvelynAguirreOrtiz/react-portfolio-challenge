import React from "react";

function Footer() {
	return (
		<footer className="text-center ">
			<div className="container">
				<section className="icons">
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

					<a href="https://www.facebook.com/evelyn.aguirre.54966">
						<button className="btn facebook">
							<i className="bi bi-facebook"></i>
						</button>
					</a>
				</section>
			</div>
		</footer>
	);
}

export default Footer;
