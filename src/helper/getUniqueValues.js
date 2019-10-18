export default function (data) {
  const getUnique = arr => [...new Set(arr)];
  const getColumn = (colName, dataArr) => dataArr.map(o => o[colName]);
  const unique = str => getUnique(getColumn(str, data));
  const columns = Object.keys(data[0]);
  const res = {};
  columns.forEach(col => {
    res[col] = unique(col);
  });
  return res;
}