import React, { useState } from "react";
import { validateEmail } from "../../../utils/helpers";

function Contact() {
	const [contactForm, setContactForm] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [errorMessage, setErrorMessage] = useState("");
	const { name, email, message } = contactForm;

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!errorMessage) {
			console.log("Submit Form", contactForm);
		}
	};

	const handleChange = (e) => {
		if (e.target.name === "email") {
			const isValid = validateEmail(e.target.value);
			if (!isValid) {
				setErrorMessage("Your email is invalid.");
			} else {
				setErrorMessage("");
			}
		} else {
			if (!e.target.value.length) {
				setErrorMessage(`${e.target.name} is required.`);
			} else {
				setErrorMessage("");
			}
		}
		if (!errorMessage) {
			setContactForm({ ...contactForm, [e.target.name]: e.target.value });
			console.log("Handle Form", contactForm);
		}
	};

	return (
		<main>
			<h2 data-testid="h1tag">For More Information . . . </h2>
			<form className="form-group" id="contact-form" onSubmit={handleSubmit}>
				<div className="form-box">
					<input
						className="input-text"
						type="text"
						name="Your name"
						defaultValue={name}
						onBlur={handleChange}
						placeholder="Your Name (required)"
					/>
				</div>
				<div className="form-box">
					<input
						className="input-text"
						type="email"
						name="email"
						defaultValue={email}
						onBlur={handleChange}
						placeholder="Your Email Address (required)"
					/>
				</div>
				<div className="form-box">
					<textarea
						className="input-text"
						name="Your message"
						rows="5"
						defaultValue={message}
						onBlur={handleChange}
						placeholder="Your Message (required)"
					/>
				</div>
				{errorMessage && (
					<div>
						<p className="error-text">{errorMessage}</p>
					</div>
				)}
				<button data-testid="button" className="contact-btn" type="submit">
					Submit
				</button>
			</form>
		</main>
	);
}

export default Contact;
