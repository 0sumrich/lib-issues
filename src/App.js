import React, { useEffect, useState } from "react";
import * as d3 from "d3-fetch";

const App = () => {
  
  const [data, setData] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      const result = await d3.csv("./data/issues.csv");
      debugger;
      setData(result);
    };
    fetchData();
  }, []);
  
  console.log(data);
  
  return <div>hi</div>;
};

export default App;
