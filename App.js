import React from "react";
import ReactDOM from "react-dom/client";
/**********
 *
 * <div id='parent'>
 *  <div id='parent'>
 *          <h1 id='heading'>Hi, I am heading in react</h1>
 * </div>
 * </div>
 *
 *
 *
 *
 */

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello world from React..!"
);

const headingInDiv = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", { id: "heading" }, "I am heading from div class")
  )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(headingInDiv);
