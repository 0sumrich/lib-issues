import React, { useState, useEffect } from "react";
import Svg from "./svg";
import LocalAuthority from "./localAuthority";
import Dates from "./dates";
import SiteOfLoan from "./siteOfLoan";
import selectAllClick from "../helper/selectAllClick";
import draw from "../helper/draw";
import getSites from "../helper/getSites";
import "../style/chart.css";

// Data object keys from csv
// Local authority,
// Site of loan,
// Count start,
// Count end,
// Type,
// Book,
// Issues

const getDates = (data, LAs) => {
  let res = [];
  const dataLAs = data.map(o => o["Local authority"]);
  for (let i = 0; i < LAs.length; i++) {
    const la = LAs[i];
    const target = data[dataLAs.indexOf(la)];
    target.values.forEach(o => res.push(o.Dates));
  }
  return res;
};

const Chart = ({ data }) => {
  const LAs = data.map(o => o["Local authority"]);
  const initLA = LAs[0];
  const initDatesArr = getDates(data, [initLA]);
  const initDates = initDatesArr[0];
  const [options, setOptions] = useState({
    localAuthorities: [initLA],
    dates: [initDates],
    siteOfLoans: ["All"]
  });

  useEffect(() => {
    draw(data, options);
  });

  const handleLAChange = arr => {
    const selected = arr.map(x => x.value);
    const newOptions = {
      localAuthorities: selected,
      dates: [getDates(data, selected)[0]],
      siteOfLoans: options.siteOfLoans
    };
    setOptions(newOptions);
    draw(data, newOptions);
  };

  const handleDateChange = arr => {
    const selectedDates = arr.map(x => x.value);
    const newOptions = {
      ...options,
      dates: selectedDates
    };
    setOptions(newOptions);
    draw(data, newOptions);
  };

  const handleSitesChange = arr => {
    const selectedSites = selectAllClick(arr).map(x => x.value);
    const newOptions = options;
    newOptions.siteOfLoans = selectedSites;
    setOptions(newOptions);
    draw(data, newOptions);
  };

  return (
    <div>
      <div className="filter-wrapper">
        <LocalAuthority options={LAs} onChange={handleLAChange} />
        <Dates
          dates={getDates(data, options.localAuthorities)}
          onChange={handleDateChange}
        />
        <SiteOfLoan
          options={getSites(data, options)}
          onChange={handleSitesChange}
        />
      </div>
      <div className="chart-wrapper">
        <Svg id="chart" />
      </div>
    </div>
  );
};

export default Chart;
