import { nest, sum } from "d3";

// Data object keys from csv
// Local authority,
// Site of loan,
// Count start,
// Count end,
// Type,
// Book,
// Issues

const concatDates = o => o["Count start"] + " - " + o["Count end"];

const sumAll = a => {
  let arr = []
  for(let i=0;i<a.length;i++){
    const o = a[i];
    const dates = concatDates(o)
    o.Dates = dates
    arr.push(o)
  }
  return nest()
    .key(d => d["Local authority"])
    .key(d => d["Dates"])
    .key(d => d["Site of loan"])
    .rollup(d => sum(d.map(o => o["Issues"])))
    .entries(arr)
    .map(o => {
      return {
        "Local authority": o.key,
        values: o.values.map(p => {
          return {
            Dates: p.key,
            values: p.values.map(q => {
              return { 'Site of loan': q.key, 'Issues': q.value };
            })
          };
        })
      };
    });
};

export default sumAll;
