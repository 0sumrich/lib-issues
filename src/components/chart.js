import React from "react";
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

const Chart = ({ data }) => {
  const uniqueValues = getUniqueValues(data);
  debugger;
  return <svg></svg>;
};

export default Chart;
