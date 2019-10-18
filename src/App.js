import React, { Fragment } from "react";
import Chart from "./components/chart";
import "./style/title.css";

const Title = () => (
  <header>
    <h1>UK Library Issues</h1>
  </header>
);

const App = ({ data }) => {
  return (
    <Fragment>
      <Title />
      <main>
        <Chart data={data} />
      </main>
    </Fragment>
  );
};

export default App;
