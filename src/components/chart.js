import React, { useEffect } from "react";
import Svg from "./svg";
import Select from "./select";
import SiteOfLoan from "./siteOfLoan";
import { unique, getUniqueValues } from "../helper/getUniqueValues";
import selectAllClick from "../helper/selectAllClick";
import draw from "../helper/draw";
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

const getSummed = (data, uniqueValues) => {
    const start = uniqueValues["Count start"][0];
    const end = uniqueValues["Count end"][0];
    const filtered = filterByDate(data, start, end);
    return sumAll(filtered);
}

const Chart = ({ data }) => {
  const uniqueValues = getUniqueValues(data);
  const siteOfLoans = ["All", ...uniqueValues["Site of loan"]];
  const summedData = getSummed(data);
  
  useEffect(() => {
    draw(summedData);
  });

  const handleLoanSiteChange = arr => {
    const selected = selectAllClick(arr).map(x => x.value);
    if (selected.includes("All")) {
      draw(summedData);
    } else {
      draw(summedData.filter(o => selected.includes(o["Site of loan"])));
    }
  };
  
  return (
    <div className="chart-wrapper">
      <SiteOfLoan options={siteOfLoans} onChange={handleLoanSiteChange} />
      <Svg id="chart" />
    </div>
  );
};

export default Chart;
