import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Navigation from "..";

afterEach(cleanup);

describe("Navigation component", () => {
	it("renders", () => {
		render(<Navigation />);
	});
	it("matches snapshot", () => {
		const { asFragment } = render(<Navigation />);
		expect(asFragment()).toMatchSnapshot();
	});
});

describe("links are visible", () => {
	it("inserts text into the links", () => {
		const { getByTestId } = render(<Navigation />);
		expect(getByTestId("about")).toHaveTextContent("About Me");
		expect(getByTestId("portfolio")).toHaveTextContent("Portfolio");
		expect(getByTestId("resume")).toHaveTextContent("Resume");
	});
});
