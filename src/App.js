import React, { useState } from "react";
import Button from "./components/button";

//const Button = () => <button class="pure-button">A Pure Button</button>

const App = ({ dataCsv }) => {
  const [data, setData] = useState(dataCsv);
  return (
    <div>
      <Button>Pure Button</Button>
    </div>
  );
};

export default App;
