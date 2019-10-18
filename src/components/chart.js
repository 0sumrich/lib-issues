import React from "react";

// Data object keys from csv
// Local authority,
// Site of loan,
// Count start,
// Count end,
// Type,
// Book,
// Issues

const getUnique = arr => [...new Set(arr)];
Array.prototype.unique = () => getUnique(this);
const getColumn = (colName, dataArr) => dataArr.map(o => o[colName]);

// let unique = [...new Set(myArray)];

const Chart = ({ data }) => {
  const authorityNames = getColumn("Local authority", data)//.unique();
  debugger;
  return <svg></svg>;
};

export default Chart;
