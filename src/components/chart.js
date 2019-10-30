import React, { Fragment, useState, useEffect } from "react";
import draw from "../helper/draw";
import Svg from "./svg";
import { unique, getUniqueValues } from "../helper/getUniqueValues";
import selectAllClick from "../helper/selectAllClick";
import Select from "./select";
import { nest, sum } from "d3";
import "../style/chart.css";

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
      return { "Site of loan": o.key, Issues: o.value };
    });
};

const Chart = ({ data }) => {
  // const [drawData, setData] = useState(data);
  const uniqueValues = getUniqueValues(data);
  const siteOfLoans = ["All", ...uniqueValues["Site of loan"]];
  // const [selected, setSelected] = useState([siteOfLoans[0]]);

  useEffect(() => {
    const start = uniqueValues["Count start"][0];
    const end = uniqueValues["Count end"][0];
    const filtered = filterByDate(data, start, end);
    const summed = sumAll(filtered);
    draw(summed);
  });

  const handleLoanSiteChange = arr => {
    const selected = selectAllClick(arr).map(x => x.value);
    const start = uniqueValues["Count start"][0];
    const end = uniqueValues["Count end"][0];
    const filtered = filterByDate(data, start, end);
    const summed = sumAll(filtered);
    console.log(selected)
    debugger;
    if (selected === ["All"]) {
      debugger;
      draw(summed);
    } else {
      draw(summed.filter(o => selected.includes(o["Site of loan"])));
    }
  };
  return (
    <div className="chart-wrapper">
      <Select
        options={siteOfLoans}
        className="select-wrapper"
        defaultValue={siteOfLoans[0]}
        placeHolderButtonLabel={"Site of Loan"}
        onChange={handleLoanSiteChange}
      />
      <Svg id="chart" />
    </div>
  );
};

export default Chart;
