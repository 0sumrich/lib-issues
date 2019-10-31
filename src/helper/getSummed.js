import { nest, sum } from "d3";

const filterByDate = (arr, start, end) =>
  arr.filter(o => o["Count start"] === start && o["Count end"] === end);

const sumAll = arr => {
  return nest()
    .key(d => d["Site of loan"])
    .rollup(d => sum(d.map(o => o["Issues"])))
    .entries(arr)
    .map(o => {
      return { "Site of loan": o.key, Issues: o.value };
    });
};

const getSummed = (data, uniqueValues) => {
  const start = uniqueValues["Count start"][0];
  const end = uniqueValues["Count end"][0];
  const filtered = filterByDate(data, start, end);
  const testData = sumAll(data)
  return sumAll(filtered);
};

export default getSummed;