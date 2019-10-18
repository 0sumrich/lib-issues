import React, { Fragment, useState, useEffect } from "react";
import draw from '../helper/draw'
import Svg from "./svg";
import getUniqueValues from "../helper/getUniqueValues";
import Select from "./select";

// Data object keys from csv
// Local authority,
// Site of loan,
// Count start,
// Count end,
// Type,
// Book,
// Issues

//total loans by site

const Chart = ({ data }) => {
  const [drawData, setData] = useState(data);
  const uniqueValues = getUniqueValues(drawData);
  const siteOfLoans = ['All', ...uniqueValues["Site of loan"]]
  
  useEffect(() => {
		draw(drawData)
	})
  
  return (
    <Fragment>
      <Select options={siteOfLoans} multiple/>
      <Svg id="chart" />
    </Fragment>
  );
};

export default Chart;
