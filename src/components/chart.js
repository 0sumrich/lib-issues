import React from "react";

// Data object keys from csv
// Local authority,
// Site of loan,
// Count start,
// Count end,
// Type,
// Book,
// Issues

function getUniqueValues(data){
  const getUnique = arr => [...new Set(arr)];
  const getColumn = (colName, dataArr) => dataArr.map(o => o[colName]);
  const unique = str => getUnique(getColumn(str, data))
  const columns = ['Local authority', 'Site of Loan', 'Type']
  const res = {}
  columns.forEach(col => {
    res[col] = unique(col)
  })
  return res
}

// let unique = [...new Set(myArray)];

const Chart = ({ data }) => {
  const uniqueValues = getUniqueValues(data)
  debugger;
  return <svg></svg>;
};

export default Chart;
