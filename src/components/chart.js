import React, { useEffect } from "react";
import Svg from "./svg";
import SiteOfLoan from "./siteOfLoan";
import Dates from './dates'
import { getUniqueValues } from "../helper/getUniqueValues";
import selectAllClick from "../helper/selectAllClick";
import draw from "../helper/draw";
import getSummed from '../helper/getSummed'
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

// const fixDates = (start, end) => {
  
// }

const Chart = ({ data }) => {
  const uniqueValues = getUniqueValues(data);
  const siteOfLoans = ["All", ...uniqueValues["Site of loan"]];
  const summedData = getSummed(data, uniqueValues);

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
      <Dates/>
      <Svg id="chart" />
    </div>
  );
};

export default Chart;
