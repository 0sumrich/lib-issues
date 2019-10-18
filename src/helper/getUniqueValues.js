const getUnique = arr => [...new Set(arr)];
const getColumn = (colName, dataArr) => dataArr.map(o => o[colName]);
const unique = (str, data) => getUnique(getColumn(str, data));
const columns = data => Object.keys(data[0]);
const getUniqueValues = data => {
  const res = {};
  columns.forEach(col => {
    res[col] = unique(col, data);
  });
  return res;
}

export {getUnique, getColumn, unique, columns, getUniqueValues}