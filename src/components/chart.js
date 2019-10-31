import React, { useEffect } from "react";
import Svg from "./svg";
import SiteOfLoan from "./siteOfLoan";
import Dates from "./dates";
import { getUniqueValues } from "../helper/getUniqueValues";
import selectAllClick from "../helper/selectAllClick";
import draw from "../helper/draw";
import sumAll from "../helper/getSummed";
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
  const summedData = sumAll(data);
  debugger;
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

//   return (
//     <div>
//       <div className="filter-wrapper">
//         <SiteOfLoan options={siteOfLoans} onChange={handleLoanSiteChange} />
//         <Dates
//           dates={uniqueValues["Dates"]}
//           onChange={arr => console.log(arr)}
//         />
//       </div>
//       <div className="chart-wrapper">
//         <Svg id="chart" />
//       </div>
//     </div>
//   );
  return null;
};

export default Chart;
