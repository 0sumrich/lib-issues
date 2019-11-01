import React, { useState, useEffect } from "react";
import Svg from "./svg";
import LocalAuthority from "./localAuthority";
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
  const LAs = data.map(o => o["Local authority"])
  const [options, setOptions] = useState({
    localAuthorities: [LAs[0]],
    dates: data[0].values[0].Dates,
    siteOfLoans: ['All']
  })
  
  useEffect(() => {
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
  
  const handleLAChange = arr => {
    const selected = arr.map(x => x.value);
  }
  
  return (
    <div>
      <div className="filter-wrapper">
        <LocalAuthority options={LAs} onChange={handleLAChange}/>
      </div>
      <div className="chart-wrapper">
        <Svg id="chart" />
      </div>
    </div>
  );

  return null;
};

export default Chart;
