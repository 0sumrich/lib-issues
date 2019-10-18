import React, { useState } from "react";
import Button from "./components/button";
import Chart from "./components/chart";
import css from "./style/title.css";

const Title = () => (
  <header>
    <h1>UK Library Issues</h1>
  </header>
);

const App = ({ dataCsv }) => {
  const [data, setData] = useState(dataCsv);

  return (
    <div>
      <Title />
      <Chart data={data} />
    </div>
  );
};

export default App;
