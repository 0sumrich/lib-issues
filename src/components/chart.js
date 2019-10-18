import React, {useState, useEffect} from "react";
import Svg from './svg'
import getUniqueValues from '../helper/getUniqueValues'

// Data object keys from csv
// Local authority,
// Site of loan,
// Count start,
// Count end,
// Type,
// Book,
// Issues

// let unique = [...new Set(myArray)];
//total loans by site

const Chart = ({ data }) => {
  const [drawData, setData] = useState(drawData)
  const uniqueValues = getUniqueValues(drawData);
  return <Svg id='chart'/>
};

export default Chart;
