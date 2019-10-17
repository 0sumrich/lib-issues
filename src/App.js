import React, { useEffect, useState } from "react";
import {csv} from "d3-fetch";
import issues from './data/issues.csv'

const App = ({dataCsv}) => {  
  const [data, setData] = useState(dataCsv);  
  return <div>hi</div>;
};

export default App;
