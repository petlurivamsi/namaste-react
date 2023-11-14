import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("should load contact us component", () => {
  //test if the contact us component is loaded on dom or not
  render(<Contact />);
  const heading = screen.getByRole("heading");

  expect(heading).toBeInTheDocument();
});

test("should load button in contact us component", () => {
  //test if the contact us component is loaded on dom or not
  render(<Contact />);
  const button = screen.getByRole("button");

  expect(button).toBeInTheDocument();
});

test("should load button in contact us component by button text", () => {
  //test if the contact us component is loaded on dom or not
  render(<Contact />);
  const button = screen.getByText("Submit");

  expect(button).toBeInTheDocument();
});

test("should load two input boxes on the contact component", () => {
  //test if the contact us component is loaded on dom or not
  render(<Contact />);
  const button = screen.getAllByRole("textbox");
  //Assertion

  expect(button.length).toBe(2);
});
