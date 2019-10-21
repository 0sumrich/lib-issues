import React, { Fragment, useState, useEffect } from "react";
import draw from "../helper/draw";
import Svg from "./svg";
import { unique, getUniqueValues } from "../helper/getUniqueValues";
import Select from "./select";
import { nest, sum } from "d3";
// Data object keys from csv
// Local authority,
// Site of loan,
// Count start,
// Count end,
// Type,
// Book,
// Issues

//total loans by site

const filterByDate = (arr, start, end) =>
  arr.filter(o => o["Count start"] === start && o["Count end"] === end);

const sumAll = arr => {
  return nest()
    .key(d => d["Site of loan"])
    .rollup(d => sum(d.map(o => o["Issues"])))
    .entries(arr)
    .map(o => {
    return {'Site of loan': o.key, 'Issues': o.value}
  });
};

const Chart = ({ data }) => {
  const [drawData, setData] = useState(data);
  const uniqueValues = getUniqueValues(drawData);
  const siteOfLoans = ["All", ...uniqueValues["Site of loan"]];

  useEffect(() => {
    const start = uniqueValues["Count start"][0];
    const end = uniqueValues["Count end"][0];
    const filtered = filterByDate(drawData, start, end);
    const summed = sumAll(filtered);
    draw(summed);
  });

  return (
    <Fragment>
      <Select options={siteOfLoans} multiple />
      <Svg id="chart" />
    </Fragment>
  );
};

export default Chart;
