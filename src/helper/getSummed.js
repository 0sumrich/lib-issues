import { nest, sum } from "d3";

const filterByDate = (arr, start, end) =>
  arr.filter(o => o["Count start"] === start && o["Count end"] === end);

// Data object keys from csv
// Local authority,
// Site of loan,
// Count start,
// Count end,
// Type,
// Book,
// Issues

const concatDates = o => o['Count start'] + " - " + o['Count end'];
const sumAll = a => {
  const arr = a.forEach(o => o.Dates=concatDates(o))
  return nest()
    .key(d => d["Local authority"])
    .key(d => d['Dates'])
    .key(d => d["Site of loan"])
    .rollup(d => sum(d.map(o => o["Issues"])))
    .entries(arr)
    .map(o => {
      return {
        "Local authority": o.key,
        values: o.values.map(p => {
          return {
            Dates: p.dates,
            values: p.values.map(q => {
              return { "Site of loan": q.key, Issues: q.values };
            })
          };
        })
      };
    });
};

const getSummed = (data, uniqueValues) => {
  const start = uniqueValues["Count start"][0];
  const end = uniqueValues["Count end"][0];
  const filtered = filterByDate(data, start, end);
  const testData = sumAll(data);
  debugger;
  return sumAll(filtered);
};

export default getSummed;
