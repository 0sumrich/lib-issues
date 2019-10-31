const getUnique = arr => [...new Set(arr)];
const getColumn = (colName, dataArr) => dataArr.map(o => o[colName]);
const unique = (str, data) => getUnique(getColumn(str, data));
const columns = data => Object.keys(data[0]);
const datesFix = data => {
  for (let i = 0; i < data.length; i++) {
    const o = data[i];
    data[i].Dates = { start: o["Count start"], end: o["Count end"] };
  }
  return data;
};
const getUniqueValues = d => {
  const data = datesFix(d);
  const res = {};
  columns(data).forEach(col => {
    res[col] = unique(col, data);
  });
  return res;
};

export { getUnique, getColumn, unique, columns, getUniqueValues };
