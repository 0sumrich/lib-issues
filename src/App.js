import React from "react";
import Chart from "./components/chart";
import "./style/title.css";

const Title = () => (
  <header>
    <h1>UK Library Issues</h1>
  </header>
);

const App = ({ data }) => {
  return (
    <div>
      <Title />
      <Chart data={data} />
    </div>
  );
};

export default App;
