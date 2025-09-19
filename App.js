import React from "react";
import ReactDOM from "react-dom/client";

const heading = <h1>This is React Element</h1>;
const Title = () => {
  return <h1>This is Title from fn component</h1>;
};
const HeadingComponent = () => {
  return (
    <div>
      <Title />
      <h1>This is React Functional Component</h1>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
