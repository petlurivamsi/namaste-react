import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React..!"
);

const Title = () => <h1>React Title component</h1>;
const jsxHeading = <h1 id="heading">Hi Iam from JSX</h1>;
console.log(jsxHeading, "jsx");

const Heading = () => (
  <div>
    <Title />
    <h1>Namaste React Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);

/**
 *
 * To render a react component, we use below syntax
 */

root.render(<Heading />);
const newRoot = ReactDOM.createRoot(document.getElementById("root"));

newRoot.render(<Title />);
