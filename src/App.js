import React, { useEffect, useState } from "react";
import { csv } from "d3-fetch";
import issues from "./data/issues.csv";
import Button from "./components/button";

//const Button = () => <button class="pure-button">A Pure Button</button>

const App = ({ dataCsv }) => {
  const [data, setData] = useState(dataCsv);
  return (
    <div>
      <Button>hi</Button>
    </div>
  );
};

export default App;
