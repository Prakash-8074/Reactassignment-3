import React from "react";
import ReactDOM from "react-dom/client";


const hOneReact = React.createElement(
  "div",
  { className: "title" },
  React.createElement("h1", null, "h1 heading"),
  React.createElement("h2", null, "h2 heading"),
  React.createElement("h3", null, "h3 heading")
);



const MyFunction = function () {
  return (
    <div className="title">
      <h1>h1 heading</h1>
      <h2>h2 heading</h2>
      <h3>h3 heading</h3>
    </div>
  );
};


const MyChild = function() {
  return <p>P Paragraph</p>

};

const MyParent = () => {
  return (
    <div className="title">
      <h1>h1 heading</h1>
      <h2>h2 heading</h2>
      <h3>h3 heading</h3>
      <MyChild />
    </div>
  );
};


var htmlRoot = document.getElementById("root");
var rootReact = ReactDOM.createRoot(htmlRoot);

// rootReact.render(hOneReact);

// rootReact.render(<MyFunction />);

rootReact.render(<MyParent></MyParent>);