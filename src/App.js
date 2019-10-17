import React, { useEffect, useState } from "react";
import {csv} from "d3-fetch";
import issues from './data/issues.csv'

const App = () => {
  
  const [data, setData] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      const res = await csv(issues);
      debugger;
      setData(res);
    };
    fetchData();
  }, []);
  
  console.log(data);
  
  return <div>hi</div>;
};

export default App;
