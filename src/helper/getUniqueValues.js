const getUnique = arr => [...new Set(arr)];
const getColumn = (colName, dataArr) => dataArr.map(o => o[colName]);
const unique = (str, data) => getUnique(getColumn(str, data));
const uniqueDates = arr => {
  let res = [];
  let match = o =>
    res.filter(obj => obj.start === o.start && obj.end === o.end).length > 0;
  for (let i = 0; i < arr.length; i++) {
    const dates = arr[i].Dates;
    if (!match(dates)) {
      res.push(dates);
    }
  }
  return res;
};
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
    if (col === "Dates") {
      res[col] = uniqueDates(data);
    } else {
      res[col] = unique(col, data);
    }
  });
  debugger;
  return res;
};

export { getUnique, getColumn, unique, columns, getUniqueValues };
