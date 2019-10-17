import React, { useState } from "react";
import Button from "./components/button";
import css from './style/title.css'

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
    </div>
  );
};

export default App;
