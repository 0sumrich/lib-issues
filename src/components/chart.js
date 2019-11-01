import React, { useEffect } from "react";
import Svg from "./svg";
import LocalAuthority from './localAuthority';
import Dates from "./dates";
import SiteOfLoan from "./siteOfLoan";
import selectAllClick from "../helper/selectAllClick";
import draw from "../helper/draw";
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
  // const uniqueValues = getUniqueValues(data);
  // const siteOfLoans = ["All", ...uniqueValues["Site of loan"]];
  // const summedData = getSummed(data, uniqueValues);
  // const summedData = sumAll(data);
  useEffect(() => {
    const chartData = data[0].values[0].values
    const init = data[0]
    const options = {
      localAuthority: init['Local authority'],
      dates: init.values[0].Dates,
      siteOfLoan: 'All' 
    }
    draw(data, options);
  });

  // const handleLoanSiteChange = arr => {
  //   const selected = selectAllClick(arr).map(x => x.value);
  //   if (selected.includes("All")) {
  //     draw(summedData);
  //   } else {
  //     draw(summedData.filter(o => selected.includes(o["Site of loan"])));
  //   }
  // };

  // return (
  //   <div>
  //     <div className="filter-wrapper">
  //       <SiteOfLoan options={siteOfLoans} onChange={handleLoanSiteChange} />
  //       <Dates
  //         dates={uniqueValues["Dates"]}
  //         onChange={arr => console.log(arr)}
  //       />
  //     </div>
  //     <div className="chart-wrapper">
  //       <Svg id="chart" />
  //     </div>
  //   </div>
  // );
    return (
    <div>
      <div className="chart-wrapper">
        <LocalAuthority 
        <Svg id="chart" />
      </div>
    </div>
  );
  
  return null;
};

export default Chart;
